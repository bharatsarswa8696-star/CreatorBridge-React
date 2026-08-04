import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import RightPanel from "../../components/RightPanel/RightPanel";

import "./Home.css";

function Home() {

  // Navigation
  const [view, setView] = useState("home");
  const [animate, setAnimate] = useState(false);
  const [role, setRole] = useState("");

  // Signup
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Errors
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: ""
  });

  function changeView(nextView) {

    setAnimate(true);

    setTimeout(() => {

      setView(nextView);

      setAnimate(false);

    }, 300);

  }

  function openSignup(selectedRole){

    setRole(selectedRole);

    changeView("signup");

  }

  function openLogin(){

    changeView("login");

  }

  function backHome(){

    changeView("home");

  }

  // ---------------- Signup ----------------

  function handleSignupSubmit(e){

    e.preventDefault();

    console.log({

      role,

      fullName,

      email,

      password

    });

  }

  // ---------------- Login ----------------

  function handleLoginSubmit(e){

    e.preventDefault();

    console.log({

      loginEmail,

      loginPassword

    });

  }

  return(

<div className="home">

<Navbar onLogin={openLogin}/>

<div className="main-layout">

<LeftPanel

view={view}

role={role}

animate={animate}

onCreator={()=>openSignup("creator")}

onBrand={()=>openSignup("brand")}

onLogin={openLogin}

backHome={backHome}

onSignupSubmit={handleSignupSubmit}

onLoginSubmit={handleLoginSubmit}

fullName={fullName}
email={email}
password={password}
confirmPassword={confirmPassword}

setFullName={setFullName}
setEmail={setEmail}
setPassword={setPassword}
setConfirmPassword={setConfirmPassword}

loginEmail={loginEmail}
loginPassword={loginPassword}

setLoginEmail={setLoginEmail}
setLoginPassword={setLoginPassword}

errors={errors}

loginErrors={loginErrors}

/>

<RightPanel

onCampaignClick={openLogin}

/>

</div>

</div>

);

}

export default Home;