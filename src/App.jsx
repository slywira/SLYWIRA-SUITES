import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookingForm from "./pages/BookingForm";
import Join from "./pages/Join";
import SignIn from "./pages/SignIn";
import Rooms from "./pages/Rooms";
import MeetingsAndEvents from "./pages/Meetings&Events";
import BarAndRestaurant from "./pages/culinary";
import "./App.css";


function App() {
  const [page, setPage] = useState("home");
  const isDashboard = page === "dashboard";

  return (
    <>
      {!isDashboard && <Navbar navigate={setPage} />}
      {page === "home" && <Home />}
      {page === "signin" && (
        <SignIn
          onBack={() => setPage("home")}
          onJoin={() => setPage("join")}
        />
      )}
      {page === "join" && (
        <Join
          onBack={() => setPage("home")}
          onSignIn={() => setPage("signin")}
        />
      )}
      {page === "rooms" && <Rooms />}
      {page === "meetings-events" && <MeetingsAndEvents />}
      {page === "bar-and-restaurant" && <BarAndRestaurant />}
    </>
  );
}

export default App;
