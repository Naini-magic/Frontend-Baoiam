import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Home/Navbar";
import HomePage from "./components/Home/HomePage";
import PridePage from "./components/Pride/PridePage";
import AuthModal from "./components/Auth/AuthModal";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import DataAnalysisPage from "./components/DataAnalysis/DataAnalysisPage";
import DataSciencePage from "./components/DataScience/DataSciencePage";
import Contact from "./components/Footer/Contact";
import ContactForm from "./Pages/ContactForm";
import TermsAndConditions from "./Pages/TermsAndConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import DM_Page from "./components/DigitalMarketing/DM_Page";
import SD_Page from "./components/SoftwareDevelopment/SD_Page";
import RefundPolicy from "./Pages/RefundPolicy";
import BlogSectionPage from "./components/Blogs/BlogSectionPage";
import AboutUSPage from "./Pages/AboutUs/AboutUSPage";
import { ContactRoundIcon } from "lucide-react";
import ContactUs from "./Pages/ContactUs";
import ReferEarnPage from "./Pages/Refer&Earn/ReferEarnPage";
import GcepPage from "./Pages/GCEP/GcepPage";
import Instructor from "./Pages/Instructor/Instructor";
import Pap_Page from "./Pages/PAP/Pap_Page";
import Udaan90 from "./Pages/Kickstarcourses/Udaan-90/Udaan90.jsx";
import SuccessFusion from "./Pages/Kickstarcourses/SuccessFusion/SuccessFusion.jsx";
import AIML from "./Pages/Kickstarcourses/AI-ML/AI-ML.jsx";



function App() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const hasShown = localStorage.getItem("signupModalShown");
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsSignupOpen(true);
        localStorage.setItem("signupModalShown", "true");
      }, 5 * 60 * 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  //success callback for signup
  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setIsSignupOpen(false);
  };

  //logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsSignupOpen(true);
  };

  return (
    <Router>
        <ScrollToTop />
      <div>
        <Routes>
          <Route path="/GCEP" element={<GcepPage/>} />
          <Route path="/instructor" element={<Instructor/>} />
          <Route path="/blogs" element={<BlogSectionPage/>} />
          <Route path="/aboutUs" element={<AboutUSPage/>} />
          <Route path="/DataAnalysis" element={<DataAnalysisPage />} />
          <Route path="/DigitalMarketing" element={<DM_Page />} />
          <Route path="/SoftwareDevelopment" element={<SD_Page />} />
          <Route path="/DataScience" element={<DataSciencePage />} />
          <Route path="*" element={
            <>
              {/* <Navbar onSignUpClick={() => setIsSignupOpen(true)} /> */}
              <Navbar onSignUpClick={() => setIsSignupOpen(true)}

                isLoggedIn={isLoggedIn}  //update these two lines
                onLogout={handleLogout}
                />
              <AuthModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)}
                onAuthSuccess={handleAuthSuccess}  // update
              />
              <AuthModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pride" element={<PridePage />} />
                <Route path="/terms&conditions" element={<TermsAndConditions/>} />
                <Route path="/Privacy&Policy" element={<PrivacyPolicy/>} />
                <Route path="/refundPolicy" element={<RefundPolicy/>} />
                <Route path="/contact_us" element={<ContactUs/>} />
                <Route path="/refer&earn" element={<ReferEarnPage/>} />
                <Route path="/PAP" element={<Pap_Page/>} />
                <Route path="/Udaan90" element={<Udaan90 />} />

                  <Route path="/Successfusion" element={<SuccessFusion />} />

                  <Route path="/AIML" element={<AIML />} />

              </Routes>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";
// import "./App.css";

// import Navbar from "./components/Home/Navbar";
// import HomePage from "./components/Home/HomePage";
// import PridePage from "./components/Pride/PridePage";
// import AuthModal from "./components/Auth/AuthModal";
// import { useEffect, useState } from "react";
// import ScrollToTop from "./components/ScrollToTop";
// import DataAnalysisPage from "./components/DataAnalysis/DataAnalysisPage";
// import DataSciencePage from "./components/DataScience/DataSciencePage";
// import Contact from "./components/Footer/Contact";
// import ContactForm from "./Pages/ContactForm";
// import TermsAndConditions from "./Pages/TermsAndConditions";
// import PrivacyPolicy from "./Pages/PrivacyPolicy";
// import DM_Page from "./components/DigitalMarketing/DM_Page";
// import SD_Page from "./components/SoftwareDevelopment/SD_Page";
// import RefundPolicy from "./Pages/RefundPolicy";
// import BlogSectionPage from "./components/Blogs/BlogSectionPage";
// import AboutUSPage from "./Pages/AboutUs/AboutUSPage";
// import { ContactRoundIcon } from "lucide-react";
// import ContactUs from "./Pages/ContactUs";
// import ReferEarnPage from "./Pages/Refer&Earn/ReferEarnPage";
// import GcepPage from "./Pages/GCEP/GcepPage";
// import Instructor from "./Pages/Instructor/Instructor";
// import Pap_Page from "./Pages/PAP/Pap_Page";
// import ProtectedRoute from "./routes/ProtectedRoute";
// // import {Admin} from "./Admin.jsx"
// // import ReferralPage from "./Pages/Refer&Earn/ReferralPage";
// import Udaan90 from "./Pages/Kickstarcourses/Udaan-90/Udaan90.jsx";
// import SuccessFusion from "./Pages/Kickstarcourses/SuccessFusion/SuccessFusion.jsx";
// import AIML from "./Pages/Kickstarcourses/AI-ML/AI-ML.jsx";

// function App() {
//   const [isSignupOpen, setIsSignupOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const hasShown = localStorage.getItem("signupModalShown");
//     if (!hasShown) {
//       const timer = setTimeout(() => {
//         setIsSignupOpen(true);
//         localStorage.setItem("signupModalShown", "true");
//       }, 5 * 60 * 1000);
//       return () => clearTimeout(timer);
//     }
//   }, []);

//   //success callback for signup
//   const handleAuthSuccess = () => {
//     setIsLoggedIn(true);
//     setIsSignupOpen(false);
//   };

//   //logout function
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setIsSignupOpen(true);
//   };

//   return (
//     <Router>
//       <ScrollToTop />
//       <div>
//         <Routes>
//           <Route
//             path="/DataAnalysis"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn}>
//                 <DataAnalysisPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/blogs" element={<BlogSectionPage />} />
//           {/* <Route path="/Admin" element={<Admin />} /> */}
//           {/* <Route path="/referral" element={<ReferralPage />} /> */}

//           {/* <Route path="/DataAnalysis" element={<DataAnalysisPage />} /> */}
//           <Route
//             path="/DataAnalysis"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn}>
//                 <DataAnalysisPage />
//               </ProtectedRoute>
//             }
//           />

//           {/* <Route path="/DigitalMarketing" element={<DM_Page />} /> */}

//           <Route
//             path="/DigitalMarketing"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn}>
//                 <DM_Page />
//               </ProtectedRoute>
//             }
//           />

//           {/* <Route path="/SoftwareDevelopment" element={<SD_Page />} /> */}
//           <Route
//             path="/SoftwareDevelopment"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn}>
//                 <SD_Page />
//               </ProtectedRoute>
//             }
//           />

//           {/* <Route path="/DataScience" element={<DataSciencePage />} /> */}

//           <Route
//             path="/DataScience"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn}>
//                 <DataSciencePage />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="*"
//             element={
//               <>
//                 {/* <Navbar onSignUpClick={() => setIsSignupOpen(true)} /> */}
//                 <Navbar
//                   onSignUpClick={() => setIsSignupOpen(true)}
//                   isLoggedIn={isLoggedIn} //update these two lines
//                   onLogout={handleLogout}
//                 />
//                 <AuthModal
//                   isOpen={isSignupOpen}
//                   onClose={() => setIsSignupOpen(false)}
//                   onAuthSuccess={handleAuthSuccess} // update
//                 />

//                 <Routes>
//                   <Route path="/" element={<HomePage />} />

//                   {/* <Route path="/pride" element={<PridePage />} /> */}

//                   <Route
//                     path="/pride"
//                     element={
//                       <ProtectedRoute isLoggedIn={isLoggedIn}>
//                         <PridePage />
//                       </ProtectedRoute>
//                     }
//                   />

//                   <Route path="/Udaan90" element={<Udaan90 />} />

//                   <Route path="/Successfusion" element={<SuccessFusion />} />

//                   <Route path="/AIML" element={<AIML />} />

//                   <Route
//                     path="/terms&conditions"
//                     element={<TermsAndConditions />}
//                   />

//                   <Route path="/Privacy&Policy" element={<PrivacyPolicy />} />

//                   <Route path="/refundPolicy" element={<RefundPolicy />} />

//                   <Route path="/contact_us" element={<ContactUs />} />

//                   {/* <Route path="/GCEP" element={<GcepPage/>} /> */}

//                   <Route
//                     path="/GCEP"
//                     element={
//                       <ProtectedRoute isLoggedIn={isLoggedIn}>
//                         <GcepPage />
//                       </ProtectedRoute>
//                     }
//                   />

//                   {/* <Route path="/aboutUs" element={<AboutUSPage/>} /> */}

//                   <Route
//                     path="/aboutUs"
//                     element={
//                       <ProtectedRoute isLoggedIn={isLoggedIn}>
//                         <AboutUSPage />
//                       </ProtectedRoute>
//                     }
//                   />

//                   {/* <Route path="/instructor" element={<Instructor/>} />   */}

//                   <Route
//                     path="/instructor"
//                     element={
//                       <ProtectedRoute isLoggedIn={isLoggedIn}>
//                         <Instructor />
//                       </ProtectedRoute>
//                     }
//                   />

//                   <Route
//                     path="/refer&earn"
//                     element={<ReferEarnPage isLoggedIn={isLoggedIn} />}
//                   />

//                   {/* <Route
//   path="/refer&earn"
//   element={
//     <ProtectedRoute isLoggedIn={isLoggedIn}>
//       <ReferEarnPage />
//     </ProtectedRoute>
//   }
// /> */}

//                   <Route
//                     path="/PAP"
//                     element={
//                       <ProtectedRoute isLoggedIn={isLoggedIn}>
//                         <Pap_Page />
//                       </ProtectedRoute>
//                     }
//                   />
//                 </Routes>
//               </>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
