import "./CreatorLayout.css";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Creator/Sidebar/Sidebar";
import Topbar from "../components/Creator/Topbar/Topbar";

function CreatorLayout() {

    return (

        <div className="creator-layout">

            <Sidebar />

            <main className="content">

                <Topbar />

                <Outlet />

            </main>

        </div>

    );

}

export default CreatorLayout;