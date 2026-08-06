import "./BrandDashboard.css";

import Topbar from "../../../components/Creator/Topbar/Topbar";
import StatsGrid from "../../../components/Brand/StatsGrid/StatsGrid";
import RecentCampaigns from "../../../components/Brand/RecentCampaigns/RecentCampaigns";

function BrandDashboard() {

    return (

        <>

            <Topbar
    title="Welcome, Brand 👋"
    subtitle="Manage your campaigns and connect with creators."
/>

            <StatsGrid />

            <RecentCampaigns />

        </>

    );

}

export default BrandDashboard;