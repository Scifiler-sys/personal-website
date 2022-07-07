global using DL;

namespace BL
{
    public class RSVPBL : IRSVPBL
    {
        private readonly IRepository<RSVP> _repoRSVP;
        private readonly IRepository<Guest> _repoGuest;

        public RSVPBL(IRepository<RSVP> repo, IRepository<Guest> repoGuest)
        {
            _repoRSVP = repo;
            _repoGuest = repoGuest;
        }

        public RSVP Add(RSVP p_entry)
        {
            return _repoRSVP.Add(p_entry);
        }

        public List<RSVP> GetAll()
        {
            return _repoRSVP.GetAll();
        }

        public void RemoveAll()
        {
            _repoGuest.Truncate();
            _repoRSVP.Truncate();
        }
    }
}