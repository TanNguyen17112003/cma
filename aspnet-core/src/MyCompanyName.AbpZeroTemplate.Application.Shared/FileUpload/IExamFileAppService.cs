using Abp.Application.Services.Dto;
using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace MyCompanyName.AbpZeroTemplate.FileUpload
{
    public interface IExamFileAppService : IApplicationService
    {
        ListResultDto<ExamFileListDto> GetPeople(GetExamFilesInput input);
        Task CreateExamFile(CreateExamFileInput input);

    }

    public class GetExamFilesInput
    {
        public string Filter { get; set; }
    }

    public class CreateExamFileInput
    {
        public CreateExamFileInput(string description, string filepath) {
            Description = description;
            FilePath = filepath;
        }

        [Required]
        [MaxLength(ExamFileConsts.MaxDescriptionLength)]
        public string Description { get; set; }

        [Required]
        [MaxLength(ExamFileConsts.MaxFilePathLength)]
        public string FilePath { get; set; }
    }


    public class ExamFileListDto : FullAuditedEntityDto
    {
        public string Description { get; set; }

        public string FilePath { get; set; }
    }

}
