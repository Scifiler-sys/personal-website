
global using Model;
using Microsoft.EntityFrameworkCore;

namespace DL
{
    public class AppDBContext : DbContext
    {
        public DbSet<Guest> Guests { get; set; }
        public DbSet<RSVP> RSVPs { get; set; }

        public AppDBContext() : base() { }
        public AppDBContext(DbContextOptions p_dbconnection) : base(p_dbconnection)
        {
            
        }
    }
}
