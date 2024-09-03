using Microsoft.AspNetCore.Mvc;
using DietPlanner.Models;
using System.Linq;
using DietPlanner.Data;
using Microsoft.EntityFrameworkCore;

namespace DietPlanner.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NutrientController : ControllerBase
    {
        private readonly AppDbContext context_;

        public NutrientController(AppDbContext context)
        {
            context_ = context;

        }
        
        [HttpGet]
        public IActionResult Get()
        {
            var nutrients = context_.nutrients.ToList();
            return Ok(nutrients);
        }
    }
    
}

