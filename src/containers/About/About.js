import React from "react";
import Accordion from "../../components/Accordion/Accordion";
import AppTitle from "../../components/AppTitle/AppTitle";
import "./About.css";

const About = () => {
  // just creating dummy content for accordion
  const items = [
    {
      id:1,
      title: "What is React?",
      content:"React is a front-end JavaScript framework"
    },
    {
      id:2,
      title: "Why use React?",
      content:"React helps developers to write scalable applications"
    },
    {
      id:3,
      title: "How is React used?",
      content:"React is use by creating components, mostly reusable"
    },
  ]
  return (
    <div>
      <AppTitle title="Welcome to Our About Page" />
      <Accordion items={items} />
    </div>
  );
};

export default About;
