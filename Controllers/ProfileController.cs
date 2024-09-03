using Microsoft.AspNetCore.Mvc;
using DietPlanner.Data;
using DietPlanner.Models;
using System.Linq;

namespace DietPlanner.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfileController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProfileController(AppDbContext context)
        {
            _context = context;

        }
        
        [HttpGet]
        public IActionResult Get()
        {
            var profile= _context.profile.ToList();
            return Ok(profile);
        }
    
    }
}

