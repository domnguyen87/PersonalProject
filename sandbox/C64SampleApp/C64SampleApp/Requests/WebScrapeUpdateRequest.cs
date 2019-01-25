using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace C64SampleApp.Requests
{
    public class WebScrapeUpdateRequest : WebScrapeAddRequest
    {
        [Range(1, int.MaxValue)]
        public int Id { get; set; }
    }
}