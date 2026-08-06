import "./RightPanel.css";
import CampaignCard from "../Creator/CampaignCard/CampaignCard";


function RightPanel({onCampaignClick}) {


    const campaigns = [

        {
            title:"Education",
            description:"Education creator campaign."
        },

        {
            title:"Gaming Sponsor",
            description:"Gaming creators collaboration program."
        },

        {
            title:"Tech Brand",
            description:"Review gadgets and get sponsorships."
        },

        {
            title:"Finance Partner",
            description:"Promote finance products and earn."
        }

    ];


    return (

        <div className="right-panel">


            <h2>
                🔥 Available Campaigns
            </h2>


            {
                campaigns.map((campaign,index)=>(

                    <CampaignCard

                    key={index}

                    title={campaign.title}

                    description={campaign.description}

                    onClick={onCampaignClick}

                    />

                ))
            }


        </div>

    );


}


export default RightPanel;