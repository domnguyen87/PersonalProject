﻿using C64AdoNetSample.Domain;

namespace C64AdoNetSample.Person
{
    public interface IPersonService
    {
        bool Create(PersonDomain personDomain);
    }
}