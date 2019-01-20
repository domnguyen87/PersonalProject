using System.Collections.Generic;
using C64SampleApp.Domain;

namespace C64SampleApp.Services.Person
{
    public interface IPersonService
    {
        int Create(PersonDomain personDomain);
        void Delete(int id);
        List<PersonDomain> SelectAll();
        PersonDomain SelectById(int id);
        void Update(PersonDomain model);
    }
}