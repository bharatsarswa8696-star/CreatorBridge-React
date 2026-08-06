import "./CreatorLayout.css";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Creator/Sidebar/Sidebar";


function CreatorLayout(){

    return (

        <div className="creator-layout">

            <Sidebar role="creator" />
            <main className="content">

                <Outlet />

            </main>

        </div>

    );

}


export default CreatorLayout;