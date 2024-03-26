using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCompanyName.AbpZeroTemplate.ERP
{
    [Table("PbQuestions")]
    public class Question : FullAuditedEntity
    {
        public const int MaxContentLength = 65535;
        public const int MaxAnswerLength = 65535;

        [Required]
        [MaxLength(MaxContentLength)]
        public virtual string Content { get; set; }

        [Required]
        [MaxLength(MaxAnswerLength)]
        public virtual string Answer { get; set; }


        public virtual ExamFile ExamFile { get; set; }

        public virtual ICollection<Contain> Contains { get; set; }

    }
}
