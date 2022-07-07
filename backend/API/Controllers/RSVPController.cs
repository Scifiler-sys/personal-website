using Microsoft.AspNetCore.Mvc;

namespace API.Controller
{
    [Route("[controller]")] //This is used to configure the endpoints of all the actions inside of this controller
    [ApiController]
    public class RSVPController : ControllerBase
    {
        private readonly IRSVPBL _rsvpBL;

        public RSVPController(IRSVPBL rsvpBL)
        {
            _rsvpBL = rsvpBL;
        }

        [HttpGet("GetAll")]
        public IActionResult GetAllRSVP()
        {
            return Ok(_rsvpBL.GetAll());
        }

        [HttpPost("Add")]
        public IActionResult AddRSVP([FromBody] RSVP p_rsvp)
        {
            return Created("Successfully Added",_rsvpBL.Add(p_rsvp));
        }

        //REMOVE IN FINAL PRODUCTION!
        [HttpDelete("RemoveAll")]
        public IActionResult RemoveAll()
        {
            _rsvpBL.RemoveAll();
            return Ok("Resources has been deleted");
        }
    }
}