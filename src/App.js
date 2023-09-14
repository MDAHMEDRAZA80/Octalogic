// src/App.js
import React, { useState } from "react";

function App() {
  const sampleData = [
    {
      enrollmentNumber: "EN001",
      studentName: "John Doe",
      courseName: "React Fundamentals",
      fees: "$1000",
      enrollmentDate: "2023-09-10"
    },
    {
      enrollmentNumber: "EN002",
      studentName: "Jane Smith",
      courseName: "Advanced JavaScript",
      fees: "$1200",
      enrollmentDate: "2023-09-11"
    }
  ];
  const bestdata = [
    {
      RegNo: "101",
      FName: "A",
      LName: "B",
      Coruces: "ABC",
      Totalfees: "123",
      RegDate: "2023-09-2011"
    },
    {
      RegNo: "102",
      FName: "A",
      LName: "B",
      Coruces: "ABC",
      Totalfees: "123",
      RegDate: "2023-09-2011"
    }
  ];

  const [activeTab, setActiveTab] = useState("home");

  const totalStudents = sampleData.length;
  const totalCourses = [...new Set(sampleData.map((item) => item.courseName))]
    .length;
  const totalAmountEarned = sampleData.reduce(
    (total, item) => total + parseFloat(item.fees.slice(1)),
    0
  );

  const bestPerformingCourse = ""; // Implement logic to find the best performing course
  const worstPerformingCourse = ""; // Implement logic to find the worst performing course

  return (
    <div className="App">
      <style>{`
        .App {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }

        .dashboard {
          display: flex;
          flex-direction: row;
          max-width: 800px;
          margin: 0 auto;
          background-color: #f2f2f2;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
          border-radius: 5px;
          overflow: hidden;
        }

        .sidebar {
          width: 150px;
          background-color: #333;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .tab {
          padding: 10px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .tab:hover {
          background-color: #555;
        }

        .tab.active {
          background-color: #555;
        }

        .content {
          flex: 1;
          padding: 20px;
        }

        .home-container {
          padding: 20px;
        }

        .stats {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .stats div {
          background-color: #f2f2f2;
          padding: 10px;
          border-radius: 5px;
          text-align: center;
          flex: 1;
        }

        .stats p {
          margin: 0;
        }

        .enrollment-table {
          width: 100%;
          border-collapse: collapse;
        }

        .enrollment-table th,
        .enrollment-table td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }

        .enrollment-table th {
          background-color: #f2f2f2;
        }

        .enrollment-table tr:nth-child(even) {
          background-color: #f2f2f2;
        }

        .enrollment-table tr:hover {
          background-color: #ddd;
        }
      `}</style>
      <div className="dashboard">
        <div className="sidebar">
          <div
            className={`tab ${activeTab === "home" ? "active" : ""}`}
            onClick={() => setActiveTab("home")}
          >
            Home
          </div>
          <div
            className={`tab ${activeTab === "courses" ? "active" : ""}`}
            onClick={() => setActiveTab("courses")}
          >
            Courses
          </div>
        </div>
        <div className="content">
          {activeTab === "home" ? (
            <div className="home-container">
              <h1>Welcome to the Home Page</h1>
              <div className="stats">
                <div>
                  <p>Total Number of Students:</p>
                  <p>{totalStudents}</p>
                </div>
                <div>
                  <p>Total Number of Courses:</p>
                  <p>{totalCourses}</p>
                </div>
                <div>
                  <p>Total Amount Earned:</p>
                  <p>${totalAmountEarned.toFixed(2)}</p>
                </div>
                <div>
                  <p>Best Performing Course:</p>
                  <p>{bestPerformingCourse}</p>
                </div>
                <div>
                  <p>Worst Performing Course:</p>
                  <p>{worstPerformingCourse}</p>
                </div>
              </div>

              <h2>Enrollment Data</h2>
              <table className="enrollment-table">
                <thead>
                  <tr>
                    <th>Enrollment Number</th>
                    <th>Student Name</th>
                    <th>Course Name</th>
                    <th>Fees</th>
                    <th>Enrollment Date</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.enrollmentNumber}</td>
                      <td>{data.studentName}</td>
                      <td>{data.courseName}</td>
                      <td>{data.fees}</td>
                      <td>{data.enrollmentDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h2> Best Students</h2>
              <table className="Best-Students">
                <thead>
                  <tr>
                    <th></th>
                    <th>Reg. No</th>
                    <th>F.Name</th>
                    <th>L.Name</th>
                    <th>Course #</th>
                    <th>Total Fees</th>
                    <th>Reg. Date</th>
                  </tr>
                </thead>
                <tbody>
                  {bestdata.map((data, index) => (
                    <tr key={index}>
                      <td>{data.RegNo}</td>
                      <td>{data.FName}</td>
                      <td>{data.LName}</td>
                      <td>{data.Coruces}</td>
                      <td>{data.Totalfees}</td>
                      <td>{data.RegDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <Courses />
          )}
        </div>
      </div>
    </div>
  );
}

function Courses() {
  return (
    <div>
      <h1>Courses</h1>
      {/* Add Courses content here */}
    </div>
  );
}

export default App;
