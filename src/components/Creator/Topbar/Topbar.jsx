import "./Topbar.css";

function Topbar({ title, subtitle }) {

    return (

        <div className="topbar">

            <h1>{title}</h1>

            <p>{subtitle}</p>

        </div>

    );

}

export default Topbar;