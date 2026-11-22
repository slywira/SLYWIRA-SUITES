import DeluxeroomImg from "../assets/deluxeroom.jpg";
import StandardroomImg from "../assets/standardroom.jpg";
import TwinroomImg from "../assets/twinroom.jpg";
import "./Rooms.css";

function Rooms() {
  const rooms = [
    {
      name: "Deluxe Room",
      image: DeluxeroomImg,
      description:
        "Your personal haven in Nairobi, with plush bedding, modern amenities and sweeping city views.",
      details: "1 King Bed · Sleeps 2 · 36 m²",
    },
    {
      name: "Standard Room",
      image: StandardroomImg,
      description:
        "Thoughtfully designed for relaxed stays, combining warm interiors with everything you need for comfort.",
      details: "1 Queen Bed · Sleeps 2 · 28 m²",
    },
    {
      name: "Twin Room",
      image: TwinroomImg,
      description:
        "A spacious and practical choice for friends or colleagues, with two comfortable beds and modern finishes.",
      details: "2 Twin Beds · Sleeps 2 · 32 m²",
    },
  ];

  return (
    <main className="rooms-page">
      <header className="rooms-header">
        <p className="rooms-eyebrow">Stay at Slywira Suites</p>
        <h1>Our Rooms &amp; Suites</h1>
        <p className="rooms-intro">
          Experience comfort, elegance and exceptional hospitality in
          thoughtfully designed accommodation, whether you are travelling for
          business, romance or family.
        </p>
      </header>

      <section className="rooms-list" aria-label="Available rooms">
        {rooms.map((room, index) => (
          <article className="room-card" key={room.name}>
            <div className="room-image-wrap">
              <img
                className="room-image"
                src={room.image}
                alt={`${room.name} at Slywira Suites`}
              />
            </div>
            <div className="room-content">
              <p className="room-number">0{index + 1}</p>
              <h2>{room.name}</h2>
              <p className="room-details">{room.details}</p>
              <p className="room-description">{room.description}</p>
              <a className="room-link" href="#booking">
                Explore room <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Rooms;