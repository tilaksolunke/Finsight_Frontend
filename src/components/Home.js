// import React, { useEffect, useState } from "react";
// import { auth, db } from "./firebase";
// import { doc, getDoc } from "firebase/firestore";

// function Home() {
//   const [userDetails, setUserDetails] = useState(null);
//   const fetchUserData = async () => {
//     auth.onAuthStateChanged(async (user) => {
//       console.log(user);

//       const docRef = doc(db, "Users", user.uid);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         setUserDetails(docSnap.data());
//         console.log(docSnap.data());
//       } else {
//         console.log("User is not logged in");
//       }
//     });
//   };
//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   async function handleLogout() {
//     try {
//       await auth.signOut();
//       window.location.href = "/login";
//       console.log("User logged out successfully!");
//     } catch (error) {
//       console.error("Error logging out:", error.message);
//     }
//   }
//   return (
//     <div>
//       {userDetails ? (
//         <>
//           <div style={{ display: "flex", justifyContent: "center" }}>
//             <img
//               src={userDetails.photo}
//               width={"40%"}
//               style={{ borderRadius: "50%" }}
//             />
//           </div>
//           <h3>Welcome {userDetails.firstName} 🙏🙏</h3>
//           <div>
//             <p>Email: {userDetails.email}</p>
//             <p>First Name: {userDetails.firstName}</p>
//             {/* <p>Last Name: {userDetails.lastName}</p> */}
//           </div>
//           <button className="btn btn-primary" onClick={handleLogout}>
//             Logout
//           </button>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }
// export default Home;

import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import './Home.css';

function Home() {
  const [searchCompany, setSearchCompany] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  const [showUserInfo, setShowUserInfo] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          }
        }
      });
    };

    fetchUserData();
  }, []);

  const handleSearch = () => {
    console.log('Searching for:', searchCompany);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };

  if (!userDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="home-container">
      <div className="header">
        <div className="user-controls">
          <div className="profile-icon" onClick={toggleUserInfo}>
            {/* Profile icon SVG */}
            <svg viewBox="0 0 24 24" width="24" height="24">
              <circle cx="12" cy="7" r="5" />
              <path d="M17 14h.5c1.38 0 2.5 1.12 2.5 2.5v3c0 .28-.22.5-.5.5h-17c-.28 0-.5-.22-.5-.5v-3c0-1.38 1.12-2.5 2.5-2.5h.5" />
            </svg>
          </div>
          <button className="btn btn-primary logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      {showUserInfo && (
        <div className="user-info-popup">
          <img src={userDetails.photo} alt="User" className="user-photo" />
          <h3>Welcome {userDetails.firstName} 🙏🙏</h3>
        </div>
      )}
      <h1 className="home-title">FINSIGHT AI</h1>
      <p className="home-subtitle">Enter a company name for analysis:</p>
      <div className="home-search-bar">
        <input
          type="text"
          className="home-search-input"
          placeholder="Enter a company name..."
          value={searchCompany}
          onChange={(e) => setSearchCompany(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Home;