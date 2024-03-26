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
    [Table("PbTopics")]
    public class Topic : FullAuditedEntity
    {
        public const int MaxQuestion_linkLength = 255;
        public const int MaxAnswer_linkLength = 255;

        [Required]
        [MaxLength(MaxQuestion_linkLength)]
        public virtual string Question_link { get; set; }

        [Required]
        [MaxLength(MaxAnswer_linkLength)]
        public virtual string Answer_link { get; set; }

        [Required]
        public virtual int Max_question { get; set; }

        [Required]
        public virtual TopicType Type { get; set; }

        public virtual ICollection<Exam> Exams { get; set; }

        public virtual ICollection<Contain> Contains { get; set; }

    }

    public enum TopicType : byte {
        Essay, MultiChoice, Mix, Group
    }

}
