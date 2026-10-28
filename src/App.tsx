import { FormEvent, useState } from "react";

const assets = "/assets";

function Field({
  label,
  icon,
  type = "text",
  placeholder,
  endAdornment,
}: {
  label: string;
  icon: string;
  type?: string;
  placeholder: string;
  endAdornment?: React.ReactNode;
}) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <span className="input-shell">
        <img src={`${assets}/${icon}`} alt="" />
        <input type={type} placeholder={placeholder} aria-label={label} />
        {endAdornment}
      </span>
    </label>
  );
}

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Demo login submitted successfully.");
  }

  return (
    <main className="page-shell">
      <section className="promo-panel" aria-labelledby="promo-title">
        <div className="grid-wrap" aria-hidden="true">
          <img className="grid-art" src={`${assets}/fe7b2.png`} alt="" />
        </div>
        <div className="chart-wrap" aria-hidden="true">
          <img className="chart-art" src={`${assets}/76b5f.png`} alt="" />
        </div>
        <img className="ellipse ellipse-one" src={`${assets}/499c0.svg`} alt="" />
        <img className="ellipse ellipse-two" src={`${assets}/55049.svg`} alt="" />

        <div className="promo-copy">
          <h1 id="promo-title">
            <span className="rupee">₹</span>
            <span className="one">1</span> Brokerage!
          </h1>
          <h2>Trade Smart , Pay Less</h2>
          <p>
            With our ₹1 brokerage, you can trade freely and build wealth without
            the burden of large commissions.
          </p>
        </div>

        <div className="mascot-wrap">
          <div className="mascot-art">
            <img
              className="mascot"
              src={`${assets}/1cad1.png`}
              alt="1FC Trade mascot holding a one rupee coin"
            />

            <span className="corner corner-left" />
            <span className="corner corner-top" />
          </div>
        </div>

        <div className="downloads" aria-label="Download the 1FC Trade app">
          <a href="#" aria-label="Download 1FC Trade on the App Store">
            <img className="qr" src={`${assets}/102a2.png`} alt="App Store QR code" />
            <img className="store-badge" src={`${assets}/0281d.png`} alt="Download on the App Store" />
          </a>
          <a href="#" aria-label="Get 1FC Trade on Google Play">
            <img className="qr" src={`${assets}/7044b.png`} alt="Google Play QR code" />
            <img className="store-badge" src={`${assets}/bc5b5.png`} alt="Get it on Google Play" />
          </a>
        </div>

        <p className="registration">
          SEBI Regn No: INZ000333130 | NSE Member code: 90120 | BSE Member code: 6694
        </p>
      </section>

      <section className="login-panel" aria-labelledby="login-title">
        <img className="brand" src={`${assets}/7ba0a.png`} alt="1FC Trade" />
        <h2 className="company">1FC Securities Pvt. Ltd.</h2>
        <div className="welcome">
          <h3 id="login-title">Welcome Back!</h3>
          <p>Login to your trading account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <Field label="User ID" icon="24853.svg" placeholder="Enter your User ID" />
          <Field
            label="Password"
            icon="2d560.svg"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your Password"
            endAdornment={
              <button
                className="eye-button"
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((value) => !value)}
              >
                <img src={`${assets}/f2bf5.svg`} alt="" />
              </button>
            }
          />
          <div className="otp-row">
            <Field label="OTP / TOTP" icon="a557d.svg" placeholder="Enter OTP / TOTP" />
            <button type="button" className="otp-button" onClick={() => setMessage("Demo OTP requested.")}>
              Get OTP
            </button>
          </div>
          <button className="forgot" type="button" onClick={() => setMessage("Password recovery demo opened.")}>
            Forgot Password?
          </button>
          <button className="login-button" type="submit">
            Login →
          </button>
          {message && <p className="status" role="status">{message}</p>}
          <div className="or">
            <img src={`${assets}/caaf7.svg`} alt="" />
            <span>OR</span>
            <img src={`${assets}/fac6d.svg`} alt="" />
          </div>
          <button className="account-button" type="button" onClick={() => setMessage("New account demo opened.")}>
            Open New Account
          </button>
        </form>

        <footer>© 2026 1FC Securities Pvt Ltd</footer>
      </section>
    </main>
  );
}
