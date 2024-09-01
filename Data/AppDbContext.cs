using Microsoft.EntityFrameworkCore;
using DietPlanner.Models;

namespace DietPlanner.Data
{
    public class AppDbContext : DbContext
    {
    
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }
        
        public DbSet<Recipe> recipes { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Recipe>()
                .HasKey(r => r.recipe_id); 

           
        }
    }
}

