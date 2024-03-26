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
    [Table("PbContains")]
    public class Contain : CreationAuditedEntity<int>
    {
        [ForeignKey("QuesionId")]
        public virtual Question Question { get; set; }
        public virtual int QuestionId { get; set; }

        [ForeignKey("TopicId")]
        public virtual Topic Topic { get; set; }
        public virtual int TopicId { get; set; }

    }

}
