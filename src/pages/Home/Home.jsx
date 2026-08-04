import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import RightPanel from "../../components/RightPanel/RightPanel";

import { signupUser } from "../../services/authService";

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

  // Signup Errors
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // Login Errors
  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: ""
  });

  function changeView(nextView) {

    setAnimate(true);

    setTimeout(() => {

      setView(nextView);

      setAnimate(false);

    },300);

  }

  function openSignup(selectedRole){

    setRole(selectedRole);

    changeView("signup");

  }

  function openLogin(){

    changeView("login");

  }

  function backHome(){

    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    setErrors({
      fullName:"",
      email:"",
      password:"",
      confirmPassword:""
    });

    changeView("home");

  }

  // ---------------- Signup ----------------

  async function handleSignupSubmit(e){

    e.preventDefault();

    let newErrors={
      fullName:"",
      email:"",
      password:"",
      confirmPassword:""
    };

    if(fullName.trim()===""){
      newErrors.fullName="Full name is required";
    }

    if(email.trim()===""){
      newErrors.email="Email is required";
    }

    if(password.length<8){
      newErrors.password="Minimum 8 characters";
    }

    if(password!==confirmPassword){
      newErrors.confirmPassword="Passwords do not match";
    }

    setErrors(newErrors);

    if(
      newErrors.fullName||
      newErrors.email||
      newErrors.password||
      newErrors.confirmPassword
    ){
      return;
    }

    try{

      const result=await signupUser({

        fullName,
        email,
        password,
        role

      });

      alert(result.message);

      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      openLogin();

    }

    catch(error){

      alert(error.message);

    }

  }

  // ---------------- Login ----------------

  function handleLoginSubmit(e){

    e.preventDefault();

    let newErrors={
      email:"",
      password:""
    };

    if(loginEmail.trim()===""){
      newErrors.email="Email is required.";
    }

    if(loginPassword.trim()===""){
      newErrors.password="Password is required.";
    }

    setLoginErrors(newErrors);

    if(
      newErrors.email||
      newErrors.password
    ){
      return;
    }

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