
import "./Home.css";
import roomVideo from "../assets/room.mp4";
import BookingForm from "../components/BookingForm";

function Home() {
  return (
    <main>
      <section className="intro" aria-label="Slywira Suites room video">
        <video
          className="room-video"
          src={roomVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Video of a Slywira Suites room"
        />
        <BookingForm />
      </section>

      <section className="welcome-section">
        <header className="welcome-heading">
          <p className="section-eyebrow">Slywira Suites</p>
          <h1>Experience Comfort, Elegance <br />and Exceptional Hospitality</h1>
        </header>

        <div className="welcome-copy">
          <p className="welcome-lead">
            Welcome to Slywira Suites, where comfort meets elegance and every
            stay is designed to create a memorable experience.
          </p>
          <p>
            We offer a welcoming and relaxing environment for guests seeking
            quality accommodation, personalised service and a peaceful place
            to unwind. Whether you are travelling for business, enjoying a
            holiday or celebrating a special occasion, Slywira Suites provides
            a comfortable setting to make your stay worthwhile.
          </p>
          <p>
            At Slywira Suites, we believe that hospitality goes beyond
            providing a place to sleep. It is about creating an experience
            where every guest feels valued, relaxed and at home. Our commitment
            to quality service, attention to detail and guest satisfaction is
            reflected in every aspect of our hospitality.
          </p>
        </div>

        <div className="experience-grid">
          <article className="experience-card">
            <span>01</span>
            <h2>Discover Comfort in Every Room</h2>
            <p>
              Our accommodation is thoughtfully designed for different guest
              preferences, from comfortable single and double rooms to spacious
              deluxe rooms, executive accommodation and elegant suites.
            </p>
            <p>
              Each room offers a welcoming atmosphere, comfortable furnishings
              and carefully selected amenities for an enjoyable stay.
            </p>
          </article>
          <article className="experience-card">
            <span>02</span>
            <h2>A Perfect Destination for Business and Leisure</h2>
            <p>
              Whether you are visiting for a business meeting, weekend getaway
              or extended holiday, enjoy a peaceful atmosphere and hospitality
              designed around your needs.
            </p>
          </article>
          <article className="experience-card">
            <span>03</span>
            <h2>Our Commitment to Excellence</h2>
            <p>
              Our guests are at the heart of everything we do. We are committed
              to quality accommodation, friendly service and memorable
              experiences, so every visit leaves you with a reason to return.
            </p>
          </article>
        </div>

        <footer className="stay-cta">
          <p>Make Your Stay Memorable</p>
          <h2>
            Discover a place where comfort, hospitality and relaxation come
            together.
          </h2>
          <p className="stay-cta-message">
            Book your stay with Slywira Suites today and let us make your
            experience special.
          </p>
        </footer>
      </section>
    </main>
  );
}

export default Home;
