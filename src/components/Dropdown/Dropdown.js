import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ selected, onSelectedChange, options }) => {
    // state to handle open and close dropdown
    const [open, setOpen] = useState(false)
    // making use of useRef to select DOM elements
    const ref = useRef()

    useEffect(() => {
        const onBodyClick = (event) => {
					// determining if the clicked DOM element is inside this component
					if (ref.current.contains(event.target)) {
						return;
					}

					// closing the dropdown
					setOpen(false);
				};
        document.body.addEventListener('click', onBodyClick)
        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, [])
    const renderedOptions = options.map((option) => {
        // if an option is selected, do not show it in the dropdown
        if (option.value === selected.value) {
            return null
        }
		return (
			<div key={option.id} className="item" onClick={()=>onSelectedChange(option)}>
				{option.label}
			</div>
		);
	});

	// Dropdown return
	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label htmlFor="option" className="label">
					Select a Color
				</label>
				<div
					onClick={() => setOpen(!open)}
					className={`ui selection dropdown ${open && `visible active`}`}>
					<i className="dropdown icon"></i>
					<div className="text">{selected.label}</div>
					<div className={`menu ${open && `visible transition`}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
