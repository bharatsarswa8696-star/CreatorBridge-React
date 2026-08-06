import { useEffect, useState } from "react";
import "./RecentCampaigns.css";

function RecentCampaigns() {

    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {

        const storedCampaigns =
            JSON.parse(localStorage.getItem("campaigns")) || [];

        setCampaigns(storedCampaigns);

    }, []);

    return (

        <section className="recent-campaigns">

            <h2 className="section-title">
                Recent Campaigns
            </h2>

            <div className="campaign-list">

                {
                    campaigns.length === 0 ?

                    (

                        <div className="campaign-card">

                            <h3>No campaigns yet</h3>

                            <p>Create your first campaign.</p>

                        </div>

                    )

                    :

                    campaigns.map((campaign) => (

                        <div
                            className="campaign-card"
                            key={campaign.id}
                        >

                            <h3>{campaign.title}</h3>

                            <p>{campaign.description}</p>

                            <p>
                                <strong>Budget:</strong> ₹{campaign.budget}
                            </p>

                            <p>
                                <strong>Platform:</strong> {campaign.platform}
                            </p>

                            <p>
                                <strong>Status:</strong> {campaign.status}
                            </p>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default RecentCampaigns;