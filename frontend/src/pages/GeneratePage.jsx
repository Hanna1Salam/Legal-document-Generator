import React, { useState } from "react";
import "../styles/GenerationPage.css";
import axios from "axios";

const GeneratePage = () => {
  const [formData, setFormData] = useState({
      plaintiffName: "",
      plaintiffAddress: "",
      defendantName: "",
      defendantAddress: "",
      suitType: "",
      suitDetails: "",
      jurisdiction: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/generate_pdf",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          responseType: "blob", // To handle PDF response
        }
      );
  
      // Create a blob from the response
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
  
      // Create a link element for downloading the PDF
      const link = document.createElement("a");
      link.href = url;
      link.download = "generated_suit.pdf";
      link.click();
  
      // Reset the form
      setFormData({
        plaintiffName: "",
        plaintiffAddress: "",
        defendantName: "",
        defendantAddress: "",
        suitType: "",
        suitDetails: "",
        jurisdiction: "",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("An error occurred while generating the PDF.");
    }
  };
  
  

  return (
    <div className="form-container">
      <h1>Civil Suit Plaint</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="plaintiffName"
            placeholder="Plaintiff Name"
            value={formData.plaintiffName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="plaintiffAddress"
            placeholder="Plaintiff Address"
            value={formData.plaintiffAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="defendantName"
            placeholder="Defendant Name"
            value={formData.defendantName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="defendantAddress"
            placeholder="Defendant Address"
            value={formData.defendantAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <select
            name="suitType"
            value={formData.suitType}
            onChange={handleChange}
            required
          >
            <option value="">Select Suit Type</option>
            <option value="property">Property-Related Suits</option>
            <option value="contract">Contractual Disputes</option>
            <option value="money">Money Recovery Suits</option>
            <option value="tenancy">Tenancy and Lease Disputes</option>
            <option value="tort">Torts</option>
            <option value="partition">Partition and Settlement Disputes</option>
            <option value="injunction">Injunctions</option>
            <option value="company">Company and Business Disputes</option>
          </select>
        </div>
        <div className="form-row">
          <input
            type="text"
            name="jurisdiction"
            placeholder="Enter Jurisdiction"
            value={formData.jurisdiction}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <textarea
            name="suitDetails"
            placeholder="Suit Details"
            value={formData.suitDetails}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="generate-button">
          <button type="submit">Generate</button>
          <button
            type="button"
            onClick={() =>
              setFormData({
                plaintiffName: "",
                plaintiffAddress: "",
                defendantName: "",
                defendantAddress: "",
                suitType: "",
                suitDetails: "",
                jurisdiction: "",
              })
            }
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default GeneratePage;
