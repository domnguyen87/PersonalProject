using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace C64SampleApp.Domain
{
    public class PersonDomain
    {
        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Gender { get; set; }

        public int Age { get; set; }

        public string HeadLine { get; set; }

        public string Location { get; set; }

        public string Twitter { get; set; }

        public string Facebook { get; set; }

        public string Instagram { get; set; }

        public int Height { get; set; }

        public int Weight { get; set; }

        public int BodyFat { get; set; }


    }
}