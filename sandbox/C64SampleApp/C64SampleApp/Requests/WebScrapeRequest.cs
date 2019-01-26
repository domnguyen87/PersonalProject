using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace C64SampleApp.Requests
{
    public class WebScrapeRequest
    {
        [MaxLength(95)]
        public string Title { get; set; }

        [MaxLength(300)]
        public string Description { get; set; }

        [MaxLength(2083)]
        public string Image { get; set; }

        [MaxLength(2083)]
        public string Url { get; set; }


    }
}