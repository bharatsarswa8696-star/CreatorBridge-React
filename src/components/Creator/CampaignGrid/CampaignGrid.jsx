import { useEffect, useState } from "react";
import "./CampaignGrid.css";

function CampaignGrid() {

    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {

        async function loadCampaigns() {

            try {

                const response = await fetch("/api/campaigns");

                const data = await response.json();

                setCampaigns(data);

            }

            catch (error) {

                console.log(error);

            }

        }

        loadCampaigns();

    }, []);

    return (

        <section>

            <h2 className="section-title">

                Live Brand Campaigns

            </h2>

            <div className="campaign-grid">

                {

                    campaigns.length === 0 ?

                    (

                        <div className="campaign-card">

                            <h3>

                                No Campaigns Available

                            </h3>

                            <p>

                                Brands haven't published any campaigns yet.

                            </p>

                        </div>

                    )

                    :

                    campaigns.map((campaign)=>(

                        <div
                            key={campaign._id}
                            className="campaign-card"
                        >

                            <h3>

                                {campaign.title}

                            </h3>

                            <p>

                                <strong>Brand :</strong>

                                {campaign.brandName}

                            </p>

                            <p>

                                <strong>Category :</strong>

                                {campaign.category}

                            </p>

                            <p>

                                <strong>Platform :</strong>

                                {campaign.platform}

                            </p>

                            <p>

                                <strong>Budget :</strong>

                                ₹{campaign.budget}

                            </p>

                            <button
                                className="apply-btn"
                            >

                                Apply Now

                            </button>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default CampaignGrid;