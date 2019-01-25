using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace C64SampleApp.Requests
{
    public class WebScrapeAddRequest
    {
        [Required]
        [MaxLength(95)]
        public string Title { get; set; }

        [Required]
        [MaxLength(300)]
        public string Description { get; set; }

        [Required]
        [MaxLength(2083)]
        [Url]
        public string Image { get; set; }

        [Required]
        [MaxLength(2083)]
        [Url]
        public string Url { get; set; }
        
    }
}