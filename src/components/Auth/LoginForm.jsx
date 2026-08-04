import "./LoginForm.css";

function LoginForm({

email,
password,

setEmail,
setPassword,

errors,

onSubmit,

backHome,

onSignup

}){

return(

<div className="auth-left">

<div className="signup-content">

<h1 className="signup-title">

Welcome<br/>

<span>Back.</span>

</h1>

<p className="auth-subtitle">

Sign in to access your account.

</p>

<form
className="signup-form"
onSubmit={onSubmit}
>

<label>EMAIL</label>

<input
type="email"
placeholder="you@example.com"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className={errors.email ? "error-input" : ""}
/>

{errors.email &&

<p className="error-text">

{errors.email}

</p>

}

<label>PASSWORD</label>

<input
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className={errors.password ? "error-input" : ""}
/>

{errors.password &&

<p className="error-text">

{errors.password}

</p>

}

<button
type="submit"
className="login-btn"
>

Sign In

</button>

<p className="switch-auth">

New user?

<a
href="#"
onClick={(e)=>{

e.preventDefault();

onSignup();

}}
>

Create Account

</a>

</p>

</form>

<p className="back-link">

<a
href="#"
onClick={(e)=>{

e.preventDefault();

backHome();

}}
>

← Back to Home

</a>

</p>

</div>

</div>

);

}

export default LoginForm;