import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

import CreatorLayout from "./layouts/CreatorLayout";
import BrandLayout from "./layouts/BrandLayout";

import CreatorDashboard from "./pages/Creator/Dashboard/CreatorDashboard";
import BrandDashboard from "./pages/Brand/Dashboard/BrandDashboard";

import CreateCampaign from "./pages/Brand/CreateCampaign/CreateCampaign";
import Campaigns from "./pages/Creator/Campaigns/Campaigns";
import Applicants from "./pages/Brand/Applicants/Applicants";
import MyCampaigns from "./pages/Creator/MyCampaigns/MyCampaigns";
import SubmitWork from "./pages/Creator/SubmitWork/SubmitWork";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route element={<CreatorLayout />}>
        <Route path="/creator/dashboard" element={<CreatorDashboard />} />
        <Route path="/creator/campaigns" element={<Campaigns />} />
        <Route path="/creator/my-campaigns" element={<MyCampaigns />} />
        <Route path="/creator/submit-work/:id" element={<SubmitWork />} />
      </Route>

      <Route element={<BrandLayout />}>
        <Route path="/brand/dashboard" element={<BrandDashboard />} />
        <Route path="/brand/create-campaign" element={<CreateCampaign />} />
        <Route path="/brand/applicants" element={<Applicants />} />
      </Route>
    </Routes>
  );
}

export default App;
