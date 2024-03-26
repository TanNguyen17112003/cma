using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using AutoMapper;
using Stripe;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Extensions;
using Abp.Linq.Extensions;
using Abp.Authorization;
using MyCompanyName.AbpZeroTemplate.Authorization;
using MyCompanyName.AbpZeroTemplate.ERP;

namespace MyCompanyName.AbpZeroTemplate.ERP
{
    public class ExamAppService : AbpZeroTemplateAppServiceBase, IExamAppService
    {
        private readonly IRepository<Exam,int> _examRepository;
        private readonly IRepository<Topic> _topicRepository;

        public ExamAppService(IRepository<Exam> examRepository, IRepository<Topic> topicRepository)
        {
            _examRepository = examRepository;
            _topicRepository = topicRepository;
        }

        public ListResultDto<ExamListDto> GetExams(GetExamsInput input)
        {
            var exam = _examRepository
                .GetAll()
                .OrderBy(p => p.Time_amount)
                .ThenBy(p => p.Join)
                .ToList();

            return new ListResultDto<ExamListDto>(ObjectMapper.Map<List<ExamListDto>>(exam));
        }

        public async Task<ExamInTopicListDto> AddExam(CreateExamInput input)
        {
            var topic = _topicRepository.Get(input.TopicId);
            await _topicRepository.EnsureCollectionLoadedAsync(topic, p => p.Exams);

            var exam = ObjectMapper.Map<Exam>(input);
            topic.Exams.Add(exam);

            //Get auto increment Id of the new Phone by saving to database
            await CurrentUnitOfWork.SaveChangesAsync();

            return ObjectMapper.Map<ExamInTopicListDto>(exam);
        }

        public async Task DeleteExam(EntityDto input)
        {
            await _examRepository.DeleteAsync(input.Id);
        }

        public async Task<GetExamForEditOutput> GetExamForEdit(GetExamForEditInput input)
        {
            var exam = await _examRepository.GetAsync(input.Id);
            return ObjectMapper.Map<GetExamForEditOutput>(exam);
        }

        public async Task EditExam(EditExamInput input)
        {
            var exam = await _examRepository.GetAsync(input.Id);
            exam.Time_amount = input.Time_amount;
            exam.Join = input.Join;
            await _examRepository.UpdateAsync(exam);
        }

    }

}
