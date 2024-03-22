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

namespace MyCompanyName.AbpZeroTemplate.FileUpload
{
    public class ExamFileAppService : AbpZeroTemplateAppServiceBase, IExamFileAppService
    {
        private readonly IRepository<ExamFile> _examFileRepository;

        public ExamFileAppService(IRepository<ExamFile> examFileRepository)
        {
            _examFileRepository = examFileRepository;
        }

        public ListResultDto<ExamFileListDto> GetPeople(GetExamFilesInput input)
        {
            var people = _examFileRepository
                .GetAll()
                .WhereIf(
                    !input.Filter.IsNullOrEmpty(),
                    p => p.Description.Contains(input.Filter) ||
                         p.FilePath.Contains(input.Filter)
                )
                .OrderBy(p => p.Description)
                .ThenBy(p => p.FilePath)
                .ToList();

            return new ListResultDto<ExamFileListDto>(ObjectMapper.Map<List<ExamFileListDto>>(people));
        }

        public async Task CreateExamFile(CreateExamFileInput input)
        {
            var examFile = ObjectMapper.Map<ExamFile>(input);
            await _examFileRepository.InsertAsync(examFile);
        }

    }

}
