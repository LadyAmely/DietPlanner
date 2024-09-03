namespace DietPlanner.Models
{
    public class Profile
    {
        public int profile_id { get; set; }
        public string username { get; set; }
        public int weight { get; set; }
        public int height { get; set; }
        public int age { get; set; }
        public string sex { get; set; }
        public int daily_calorie_goal { get; set; }
        public int actual_bmi { get; set; }
        public int bmi_goal { get; set; }
        public string diseases { get; set; }
        public string allergies { get; set; }
        public string dietary_restrictions { get; set; }
        
        
        
    }
    
}

