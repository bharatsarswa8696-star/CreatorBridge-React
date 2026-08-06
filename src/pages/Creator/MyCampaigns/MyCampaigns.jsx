import { useEffect, useState } from "react";
import "./MyCampaigns.css";
import { useNavigate } from "react-router-dom";
function MyCampaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCampaigns = JSON.parse(localStorage.getItem("campaigns")) || [];

    const acceptedCampaigns = storedCampaigns.filter((campaign) =>
      campaign.applicants.some(
        (applicant) =>
          applicant.creatorEmail === "creator@test.com" &&
          applicant.status === "Accepted",
      ),
    );

    setCampaigns(acceptedCampaigns);
  }, []);

  return (
    <div className="my-campaigns">
      <h1>My Accepted Campaigns</h1>

      {campaigns.length === 0 ? (
        <div className="empty-card">
          <h2>No Accepted Campaigns</h2>

          <p>Wait for brands to accept your applications.</p>
        </div>
      ) : (
        campaigns.map((campaign) => (
          <div className="campaign-card" key={campaign.id}>
            <h2>{campaign.title}</h2>

            <p>{campaign.description}</p>

            <p>
              <strong>Budget :</strong>₹{campaign.budget}
            </p>

            <button
              onClick={() => navigate(`/creator/submit-work/${campaign.id}`)}
            >
              Submit Work
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default MyCampaigns;
