import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import RightPanel from "../../components/RightPanel/RightPanel";

import "./Home.css";

const [errors, setErrors] = useState({
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
});
function Home(){

    const [view,setView] = useState("home");
    const [animate, setAnimate] = useState(false);
    const [role,setRole] = useState(null);

function changeView(nextView) {

    setAnimate(true);

    setTimeout(() => {

        setView(nextView);

        setAnimate(false);

    }, 300);

}
    function openSignup(selectedRole){

        setRole(selectedRole);

        changeView("signup")

    }


    function openLogin(){

        changeView("login")

    }


    function backHome(){

        changeView("home")

    }


    return(

        <div className="home">


            <Navbar 
            onLogin={openLogin}
            />


            <div className="main-layout">


                <LeftPanel

                view={view}

                role={role}
                animate={animate}

                onCreator={()=>openSignup("creator")}

                onBrand={()=>openSignup("brand")}

                onLogin={openLogin}

                backHome={backHome}

                />


                <RightPanel

                onCampaignClick={openLogin}

                />


            </div>


        </div>

    );

}


export default Home;