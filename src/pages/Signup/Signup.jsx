import { useSearchParams } from "react-router-dom";
import "./Signup.css";


function Signup(){

    const [searchParams] = useSearchParams();

    const role =
        searchParams.get("role") || "creator";


    return(

        <div className="signup-page">


            <div className="signup-card">


                <h1>
                    Join as {role}
                </h1>


                <p>
                    Create your CreatorBridge account
                </p>


                <input
                placeholder="Full Name"
                />


                <input
                placeholder="Email"
                />


                <input
                placeholder="Password"
                type="password"
                />


                <button>
                    Create Account
                </button>


            </div>


        </div>

    );

}


export default Signup;