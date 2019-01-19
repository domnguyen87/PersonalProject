﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace C64SampleApp.Responses
{
    public class ItemResponse<T> : SuccessResponse
    {
        public T Item { get; set; }

        public ItemResponse(T item)
        {
            Item = item;
        }

        public ItemResponse()
        {

        }
    }
}