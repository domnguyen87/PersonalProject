using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace C64SampleApp.Responses
{
    public class SuccessResponse : BaseResponse
    {
        public SuccessResponse()
        {

            this.IsSuccessful = true;
        }
    }
}