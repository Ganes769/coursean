import React, { useContext } from "react";
import Hero from "../components/Hero";
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";
import Footer from "../components/Footer";
import LiveSection from "../components/live";
import { useSelector } from "react-redux";
import { SerachContext, SimilarSearch } from "../components/SearchComponent";
import Tabs from "../components/Tabs";
import { AuthContext } from "./Authcontext";

const HomePage = () => {
  const user = useContext(AuthContext);
  const { currentUser } = user;
  return (
    <div className="holder">
      <Hero />

      <CoursesList />
      <CategoriesList />
      {!user ? null : <LiveSection />}
      <Footer />
    </div>
  );
};

export default HomePage;
