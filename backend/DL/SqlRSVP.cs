using Microsoft.EntityFrameworkCore;

namespace DL
{
    public class SqlRSVP : IRepository<RSVP>
    {
        private readonly AppDBContext _context;

        public SqlRSVP(AppDBContext context)
        {
            _context = context;
        }

        public RSVP Add(RSVP p_resource)
        {
            _context.RSVPs.Add(p_resource);
            _context.SaveChanges();

            return p_resource;
        }

        public RSVP Delete(RSVP p_resource)
        {
            _context.RSVPs.Remove(p_resource);
            _context.SaveChanges();

            return p_resource;
        }

        public RSVP? Get(int p_id)
        {
            return _context.RSVPs.Find(p_id);
        }

        public List<RSVP> GetAll()
        {
            return _context.RSVPs
                    .Include("Guests")
                    .ToList();
        }

        public RSVP Update(RSVP p_resource)
        {
            _context.RSVPs.Update(p_resource);
            _context.SaveChanges();

            return p_resource;
        }
    }
}