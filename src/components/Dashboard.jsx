import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate to redirect
import { motion } from "framer-motion";
import { FaSignOutAlt, FaClipboardList } from "react-icons/fa";

function Dashboard() {
  const [all, setAll] = useState([]);
  const navigate = useNavigate(); // Initialize navigate
  const fetchData = async () => {
    try {
      const res = await axios.get('https://enquiry-backend.onrender.com/api/all-enquiries');
  
      // Sort by date (ascending)
      const sortedEnquiries = res.data.data.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
  
      setAll(sortedEnquiries);
    } catch (error) {
      console.error('Error fetching enquiries:', error);
    }
  };

  const handleLogout = () => {
    // Remove token from localStorage
    alert("logout successfully")
    localStorage.removeItem('token');
    // Redirect to login page
    navigate('/login');
  };

  useEffect(() => {
    fetchData();
  }, [all]);

  return (
    <>
      
      <div className="d-flex justify-content-between align-items-center px-4 py-3 bg-white shadow-sm border-bottom">
        <h2 className="m-0 text-primary d-flex align-items-center gap-2">
          <FaClipboardList /> Admin Dashboard
        </h2>
        <button className="btn btn-danger fw-semibold" onClick={handleLogout}>
          <FaSignOutAlt className="me-2" />
          Logout
        </button>
      </div>
  

      <div className="dashboard-bg py-5 px-3" style={{ backgroundColor: "#f7f9fc" }}>
        <motion.div
          className="container shadow-lg rounded-4 p-4 bg-white dashboard-container"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-4">
            <h1 className="dashboard-title fw-bold text-primary">
              Welcome to Admin Dashboard
            </h1>
            <p className="text-muted fs-5">📥 All Enquiries</p>
          </div>
  
         
          <div className="table-responsive">
            <table className="table table-hover table-bordered align-middle text-center table-striped dashboard-table">
              <thead className="table-primary text-dark">
                <tr>
                  <th>Sr. No.</th>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>D.O.B</th>
                  <th>Father's Name</th>
                  <th>Mother's Name</th>
                  <th>College</th>
                  <th>Address</th>
                  <th>Phone 1</th>
                  <th>Phone 2</th>
                  <th>Email</th>
                  <th>Enquiry For</th>
                  <th>Batch Preferred</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                {all.map((enquiry, index) => (
                  <tr key={enquiry._id}>
                    <td>{index + 1}</td>
                    <td>{enquiry.date}</td>
                    <td>{enquiry.name}</td>
                    <td>{enquiry.gender}</td>
                    <td>{enquiry.dob}</td>
                    <td>{enquiry.fatherName}</td>
                    <td>{enquiry.motherName}</td>
                    <td>{enquiry.college}</td>
                    <td>{enquiry.address}</td>
                    <td>{enquiry.phone1}</td>
                    <td>{enquiry.phone2}</td>
                    <td>{enquiry.email}</td>
                    <td>{enquiry.enquiryFor}</td>
                    <td>{enquiry.batchPreferred}</td>
                    <td>{enquiry.comeToknow}</td>
                  </tr>
                ))}
                {all.length === 0 && (
                  <tr>
                    <td colSpan="15" className="text-muted">
                      No enquiries found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Dashboard;
