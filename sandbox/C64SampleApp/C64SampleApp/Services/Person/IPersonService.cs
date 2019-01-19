using C64SampleApp.Domain;
using System.Collections.Generic;

namespace C64SampleApp.Services.Person
{
    public interface IPersonService
    {
        int Create(PersonDomain personDomain);
        List<PersonDomain> SelectAll();
    }
}