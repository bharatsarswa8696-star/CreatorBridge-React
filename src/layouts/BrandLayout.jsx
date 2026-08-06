import "./BrandLayout.css";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Creator/Sidebar/Sidebar";


function BrandLayout(){

    return (

        <div className="brand-layout">

            <Sidebar role="brand" />

            <main className="content">

                <Outlet />

            </main>

        </div>

    );

}


export default BrandLayout;