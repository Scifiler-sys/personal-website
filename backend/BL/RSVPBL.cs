global using DL;

namespace BL
{
    public class RSVPBL : IRSVPBL
    {
        private readonly IRepository<RSVP> _repo;

        public RSVPBL(IRepository<RSVP> repo)
        {
            _repo = repo;
        }

        public RSVP Add(RSVP p_entry)
        {
            return _repo.Add(p_entry);
        }

        public List<RSVP> GetAll()
        {
            return _repo.GetAll();
        }
    }
}