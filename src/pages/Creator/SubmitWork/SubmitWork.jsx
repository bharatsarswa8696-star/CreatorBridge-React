import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./SubmitWork.css";

function SubmitWork() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [work, setWork] = useState({

        instagram: "",

        youtube: "",

        drive: "",

        notes: ""

    });

    function handleChange(e){

        setWork({

            ...work,

            [e.target.name]:e.target.value

        });

    }

    function handleSubmit(){

        const campaigns =
            JSON.parse(localStorage.getItem("campaigns")) || [];

        const updatedCampaigns = campaigns.map((campaign)=>{

            if(campaign.id !== Number(id))
                return campaign;

            return{

                ...campaign,

                work:{

                    ...work,

                    status:"Submitted"

                }

            };

        });

        localStorage.setItem(

            "campaigns",

            JSON.stringify(updatedCampaigns)

        );

        alert("Work submitted successfully.");

        navigate("/creator/my-campaigns");

    }

    return(

        <div className="submit-work">

            <h1>Submit Work</h1>

            <input

                name="instagram"

                placeholder="Instagram Reel Link"

                value={work.instagram}

                onChange={handleChange}

            />

            <input

                name="youtube"

                placeholder="YouTube Video Link"

                value={work.youtube}

                onChange={handleChange}

            />

            <input

                name="drive"

                placeholder="Google Drive Link"

                value={work.drive}

                onChange={handleChange}

            />

            <textarea

                name="notes"

                placeholder="Additional Notes"

                value={work.notes}

                onChange={handleChange}

            />

            <button onClick={handleSubmit}>

                Submit Work

            </button>

        </div>

    );

}

export default SubmitWork;