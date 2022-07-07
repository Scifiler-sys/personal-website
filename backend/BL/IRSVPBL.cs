global using Model;

namespace BL
{
    public interface IRSVPBL
    {
        RSVP Add(RSVP p_entry);

        List<RSVP> GetAll();
    }
}