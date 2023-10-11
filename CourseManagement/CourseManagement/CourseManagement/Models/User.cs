namespace CourseManagement.Models
{
	public class User
	{
		public int UserId { get; set; }
		public string UserName { get; set; }
		public string Password { get; set; }
		public string Email { get; set; }
		public virtual ICollection<UserRole> UserRoles { get; set; } = new List<UserRole>();
	}
}
