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
using Microsoft.EntityFrameworkCore;

namespace MyCompanyName.AbpZeroTemplate.ERP
{
    public class QuestionAppService : AbpZeroTemplateAppServiceBase, IQuestionAppService
    {
        private readonly IRepository<Question> _questionRepository;

        public QuestionAppService(IRepository<Question> questionRepository)
        {
            _questionRepository = questionRepository;
        }

        public ListResultDto<QuestionListDto> GetQuestions(GetQuestionsInput input)
        {
            var question = _questionRepository
                .GetAll()
                .Include(q=>q.ExamFile)
                .WhereIf(
                    !input.Filter.IsNullOrEmpty(),
                    p => p.Content.Contains(input.Filter) ||
                         p.Answer.Contains(input.Filter)
                )
                .OrderBy(p => p.Content)
                .ThenBy(p => p.Answer)
                .ToList();

            return new ListResultDto<QuestionListDto>(ObjectMapper.Map<List<QuestionListDto>>(question));
        }

        public async Task CreateQuestion(CreateQuestionInput input)
        {
            var question = ObjectMapper.Map<Question>(input);
            await _questionRepository.InsertAsync(question);
        }

        public async Task DeleteQuestion(EntityDto input)
        {
            await _questionRepository.DeleteAsync(input.Id);
        }

        public async Task<GetQuestionForEditOutput> GetQuestionForEdit(GetQuestionForEditInput input)
        {
            var question = await _questionRepository.GetAsync(input.Id);
            return ObjectMapper.Map<GetQuestionForEditOutput>(question);
        }

        public async Task EditQuestion(EditQuestionInput input)
        {
            var question = await _questionRepository.GetAsync(input.Id);
            question.Content = input.Content;
            question.Answer = input.Answer;
            await _questionRepository.UpdateAsync(question);
        }

    }

}
