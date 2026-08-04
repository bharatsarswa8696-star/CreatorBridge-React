import "./SignupForm.css";

function SignupForm({

    onSubmit,

    fullName,
    email,
    password,
    confirmPassword,

    setFullName,
    setEmail,
    setPassword,
    setConfirmPassword,

    errors,

    backHome

}){

return(

<div className="auth-left">

<div className="signup-content">

<h1 className="signup-title">

First,<br/>

secure<br/>

<span>your spot.</span>

</h1>

<p className="auth-subtitle">

Your email & password. The keys to your creator account.

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
className={errors.fullName ? "error-input" : ""}
/>

{errors.fullName &&

<p className="error-text">

{errors.fullName}

</p>

}

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
className={errors.confirmPassword ? "error-input" : ""}
/>

{errors.confirmPassword &&

<p className="error-text">

{errors.confirmPassword}

</p>

}

<button
type="submit"
className="login-btn"
>

Continue

</button>

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

export default SignupForm;