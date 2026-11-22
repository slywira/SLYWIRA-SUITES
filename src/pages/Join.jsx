import { useState } from "react";
import "./Join.css";

function Join({ onBack, onSignIn }) {
  const [message, setMessage] = useState("");
  const [accountStep, setAccountStep] = useState("terms");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  function handleRegistration(event) {
    event.preventDefault();
    setMessage("Online account creation is not available yet. Please contact Slywira Suites for assistance.");
  }

  function returnToSignIn() {
    setMessage("");
    setAcceptedTerms(false);
    onSignIn();
  }

  return (
    <main className="join-page">
      <header className="join-header">
        <h1>Register Your Free Account</h1>
        <div className="join-header-actions">
          <button type="button" onClick={onSignIn}>Login</button>
          <button type="button" onClick={onBack}>Return to Home</button>
        </div>
      </header>

      <div className="join-content">
        {accountStep === "terms" ? (
          <section className="join-terms-panel" aria-labelledby="join-terms-title">
            <h2 id="join-terms-title">Terms and Conditions</h2>
            <div className="join-terms-copy">
              <p>
                By creating a Slywira Suites account, you agree to provide
                accurate information and comply with our membership terms.
              </p>
              <p>
                You will receive account updates and stay-related
                communications. You can manage these preferences in your
                account or contact Slywira Suites.
              </p>
            </div>
            <label className="join-terms-checkbox">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(event) => setAcceptedTerms(event.target.checked)}
              />
              <span>I have read and accept the Terms and Conditions.</span>
            </label>
            <div className="join-terms-actions">
              <button type="button" className="join-back-button" onClick={returnToSignIn}>
                Cancel
              </button>
              <button
                type="button"
                className="join-submit-button"
                disabled={!acceptedTerms}
                onClick={() => setAccountStep("form")}
              >
                CONTINUE
              </button>
            </div>
          </section>
        ) : (
          <form className="join-form" onSubmit={handleRegistration}>
            <section className="join-section">
              <h2>Personal Information</h2>
              <div className="join-grid join-grid-five">
                <div className="join-field">
                  <label htmlFor="title">Title:*</label>
                  <select id="title" name="title" required>
                    <option value="">Select</option>
                    <option>Mr.</option>
                    <option>Ms.</option>
                    <option>Mrs.</option>
                  </select>
                </div>
                <div className="join-field">
                  <label htmlFor="first-name">First Name:*</label>
                  <input id="first-name" name="firstName" placeholder="Enter first name" required />
                </div>
                <div className="join-field">
                  <label htmlFor="last-name">Last Name:*</label>
                  <input id="last-name" name="lastName" placeholder="Enter last name" required />
                </div>
                <div className="join-field">
                  <label htmlFor="birth-date">Date Of Birth:</label>
                  <input id="birth-date" name="birthDate" type="date" />
                </div>
                <div className="join-field">
                  <label htmlFor="gender">Gender:</label>
                  <select id="gender" name="gender">
                    <option value="">Select</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>
              </div>
            </section>

            <section className="join-section">
              <h2>Contact Information</h2>
              <div className="join-grid">
                <div className="join-field">
                  <label htmlFor="address-one">Address 1:*</label>
                  <input id="address-one" name="addressOne" placeholder="Enter Address" required />
                </div>
                <div className="join-field">
                  <label htmlFor="address-two">Address 2:</label>
                  <input id="address-two" name="addressTwo" placeholder="Enter Address" />
                </div>
                <div className="join-field">
                  <label htmlFor="country">Country:*</label>
                  <select id="country" name="country" required>
                    <option>Kenya</option>
                    <option>Uganda</option>
                    <option>Tanzania</option>
                    <option>Rwanda</option>
                  </select>
                </div>
                <div className="join-field">
                  <label htmlFor="state">State:</label>
                  <input id="state" name="state" placeholder="Enter state / province" />
                </div>
                <div className="join-field">
                  <label htmlFor="city">City:*</label>
                  <input id="city" name="city" placeholder="Enter city" required />
                </div>
                <div className="join-field">
                  <label htmlFor="postal-code">Zip / Postal Code:*</label>
                  <input id="postal-code" name="postalCode" placeholder="Enter Zip/Postal code" required />
                </div>
                <div className="join-field">
                  <label htmlFor="phone">Phone Number:*</label>
                  <input id="phone" name="phone" type="tel" placeholder="Enter phone number" required />
                </div>
                <div className="join-field">
                  <label htmlFor="registration-email">Email:*</label>
                  <input id="registration-email" name="email" type="email" placeholder="Enter email" required />
                </div>
                <div className="join-field">
                  <label htmlFor="confirm-email">Confirm Email Address:*</label>
                  <input id="confirm-email" name="confirmEmail" type="email" placeholder="Confirm Email" required />
                </div>
              </div>
            </section>

            <section className="join-section">
              <h2>Account Information</h2>
              <div className="join-grid join-grid-two">
                <div className="join-field">
                  <label htmlFor="registration-password">Password:*</label>
                  <input id="registration-password" name="password" type="password" placeholder="Enter password" required />
                </div>
                <div className="join-field">
                  <label htmlFor="confirm-password">Confirm Password:*</label>
                  <input id="confirm-password" name="confirmPassword" type="password" placeholder="Enter password" required />
                </div>
              </div>
            </section>

            {message && <p className="join-message" role="status">{message}</p>}
            <div className="join-form-actions">
              <button type="button" className="join-back-button" onClick={returnToSignIn}>
                Back to Login
              </button>
              <button type="submit" className="join-submit-button">CREATE ACCOUNT</button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}

export default Join;
