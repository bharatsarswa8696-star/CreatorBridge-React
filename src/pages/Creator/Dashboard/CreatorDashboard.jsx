import "./CreatorDashboard.css";

import Sidebar from "../../../components/Creator/Sidebar/Sidebar";
import Topbar from "../../../components/Creator/Topbar/Topbar";
import ProfileCard from "../../../components/Creator/ProfileCard/ProfileCard";
import CategoryGrid from "../../../components/Creator/CategoryGrid/CategoryGrid";
import StatsGrid from "../../../components/Creator/StatsGrid/StatsGrid";
import AnalyticsChart from "../../../components/Creator/AnalyticsChart/AnalyticsChart";
import CampaignGrid from "../../../components/Creator/CampaignGrid/CampaignGrid";
function CreatorDashboard() {

    return (

        <>
       <Topbar
    title="Welcome, Creator 👋"
    subtitle="Manage your creator account."
/>
            <ProfileCard />

            <CategoryGrid />
           <StatsGrid />
           <AnalyticsChart />
           <CampaignGrid/>
        </>

    );

}

export default CreatorDashboard;