import "./LoginForm.css";

function LoginForm({
  onSubmit,
  email,
  password,
  setEmail,
  setPassword,
  goToSignup,
  backHome,
}) {
  return (
    <div className="auth-left">

      <h1>
        Welcome<br />
        <span>Back.</span>
      </h1>

      <p className="auth-subtitle">
        Sign in to access your account.
      </p>

      <form onSubmit={onSubmit}>

        <label>EMAIL</label>

        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>PASSWORD</label>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="login-btn"
        >
          Sign In
        </button>

        <p className="switch-auth">
          New user?{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              goToSignup();
            }}
          >
            Create Account
          </a>
        </p>

      </form>

      <p className="back-link">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            backHome();
          }}
        >
          ← Back to Home
        </a>
      </p>

    </div>
  );
}

export default LoginForm;