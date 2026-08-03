import "./LeftPanel.css";

import SignupForm from "../Auth/SignupForm";
import LoginForm from "../Auth/LoginForm";

function LeftPanel({
view,
role,
animate,
onCreator,
onBrand,
onLogin,
backHome
}) {

    if (view === "signup") {

        return (
            <SignupForm
                role={role}
                backHome={backHome}
            />
        );

    }

    if (view === "login") {

        return (
            <LoginForm
                backHome={backHome}
                onSignup={() => onCreator()}
            />
        );

    }

    return (

        <div className={`left-panel ${animate ? "fade-out" : "fade-in"}`}>

            <div className="star star1">✦</div>
            <div className="star star2">✦</div>
            <div className="star star3">✦</div>

            <h1>
                Connect.<br />
                Collaborate.<br />
                <span>Grow.</span>
            </h1>

            <p className="subtitle">
                The platform where creators and brands
                discover opportunities and collaborate.
            </p>

            <div className="cards">

                <div
                    className="card"
                    onClick={onCreator}
                >

                    <div className="card-content">

                        <h2>I'm a Creator</h2>

                        <p>
                            Create content. Build partnerships. Get paid.
                        </p>

                    </div>

                    <div className="arrow">
                        →
                    </div>

                </div>

                <div
                    className="card"
                    onClick={onBrand}
                >

                    <div className="card-content">

                        <h2>I'm a Brand</h2>

                        <p>
                            Find creators and grow your audience.
                        </p>

                    </div>

                    <div className="arrow">
                        →
                    </div>

                </div>

            </div>

            <div className="footer">

                <p>

                    Already a member?

                    <a
                        href="#"
                        onClick={(e) => {

                            e.preventDefault();

                            onLogin();

                        }}
                    >
                        Sign in here
                    </a>

                </p>

                <p>

                    Looking for enterprise solutions?

                    <a href="#">
                        Contact us
                    </a>

                </p>

            </div>

        </div>

    );

}

export default LeftPanel;