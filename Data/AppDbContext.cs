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
        
        public DbSet<Plan> plans { get; set; }
        
        public DbSet<Profile> profile { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Recipe>()
                .HasKey(r => r.recipe_id);

            modelBuilder.Entity<Plan>()
                .HasKey(p => p.plan_id);

            modelBuilder.Entity<Profile>()
                .HasKey(p => p.profile_id);
        }
        
       
    }
}

