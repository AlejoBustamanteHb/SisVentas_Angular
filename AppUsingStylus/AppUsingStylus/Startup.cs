using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AppUsingStylus.Startup))]
namespace AppUsingStylus
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
