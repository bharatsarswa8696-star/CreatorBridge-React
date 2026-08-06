import { NavLink } from "react-router-dom";

import {
    FaHome,
    FaBell,
    FaWallet,
    FaHeart,
    FaUser,
    FaCog,
    FaSignOutAlt,
    FaUsers,
    FaPlus
} from "react-icons/fa";

import { MdCampaign } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi2";

import "./Sidebar.css";


function Sidebar({ role = "creator" }) {


    const creatorMenu = [

        {
            name: "Dashboard",
            path: "/creator/dashboard",
            icon: <FaHome />
        },

        {
            name: "Notifications",
            path: "/creator/notifications",
            icon: <FaBell />
        },

        {
            name: "Campaigns",
            path: "/creator/campaigns",
            icon: <MdCampaign />
        },

        {
            name: "My Campaigns",
            path: "/creator/my-campaigns",
            icon: <HiDocumentText />
        },

        {
            name: "Wallet",
            path: "/creator/wallet",
            icon: <FaWallet />
        },

        {
            name: "Saved",
            path: "/creator/saved",
            icon: <FaHeart />
        },

        {
            name: "Profile",
            path: "/creator/profile",
            icon: <FaUser />
        },

        {
            name: "Settings",
            path: "/creator/settings",
            icon: <FaCog />
        }

    ];


    const brandMenu = [

        {
            name: "Dashboard",
            path: "/brand/dashboard",
            icon: <FaHome />
        },

        {
            name: "Notifications",
            path: "/brand/notifications",
            icon: <FaBell />
        },

        {
            name: "My Campaigns",
            path: "/brand/campaigns",
            icon: <MdCampaign />
        },

        {
            name: "Create Campaign",
            path: "/brand/create-campaign",
            icon: <FaPlus />
        },

        {
            name: "Applicants",
            path: "/brand/applicants",
            icon: <FaUsers />
        },

        {
            name: "Settings",
            path: "/brand/settings",
            icon: <FaCog />
        }

    ];


    const menu = role === "brand"
        ? brandMenu
        : creatorMenu;



    return (

        <aside className="sidebar">


            <div className="logo">

                CREATOR<span>BRIDGE</span>

                <div className="logo-dot"></div>

            </div>


            <ul className="menu">


                {
                    menu.map((item)=>(
                        
                        <li 
                        className="menu-item"
                        key={item.name}
                        >

                            <NavLink to={item.path}>

                                {item.icon}

                                {item.name}

                            </NavLink>


                        </li>

                    ))
                }


            </ul>


            <button id="logoutBtn">

                <FaSignOutAlt />

                Logout

            </button>


        </aside>

    );

}


export default Sidebar;