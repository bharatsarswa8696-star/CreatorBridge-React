import { useEffect, useState } from "react";
import "./Campaigns.css";

function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const storedCampaigns = JSON.parse(localStorage.getItem("campaigns")) || [];

    setCampaigns(storedCampaigns);
  }, []);
function handleApply(campaignId){

    const campaigns =
        JSON.parse(localStorage.getItem("campaigns")) || [];

    let alreadyApplied = false;

    const updatedCampaigns = campaigns.map((campaign)=>{

        if(campaign.id !== campaignId){

            return campaign;

        }

        const exists = campaign.applicants.some(

            applicant => applicant.creatorEmail === "creator@test.com"

        );

        if(exists){

            alreadyApplied = true;

            return campaign;

        }

        return{

            ...campaign,

            applicants:[

                ...campaign.applicants,

                {

                    id:Date.now(),

                    creatorName:"Demo Creator",

                    creatorEmail:"creator@test.com",

                    status:"Pending"

                }

            ]

        };

    });

    if(alreadyApplied){

        alert("You have already applied.");

        return;
    }

    localStorage.setItem(

        "campaigns",

        JSON.stringify(updatedCampaigns)

    );

    alert("Application submitted successfully.");

}

  return (
    <div className="campaign-page">
      <h1>Available Campaigns</h1>

      <div className="campaign-grid">
        {campaigns.length === 0 ? (
          <div className="empty-card">
            <h2>No Campaigns Available</h2>

            <p>Check back later.</p>
          </div>
        ) : (
          campaigns.map((campaign) => (
            <div className="campaign-card" key={campaign.id}>
              <h2>{campaign.title}</h2>

              <p>{campaign.description}</p>

              <div className="campaign-info">
                <span>
                  Budget
                  <strong>₹{campaign.budget}</strong>
                </span>

                <span>
                  Platform
                  <strong>{campaign.platform}</strong>
                </span>

                <span>
                  Deadline
                  <strong>{campaign.deadline}</strong>
                </span>
              </div>

              <button onClick={() => handleApply(campaign.id)}>Apply</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Campaigns;
