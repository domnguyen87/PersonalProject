using System.Collections.Generic;
using C64SampleApp.Domain;

namespace C64SampleApp.Services.AspNetUsers
{
    public interface IAspNetUsersService
    {
        List<AspNetUsersDomain> Search(AspNetUsersSearchDomain aspNetUsersSearchDomain);
        List<AspNetUsersDomain> SelectAll();
        List<AspNetUsersDomain> SelectByPageNumber(int PageNumber, int PageSize);
    }
}