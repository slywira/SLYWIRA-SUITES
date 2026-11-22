import { useState } from "react";
import LogoImg from "../assets/logosignin.png";
import SigninImage from "../assets/signinimage.jpg";
import "./SignIn.css";

function SignIn({ onBack, onJoin }) {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Online sign-in is not available yet. Please contact Slywira Suites for assistance.");
  }

  return (
    <main className="sign-in-page">
      <header className="sign-in-header">
        <h1>Login / View Reservation</h1>
        <div className="sign-in-header-actions">
          <button type="button" onClick={onBack}>Return to Home</button>
        </div>
      </header>

      <div className="sign-in-content">
        <section className="sign-in-benefits" aria-label="Slywira Rewards">
          <img
            className="sign-in-image"
            src={SigninImage}
            alt="A view of Slywira Suites"
          />
          <div className="sign-in-benefits-copy">
            <p>
              Enjoy thoughtful benefits every time you stay. Make each visit
              more rewarding with Slywira Suites.
            </p>
            <h2>Not a Member?</h2>
            <strong>Discover Slywira</strong>
            <hr />
            <h2>Already a Member?</h2>
            <strong>Sign in to your account</strong>
          </div>
        </section>

        <section className="sign-in-panel" aria-labelledby="sign-in-title">
          <img src={LogoImg} alt="Slywira Suites" className="sign-in-logo" />
          <p className="sign-in-intro">Sign in to your Slywira Account</p>
          <p className="sign-in-label">Login:</p>

          <form className="sign-in-form" onSubmit={handleSubmit}>
            <div className="sign-in-fields">
              <div className="sign-in-field">
                <label htmlFor="sign-in-email">Email:<span aria-hidden="true">*</span></label>
                <input
                  id="sign-in-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="sign-in-field">
                <label htmlFor="sign-in-password">Password:<span aria-hidden="true">*</span></label>
                <input
                  id="sign-in-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>

            <div className="sign-in-actions">
              <button
                className="sign-in-forgot"
                type="button"
                onClick={() => setMessage("Password recovery is not available yet. Please contact Slywira Suites for assistance.")}
              >
                Forgot Your Password?
              </button>
              <button className="sign-in-submit" type="submit">LOGIN</button>
            </div>
            {message && <p className="sign-in-message" role="status">{message}</p>}
          </form>

          <div className="sign-in-create">
            <p>Not a member? Discover the benefits of Slywira Rewards.</p>
            <button type="button" onClick={onJoin}>
              CREATE YOUR ACCOUNT
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default SignIn;
