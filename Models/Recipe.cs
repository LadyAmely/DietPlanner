namespace DietPlanner.Models
{
    
    public class Recipe
    {
        public int recipe_id { get; set; }
        public string title { get; set; } = string.Empty; 
        public string image { get; set; } = string.Empty; 
        public string category { get; set; } = string.Empty;
        public int calories { get; set; }
        public string diet_type { get; set; } = string.Empty;
        public int prep_time { get; set; }
        
    }
    
}

