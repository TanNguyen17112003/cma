using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCompanyName.AbpZeroTemplate.FileUpload
{
    [Table("PbExamFiles")]
    public class ExamFile : FullAuditedEntity
    {
        public const int MaxDescritiptionLength = 255;
        public const int MaxFilePathLength = 255;

        [Required]
        [MaxLength(MaxDescritiptionLength)]
        public virtual string Description { get; set; }

        [Required]
        [MaxLength(MaxFilePathLength)]
        public virtual string FilePath { get; set; }
    }
}
