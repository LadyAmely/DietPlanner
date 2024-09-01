using Microsoft.AspNetCore.Mvc;
using DietPlanner.Data;
using DietPlanner.Models;
using System.Linq;

namespace DietPlanner.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RecipeController:ControllerBase
    {
        private readonly AppDbContext _context;

        public RecipeController(AppDbContext context)
        {
            _context = context;

        }
        
        [HttpGet]
        public IActionResult Get()
        {
            var deadlines = _context.recipes.ToList();
            return Ok(deadlines);
        }

    
    }
}

