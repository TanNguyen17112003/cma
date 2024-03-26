using Abp.Application.Services.Dto;
using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace MyCompanyName.AbpZeroTemplate.ERP
{
    public interface IExamAppService : IApplicationService
    {
        ListResultDto<ExamListDto> GetExams(GetExamsInput input);
        Task<ExamInTopicListDto> AddExam (CreateExamInput input);
        Task DeleteExam(EntityDto input);
        Task<GetExamForEditOutput> GetExamForEdit(GetExamForEditInput input);
        Task EditExam(EditExamInput input);
    }

    public class GetExamsInput
    {
        public string Filter { get; set; }
    }

    public class EditExamInput
    {
        public int Id { get; set; }
        public int Time_amount { get; set; }

        public string Join { get; set; }
    }


    public class GetExamForEditOutput
    {
        public GetExamForEditOutput(string time_amount, string join)
        {
            Time_amount = time_amount;
            Join = join;
        }

        [Required]
        public string Time_amount { get; set; }

        [Required]
        public string Join { get; set; }
    }


    public class CreateExamInput
    {
        [Required]
        public int Time_amount { get; set; }

        [Required]
        public int Join { get; set; }

        [Range(1, int.MaxValue)]
        public int TopicId { get; set; }
    }


    public class GetExamForEditInput
    {
        public int Id { get; set; }
    }


    public class ExamListDto : FullAuditedEntityDto
    {
        public int Time_amount { get; set; }

        public int Join { get; set; }

        public int TopicId { get; set; }
    }

}
