using C64SampleApp.Interfaces;
using C64SampleApp.Providers;
using C64SampleApp.Services.Person;
using System.Configuration;
using System.Security.Principal;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using Unity;
using Unity.Injection;
using Unity.Lifetime;
using Unity.WebApi;

namespace C64SampleApp
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            
            container.RegisterType<IDataProvider, SqlDataProvider>(
                new InjectionConstructor(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString));
            //container.RegisterType<IPrincipal>(new TransientLifetimeManager(),
            //new InjectionFactory(con => HttpContext.Current.User));
            //container.RegisterType<IUserStore<ApplicationUser>, UserStore<ApplicationUser>>();
            //container.RegisterType<AccountController>(new InjectionConstructor());
            container.RegisterType<IPersonService, PersonService>();

            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
            //System.Web.Http.GlobalConfiguration.Configuration.DependencyResolver = new Unity.WebApi.UnityDependencyResolver(container);
            DependencyResolver.SetResolver(new Unity.Mvc5.UnityDependencyResolver(container));

           

        }
    }
}