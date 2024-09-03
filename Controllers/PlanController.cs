using Microsoft.AspNetCore.Mvc;
using DietPlanner.Models;
using System.Linq;
using DietPlanner.Data;
using Microsoft.EntityFrameworkCore;

namespace DietPlanner.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlanController : ControllerBase
    {
        private readonly AppDbContext context_;

        public PlanController(AppDbContext context)
        {
            context_ = context;

        }
        
        [HttpPost]
        public async Task<IActionResult> PostPlan([FromBody] Plan plan)
        {
            if (plan == null)
            {
                return BadRequest("Plan cannot be null");
            }
            
            context_.plans.Add(plan);
            await context_.SaveChangesAsync();
            
            return CreatedAtAction(nameof(GetPlanById), new { id = plan.plan_id }, plan);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPlanById(int id)
        {
            var plan = await context_.plans.FindAsync(id);
            if (plan == null)
            {
                return NotFound();
            }

            return Ok(plan);
        }

        [HttpGet]
        public IActionResult Get()
        {
            var plans = context_.plans.ToList();
            return Ok(plans);
        }
    }
}

