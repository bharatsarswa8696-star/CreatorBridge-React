import "./SignupForm.css";

function SignupForm({
  fullName,
  email,
  password,
  confirmPassword,
  setFullName,
  setEmail,
  setPassword,
  setConfirmPassword,
  onSubmit,
  backHome,
}) {
  return (
    <div className="auth-left">

      <div className="signup-content">

        <h1 className="signup-title">
          First,<br />
          secure<br />
          <span>your spot.</span>
        </h1>

        <p className="auth-subtitle">
          Your email &amp; password. The keys to your creator account.
        </p>

        <form
          className="signup-form"
          onSubmit={onSubmit}
        >

          <label>FULL NAME</label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e)=>setFullName(e.target.value)}
          />

          <label>EMAIL</label>

          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <label>PASSWORD</label>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <div className="password-rules">

            <span>8+ Characters</span>

            <span>Uppercase</span>

            <span>Lowercase</span>

            <span>Number</span>

            <span>Special Character</span>

          </div>

          <label>CONFIRM PASSWORD</label>

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login-btn"
          >
            Continue
          </button>

        </form>

        <div className="back-link">

          <a
            href="#"
            onClick={(e)=>{
              e.preventDefault();
              backHome();
            }}
          >
            ← Back to Home
          </a>

        </div>

      </div>

    </div>
  );
}

export default SignupForm;