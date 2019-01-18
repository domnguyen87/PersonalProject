using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersonalProject.Models.Responses
{
    /// <summary>
    /// The Base class for all our Response models. 
    /// If it is going out the door from our Api it must inherit form here.
    /// </summary>
    public abstract class BaseResponse
    {
        public bool IsSuccessful { get; set; }

        public string TransactionId { get; set; }

        public BaseResponse()
        {
            //PersonalProject: This TxId we are just faking to demo the purpose
            this.TransactionId = Guid.NewGuid().ToString();
        }
    }
}
