namespace Model
{
    public class RSVP
    {
        public int ID { get; set; }
        public bool Attending { get; set; }
        public string Relation { get; set; }
        public string YourWish { get; set; }
        public string Address { get; set; }
        public List<Guest> Guests { get; set; }
    }
}
