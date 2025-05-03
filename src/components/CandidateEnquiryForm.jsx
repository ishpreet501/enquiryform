import React, { useState } from "react";
import axios from "axios";
// import './form.css';
import {motion} from "framer-motion"
import {
  FaUser,
  FaGenderless,
  FaBirthdayCake,
  FaMale,
  FaFemale,
  FaUniversity,
  FaHome,
  FaPhoneAlt,
  FaEnvelope,
  FaBook,
  FaCalendarAlt,
  FaInfoCircle,
  FaUsers,
} from "react-icons/fa";


export default function CandidateEnquiryForm() {
  const [Date, setDate] = useState("");
  const [Name, setName] = useState("");
  const [Gender, setGender] = useState("");
  const [Dob, setDOB] = useState("");
  const [Fathername, setFathername] = useState("");
  const [Mothername, setMothername] = useState("");
  const [College, setCollege] = useState("");
  const [Address, setAddress] = useState("");
  const [Phone1, setPhone1] = useState("");
  const [Phone2, setPhone2] = useState("");
  const [Email, setEmail] = useState("");
  const [Enquiryfor, setenquiryFor] = useState("");
  const [BatchPreferred, setBatchPreferred] = useState("");
  const [Cometoknow, setComeToknow] = useState("");


  const resetForm = () => {
    setDate("");
    setName("");
    setGender("");
    setDOB("");
    setFathername("");
    setMothername("");
    setCollege("");
    setAddress("");
    setPhone1("");
    setPhone2("");
    setEmail("");
    setenquiryFor("");
    setBatchPreferred("");
    setComeToknow("");
  };

  const doPost = async () => {
    if (
      !Date ||
      !Name ||
      !Gender ||
      !Dob ||
      !Fathername ||
      !Mothername ||
      !College ||
      !Address ||
      !Phone1 ||
      !Phone2 ||
      !Email ||
      !Enquiryfor ||
      !BatchPreferred ||
      !Cometoknow
    ) {
      alert("Please fill all fields!");
      return;
    }

    const formData = {
      date: Date,
      name: Name,
      gender: Gender,
      dob: Dob,
      fatherName: Fathername,
      motherName: Mothername,
      college: College,
      address: Address,
      phone1: Phone1,
      phone2: Phone2,
      email: Email,
      enquiryFor: Enquiryfor,
      batchPreferred: BatchPreferred,
      comeToknow: Cometoknow,
    };

   
    try {
      const response = await axios.post(
        "http://localhost:5000/api/add-enquiry",
        formData
      );
      console.log("Upload Success:", response.data.data);
      alert("Enquiry submitted successfully!");
      resetForm();
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Failed to submit enquiry.");
    } 
  };

  return (
    
      <motion.div
        className="container my-5 d-flex justify-content-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
         <div className="col-md-8">
        <div className="card shadow-lg border-0">
       
          <div className="card-header bg-primary text-white text-center py-3">
            <h2 className="mb-0">AIT, LUDHIANA</h2>
            <p className="mb-0">Candidate Enquiry Form</p>
          </div>
    
          <div className="card-body p-4">
            
            <div className="row mb-3">
              <div className="col text-end">
                <label className="form-label fw-bold me-2">
                  <FaCalendarAlt className="me-2" />
                  Date:
                </label>
                <input
                  type="date"
                  className="form-control w-auto d-inline-block"
                  value={Date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
    
            <div className="row g-4">
              {/* LEFT */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  <FaUser className="me-2" />
                  Name of the Candidate
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
    
                <label className="form-label fw-semibold mt-3">
                  <FaGenderless  className="me-2" />
                  Gender
                </label>
                <div className="d-flex gap-3">
                  {["Male", "Female"].map((g) => (
                    <div className="form-check" key={g}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id={g}
                        value={g}
                        checked={Gender === g}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor={g}>
                        {g === "Male" ? <FaMale className="me-1" /> : <FaFemale className="me-1" />}
                        {g}
                      </label>
                    </div>
                  ))}
                </div>
    
                <label className="form-label fw-semibold mt-3">
                  <FaBirthdayCake className="me-2" />
                  D.O.B
                </label>
                <input
                  type="date"
                  className="form-control"
                  value={Dob}
                  onChange={(e) => setDOB(e.target.value)}
                />
    
                <label className="form-label fw-semibold mt-3">
                  <FaMale className="me-2" />
                  Father's Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={Fathername}
                  onChange={(e) => setFathername(e.target.value)}
                />
    
                <label className="form-label fw-semibold mt-3">
                  <FaFemale className="me-2" />
                  Mother's Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={Mothername}
                  onChange={(e) => setMothername(e.target.value)}
                />
    
                <label className="form-label fw-semibold mt-3">
                  <FaUniversity className="me-2" />
                  College / University
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={College}
                  onChange={(e) => setCollege(e.target.value)}
                />
    
                <label className="form-label fw-semibold mt-3">
                  <FaHome className="me-2" />
                  Address
                </label>
                <textarea
                  className="form-control"
                  rows="2"
                  value={Address}
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>
              </div>
    
              {/* RIGHT */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  <FaPhoneAlt className="me-2" />
                  Phone No. 1
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={Phone1}
                  onChange={(e) => setPhone1(e.target.value)}
                />
    
                <label className="form-label fw-semibold mt-3">
                  <FaPhoneAlt className="me-2" />
                  Phone No. 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={Phone2}
                  onChange={(e) => setPhone2(e.target.value)}
                />
    
                <label className="form-label fw-semibold mt-3">
                  <FaEnvelope className="me-2" />
                  Email ID
                </label>
                <input
                  type="email"
                  className="form-control"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
    
                <label className="form-label fw-semibold mt-3">
                  <FaBook className="me-2" />
                  Enquiry For
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={Enquiryfor}
                  onChange={(e) => setenquiryFor(e.target.value)}
                />
    
    <div className="form-group mb-3">
  <label className="form-label fw-bold">
    <i className="bi bi-calendar2-week me-1"></i>Batch Preferred
  </label>
  <select
    className="form-select"
    value={BatchPreferred}
    onChange={(e) => setBatchPreferred(e.target.value)}
  >
    <option value="">Select batch</option>
    <option value="Morning">Morning</option>
    <option value="Afternoon">Afternoon</option>
    <option value="Evening">Evening</option>
    <option value="Weekend">Weekend</option>
  </select>
</div>
    
                <label className="form-label fw-semibold mt-3">
                  <FaInfoCircle className="me-2" />
                  How did you come to know about AIT?
                </label>
                <div className="d-flex flex-wrap gap-3">
                  {[
                    "Teacher",
                    "Friend",
                    "Web Site",
                    "Seminar",
                    "Advertisement",
                    "Other",
                  ].map((source) => (
                    <div className="form-check" key={source}>
                      <input
                        type="radio"
                        className="form-check-input"
                        name="source"
                        value={source}
                        checked={Cometoknow === source}
                        onChange={(e) => setComeToknow(e.target.value)}
                      />
                      <label className="form-check-label">{source}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
    
            <div className=" mt-4  text-center">
              <motion.button
                className="btn btn-primary px-5 py-2 w-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={doPost}
              >
                <FaUsers className="me-2" />
                Submit Enquiry
              </motion.button>
            </div>
          </div>
          </div>
        </div>
      </motion.div>
    );
  }
