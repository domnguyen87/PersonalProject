using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace C64SampleApp.Requests
{
    public class FileStorageAddRequest
    {
        [Required]
        [MaxLength(255)]
        public string UserFileName { get; set; }

        [Required]
        [MaxLength(255)]
        public string BasePath { get; set; }

        [Required]
        [MaxLength(255)]
        public string SystemFileName { get; set; }

        [Required]
        [Range(1, 2)]
        public int FileTypeId { get; set; }

    }
}