using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularTurtolial.Models;
namespace AngularTurtolial.Controllers
{
    public class ResoponseController : ApiController
    {
        public static List<Product> list =new List<Product>() { new Product() {name="krzeso",description="najzajebistrze krzesło",category="meble",price=123 }, new Product() { name = "hamburger", description = "najsmaczniejszy hamburger", category = "jedzenie", price = 10 } };
        public List<Product> Products()
        {
            return list;
        }
    }
}
