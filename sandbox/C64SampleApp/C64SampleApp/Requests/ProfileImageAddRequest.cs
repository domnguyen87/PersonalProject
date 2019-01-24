using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace C64SampleApp.Requests
{
    public class ProfileImageAddRequest
    {
        [Required]
        [Range(1, int.MaxValue)]
        public int ProfileId { get; set; }

        [Required]
        [Range(1, int.MaxValue)]
        public int FileStorageId { get; set; }
    }
}