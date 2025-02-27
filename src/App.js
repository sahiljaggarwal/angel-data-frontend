import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Mycomponents/Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import WorkDetails from "./WorkDetails";
import FAQs from "./Mycomponents/FAQs";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";
import Layout from "./Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CompleteTask from "./CompleteTask";
import UserTasksList from "./UserTasksList";

const MainApp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/work-details" element={<WorkDetails />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      {/* <ToastContainer /> */}
      <Footer />
    </>
  );
};

// const DashboardApp = () => {
//   return (
//     <Routes>
//       <Route path="/*" element={<Layout />} />
//     </Routes>
//   );
// };

const DashboardApp = () => {
  return (
    <Layout>
      <Routes>
        <Route path="complete-task" element={<CompleteTask />} />
        <Route path="user-tasks-list" element={<UserTasksList />} />
        {/* Add other dashboard routes here */}
      </Routes>
    </Layout>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainApp />} />
        <Route path="/dashboard/*" element={<DashboardApp />} />
        {/* <Route
          path="/dashboard/*"
          element={<PrivateRoute element={<Dashboard />} />}
        /> */}
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
