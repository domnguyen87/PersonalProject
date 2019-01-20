using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace C64SampleApp.Domain
{
    public class CareersDomain
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Department { get; set; }

        [Required]
        public string Time { get; set; }

        [Required]
        public string Description { get; set; }
    }
}