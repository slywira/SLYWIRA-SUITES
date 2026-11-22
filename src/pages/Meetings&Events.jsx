import ballroomImage from "../assets/ballroom.jpg";
import conferenceImage from "../assets/conference.jpg";
import eventsImage from "../assets/events.jpg";
import meetingImage from "../assets/meeting.jpg";
import "./Meetings&Events.css";

const occasionOptions = [
  {
    name: "Meetings",
    image: meetingImage,
    description:
      "Bring your team together in a welcoming, well-appointed space designed for focused discussions, presentations and productive working sessions.",
  },
  {
    name: "Events",
    image: eventsImage,
    description:
      "Celebrate life's special moments in an elegant setting, with attentive hospitality to help make every gathering feel memorable.",
  },
  {
    name: "Conferences",
    image: conferenceImage,
    description:
      "Host conferences and larger gatherings in a comfortable venue with flexible seating and the space to connect, share ideas and collaborate.",
  },
];

function MeetingsAndEvents() {
  return (
    <main className="meetings-page">
      <header className="meetings-header">
        <p className="meetings-eyebrow">Gather at Slywira Suites</p>
        <h1>Meetings &amp; Events</h1>
        <p className="meetings-intro">
          From important conversations to special celebrations, find a
          welcoming space for every occasion.
        </p>
      </header>

      <figure className="ballroom-feature">
        <img
          src={ballroomImage}
          alt="Grand ballroom at Slywira Suites, ready to welcome guests"
        />
      </figure>

      <section className="occasion-section" aria-label="Meeting and event spaces">
        <div className="occasion-heading">
          <p className="meetings-eyebrow">A space for every occasion</p>
          <h2>Bring your gathering to life</h2>
        </div>
        <div className="occasion-grid">
          {occasionOptions.map((occasion) => (
            <article className="occasion-card" key={occasion.name}>
              <img src={occasion.image} alt={`${occasion.name} space`} />
              <div className="occasion-card-content">
                <h3>{occasion.name}</h3>
                <p>{occasion.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default MeetingsAndEvents;