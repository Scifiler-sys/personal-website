global using Model;

namespace BL
{
    public interface IRSVPBL
    {
        RSVP Add(RSVP p_entry);

        List<RSVP> GetAll();

        /// <summary>
        /// Will remove all data from all tables for debugging purposes
        /// </summary>
        void RemoveAll();
    }
}