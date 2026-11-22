import nyamachomaImage from "../assets/nyamachoma.jpg";
import BookingForm from "../components/BookingForm";
import "./culinary.css";

function BarAndRestaurant() {
  return (
    <main className="culinary-page">
      <header className="culinary-header">
        
      </header>

      <section className="culinary-feature">
        <figure className="nyamachoma-feature">
          <img
            src={nyamachomaImage}
            alt="Nyamachoma grilling over an open flame"
          />
        </figure>
        <BookingForm />
      </section>
    </main>
  );
}

export default BarAndRestaurant;