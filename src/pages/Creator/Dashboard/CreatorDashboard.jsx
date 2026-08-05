import "./CreatorDashboard.css";

import ProfileCard from "../../../components/Creator/Dashboard/ProfileCard/ProfileCard";
import CategoryGrid from "../../../components/Creator/Dashboard/CategoryGrid/CategoryGrid";
import StatsGrid from "../../../components/Creator/Dashboard/StatsGrid/StatsGrid";
import AnalyticsChart from "../../../components/Creator/Dashboard/AnalyticsChart/AnalyticsChart";
import CampaignGrid from "../../../components/Creator/Dashboard/CampaignGrid/CampaignGrid";
function CreatorDashboard() {

    return (

        <>

            <ProfileCard />

            <CategoryGrid />
           <StatsGrid />
           <AnalyticsChart />
           <CampaignGrid/>
        </>

    );

}

export default CreatorDashboard;