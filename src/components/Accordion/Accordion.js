import React, { Fragment, useState } from "react";

const Accordion = ({ items }) => {
    // state
    const [activeIndex, setActiveIndex] = useState(null)

    // handlers
    const onTitleClick = (index) => {
        // updating state with the index of the clicked item
			setActiveIndex(index);
		};

	// mapping through items and displaying accordion for each
    const renderedItems = items.map((item, index) => {
        // comparing the currently mapped index with the state index 
        const active = index === activeIndex ? "active" : ""
		return (
			<Fragment key={item.id}>
				<div className={`title ${active}`} onClick={() => onTitleClick(index)}>
					<i className="dropdown icon"></i>
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</Fragment>
		);
	});
	return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
