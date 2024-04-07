import React from "react";

const Hero = () => {
	return (
		<div className="container-fluid hero d-flex">
			<div className="w-50">
				<h1 className="title ">
					{/* Capture, Organize, Create<span>.</span> */}
					Effortless Note Taking: Streamline your thought, simplify your life<span>.</span>
				</h1>
				<p className="subtitle">Capture, Organize, Create</p>
				<button className="btn signup-btn" type="submit">
					Sign up for free
				</button>
			</div>
			<div>
				<img src="/hero-img.png" alt="" className="main-image" />
			</div>
			<div class="down-arrow">
				<img src="https://cdn-icons-png.flaticon.com/512/54/54785.png" alt="" />
			</div>
		</div>
	);
};

export default Hero;
