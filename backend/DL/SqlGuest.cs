using Microsoft.EntityFrameworkCore;

namespace DL
{
    public class SqlGuest : IRepository<Guest>
    {
        private readonly AppDBContext _context;

        public SqlGuest(AppDBContext context)
        {
            _context = context;
        }

        public Guest Add(Guest p_resource)
        {
            _context.Guests.Add(p_resource);
            _context.SaveChanges();

            return p_resource;
        }

        public Guest Delete(Guest p_resource)
        {
            _context.Guests.Remove(p_resource);
            _context.SaveChanges();

            return p_resource;
        }

        public Guest? Get(int p_id)
        {
            return _context.Guests.Find(p_id);
        }

        public List<Guest> GetAll()
        {
            return _context.Guests.ToList();
        }

        public void Truncate()
        {
            _context.Database.ExecuteSqlRaw("TRUNCATE TABLE \"Guests\" RESTART IDENTITY");

            _context.SaveChanges();
        }

        public Guest Update(Guest p_resource)
        {
            _context.Guests.Update(p_resource);
            _context.SaveChanges();

            return p_resource;
        }
    }
}