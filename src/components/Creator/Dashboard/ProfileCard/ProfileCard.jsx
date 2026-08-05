import "./ProfileCard.css";

function ProfileCard() {

    return (

        <section>

            <div className="user-info">

                <h1 id="welcomeUser">

                    Welcome 👋

                </h1>

                <div className="profile-card">

                    <h2 id="userName">

                        Bharat Sarswa

                    </h2>

                    <p id="userEmail">

                        bharat@gmail.com

                    </p>

                    <p id="userRole">

                        Creator

                    </p>

                </div>

            </div>

        </section>

    );

}

export default ProfileCard;