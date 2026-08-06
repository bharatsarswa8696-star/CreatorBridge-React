import { useEffect, useState } from "react";
import "./Applicants.css";

function Applicants() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    loadApplicants();
  }, []);

  function loadApplicants() {
    const storedCampaigns = JSON.parse(localStorage.getItem("campaigns")) || [];

    setCampaigns(storedCampaigns);
  }

  function updateStatus(campaignId, applicantId, status) {
    const updatedCampaigns = campaigns.map((campaign) => {
      if (campaign.id !== campaignId) return campaign;

      return {
        ...campaign,

        applicants: campaign.applicants.map((applicant) =>
          applicant.id === applicantId ? { ...applicant, status } : applicant,
        ),
      };
    });

    localStorage.setItem("campaigns", JSON.stringify(updatedCampaigns));

    setCampaigns(updatedCampaigns);
  }

  return (
    <div className="applicants-page">
      <h1>Applicants</h1>

      {campaigns
        .filter((campaign) => campaign.applicants.length > 0)
        .map((campaign) => (
          <div className="campaign-section" key={campaign.id}>
            <h2>{campaign.title}</h2>

            {campaign.applicants.map((applicant) => (
              <div className="applicant-card" key={applicant.id}>
                <div>
                  <h3>{applicant.creatorName}</h3>

                  <p>{applicant.creatorEmail}</p>

                  <p>
                    <strong>Status :</strong> {applicant.status}
                  </p>
                </div>

                <div className="action-buttons">
                  <button
                    className="accept-btn"
                    onClick={() =>
                      updateStatus(campaign.id, applicant.id, "Accepted")
                    }
                  >
                    Accept
                  </button>

                  <button
                    className="reject-btn"
                    onClick={() =>
                      updateStatus(campaign.id, applicant.id, "Rejected")
                    }
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default Applicants;
