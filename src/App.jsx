import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import InquiryForm from "./Form"; // Ensure this import is correct

const App = () => {
  return (
    <Router>
      <div className="container text-center mt-5">
        <h1>Welcome to Our Store</h1>
        <Link to="/inquiry">
          <button className="btn btn-primary mt-3">Go to Inquiry Form</button>
        </Link>
      </div>

      <Routes>
        <Route path="/inquiry" element={<InquiryForm />} />
      </Routes>
    </Router>
  );
};

export default App;
