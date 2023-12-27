import React from "react";
import Hero from "../components/Hero";
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";
import Footer from "../components/Footer";
import LiveSection from "../components/live";
import { useSelector } from "react-redux";
const HomePage = () => {
  const userName = useSelector((state) => state.account.username);
  return (
    <div className="holder">
      <Hero />
      <CoursesList />
      <CategoriesList />
      {!userName ? null : <LiveSection />}
      <Footer />
    </div>
  );
};

export default HomePage;
