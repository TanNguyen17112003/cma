using Abp.Application.Services.Dto;
using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace MyCompanyName.AbpZeroTemplate.ERP
{
    public interface IQuestionAppService : IApplicationService
    {
        ListResultDto<QuestionListDto> GetQuestions(GetQuestionsInput input);
        Task CreateQuestion(CreateQuestionInput input);
        Task DeleteQuestion(EntityDto input);
        Task<GetQuestionForEditOutput> GetQuestionForEdit(GetQuestionForEditInput input);
        Task EditQuestion(EditQuestionInput input);
    }

    public class GetQuestionsInput
    {
        public string Filter { get; set; }
    }

    public class EditQuestionInput
    {
        public int Id { get; set; }
        public string Content { get; set; }

        public string Answer { get; set; }
    }


    public class GetQuestionForEditOutput
    {
        public GetQuestionForEditOutput(string content, string answer)
        {
            Content = content;
            Answer = answer;
        }

        [Required]
        [MaxLength(QuestionConsts.MaxContentLength)]
        public string Content { get; set; }

        [Required]
        [MaxLength(QuestionConsts.MaxAnswerLength)]
        public string Answer { get; set; }
    }


    public class CreateQuestionInput
    {
        [Required]
        [MaxLength(QuestionConsts.MaxContentLength)]
        public string Content { get; set; }

        [Required]
        [MaxLength(QuestionConsts.MaxAnswerLength)]
        public string Answer { get; set; }
    }


    public class GetQuestionForEditInput
    {
        public int Id { get; set; }
    }


    public class QuestionListDto : FullAuditedEntityDto
    {
        public string Content { get; set; }

        public string Answer { get; set; }

        public ExamFileInQuestionListDto ExamFile { get; set; }
    }

    public class ExamFileInQuestionListDto : CreationAuditedEntityDto<int>
    {
        public string Description { get; set; }

        public string FilePath { get; set; }
    }

}
