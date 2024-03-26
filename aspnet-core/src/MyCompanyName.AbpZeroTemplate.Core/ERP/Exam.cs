using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Stripe;

namespace MyCompanyName.AbpZeroTemplate.ERP
{
    [Table("PbExams")]
    public class Exam : CreationAuditedEntity<int>
    {
        [Required]
        public virtual int Time_amount { get; set; }

        [Required]
        public virtual string Join { get; set; }

        [ForeignKey("TopicId")]
        public virtual Topic Topic { get; set; }
        public virtual int TopicId { get; set; }

    }

}
