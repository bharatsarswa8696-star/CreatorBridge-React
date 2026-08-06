import "./CampaignCard.css";


function CampaignCard({title,description,onClick}){


return (

<div 
className="campaign-card"
onClick={onClick}
>


<h3>
{title}
</h3>


<p>
{description}
</p>


</div>

);


}


export default CampaignCard;