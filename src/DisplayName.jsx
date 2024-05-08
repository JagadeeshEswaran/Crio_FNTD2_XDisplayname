/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const DisplayName = () => {
	const [fullName, setName] = useState({
		fname: "",
		lname: "",
	});
	const [showName, setShowName] = useState(false);

	const handleDisplayName = (e) => {
		e.preventDefault();

		if (!fullName.fname || !fullName.lname) {
			alert("Please fillout both the name fields");
		} else {
			setShowName(true);
		}
	};

	return (
		<>
			<section>
				<h1>Full Name Display</h1>

				<form
					style={{ display: "flex", flexDirection: "column" }}
					onSubmit={handleDisplayName}>
					<article>
						<label>First Name:</label>
						<input
							type="text"
							name="fname"
							id="fName"
							onChange={(e) => setName({ ...fullName, fname: e.target.value })}
						/>
					</article>
					<article>
						<label>Last Name:</label>
						<input
							type="text"
							name="lname"
							id="lName"
							onChange={(e) => setName({ ...fullName, lname: e.target.value })}
						/>
					</article>

					<article>
						<button type="submit">Submit</button>
					</article>
				</form>

				{showName && `Full Name: ${fullName.fname} ${fullName.lname}`}
			</section>
		</>
	);
};

export default DisplayName;
