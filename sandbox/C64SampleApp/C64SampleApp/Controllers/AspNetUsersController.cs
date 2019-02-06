using C64SampleApp.Domain;
using C64SampleApp.Responses;
using C64SampleApp.Services.AspNetUsers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace C64SampleApp.Controllers
{

    [AllowAnonymous]
    [RoutePrefix("api/AspNetUsers")]
    public class AspNetUsersController : ApiController
    {
        IAspNetUsersService _aspNetUsersService;

        [HttpPost]
        [Route("search")]
        public HttpResponseMessage search(AspNetUsersSearchDomain model)
        {
            try
            {
                var resp = new ItemsResponse<AspNetUsersDomain>();
                resp.Items = _aspNetUsersService.Search(model);
                return Request.CreateResponse(HttpStatusCode.OK, resp);

            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpGet]
        [Route]
        public HttpResponseMessage SelectAll()
        {
            try
            {
                ItemResponse<List<AspNetUsersDomain>> resp = new ItemResponse<List<AspNetUsersDomain>>();
                resp.Item = _aspNetUsersService.SelectAll();
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpGet]
        [Route("{PageNumber:int}/{PageSize:int}")]
        public HttpResponseMessage SelectByPageNumber(int PageNumber, int PageSize)
        {
            try
            {
                var resp = new ItemsResponse<AspNetUsersDomain>();
                resp.Items = _aspNetUsersService.SelectByPageNumber(PageNumber, PageSize);
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        public AspNetUsersController (IAspNetUsersService aspNetUsersService)
        {
            _aspNetUsersService = aspNetUsersService;
        }
    }
}
