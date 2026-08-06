import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./CreateCampaign.css";

function CreateCampaign() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    brand: "",
    category: "",
    description: "",
    budget: "",
    deadline: "",
    platform: "",
  });
  function handleChange(e) {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit() {
    const oldCampaigns = JSON.parse(localStorage.getItem("campaigns")) || [];

    const newCampaign = {
      id: Date.now(),

      ...formData,

      applicants: [],

      status: "Open",
    };

    oldCampaigns.push(newCampaign);

    localStorage.setItem(
      "campaigns",

      JSON.stringify(oldCampaigns),
    );

    navigate("/brand/dashboard");
  }

  return (
    <div className="create-campaign-page">
      <h1>Create Campaign</h1>

      <div className="campaign-form">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Campaign Title"
        />

       <input
    name="brand"
    value={formData.brand}
    onChange={handleChange}
    placeholder="Brand Name"
/>

     <select
    name="category"
    value={formData.category}
    onChange={handleChange}
>

    <option value="">
        Select Category
    </option>

    <option value="Gaming">
        Gaming
    </option>

    <option value="Fashion">
        Fashion
    </option>

    <option value="Technology">
        Technology
    </option>

    <option value="Education">
        Education
    </option>

</select>

        <textarea
    name="description"
    value={formData.description}
    onChange={handleChange}
    placeholder="Campaign Description"
/>

        <input
    type="number"
    name="budget"
    value={formData.budget}
    onChange={handleChange}
    placeholder="Budget (₹)"
/>

        <input
    type="date"
    name="deadline"
    value={formData.deadline}
    onChange={handleChange}
/>

        <input
    name="platform"
    value={formData.platform}
    onChange={handleChange}
    placeholder="Required Platform (Instagram, YouTube...)"
/>

      <button onClick={handleSubmit}>
    Publish Campaign
</button>
      </div>
    </div>
  );
}

export default CreateCampaign;
