import React, { useState } from "react";
import Accordion from "../../components/Accordion/Accordion";
import AppTitle from "../../components/AppTitle/AppTitle";
import Dropdown from "../../components/Dropdown/Dropdown";
import "./About.css";


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

  // just creating dummy content for dropdown
  const options = [
    {
      id: 1,
      label: "the color red",
      value: "red",
    },
    {
      id: 2,
      label: "the color green",
      value: "green",
    },
    {
      id: 3,
      label: "A Shade of blue",
      value: "blue",
    },
];
  
// about component
const About = () => {
// state for the dropdown
  const [selected, setSelected] = useState(options[0])
  return (
    <div className="about">
      <div className="a__title" >
			<AppTitle title="Welcome to Our About Page" />
      </div>
			<div className="about__content">
        <div className="ac__accordion">
					<Accordion items={items} />
				</div>
        <div className="ac__dropdown">
					<Dropdown selected={selected} onSelectedChange={setSelected} options={options} />
				</div>
			</div>
		</div>
	);
};

export default About;
