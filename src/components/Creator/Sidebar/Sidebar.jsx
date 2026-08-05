import { NavLink } from "react-router-dom";

import {
    FaHome,
    FaBell,
    FaWallet,
    FaHeart,
    FaUser,
    FaCog,
    FaSignOutAlt,
} from "react-icons/fa";

import { MdCampaign } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi2";

import "./Sidebar.css";

function Sidebar() {

    return (

        <aside className="sidebar">

            <div className="logo">

                CREATOR<span>BRIDGE</span>

                <div className="logo-dot"></div>

            </div>

            <ul className="menu">

                <li className="menu-item">

                    <NavLink to="/creator/dashboard">

                        <FaHome />

                        Dashboard

                    </NavLink>

                </li>

                <li className="menu-item">

                    <NavLink to="/creator/notifications">

                        <FaBell />

                        Notifications

                    </NavLink>

                </li>

                <li className="menu-item">

                    <NavLink to="/creator/campaigns">

                        <MdCampaign />

                        Campaigns

                    </NavLink>

                </li>

                <li className="menu-item">

                    <NavLink to="/creator/applications">

                        <HiDocumentText />

                        My Applications

                    </NavLink>

                </li>

                <li className="menu-item">

                    <NavLink to="/creator/wallet">

                        <FaWallet />

                        Wallet

                    </NavLink>

                </li>

                <li className="menu-item">

                    <NavLink to="/creator/saved">

                        <FaHeart />

                        Saved

                    </NavLink>

                </li>

                <li className="menu-item">

                    <NavLink to="/creator/profile">

                        <FaUser />

                        Profile

                    </NavLink>

                </li>

                <li className="menu-item">

                    <NavLink to="/creator/settings">

                        <FaCog />

                        Settings

                    </NavLink>

                </li>

            </ul>

            <button id="logoutBtn">

                <FaSignOutAlt />

                Logout

            </button>

        </aside>

    );

}

export default Sidebar;