import React from "react";

const Hero = () => {
	return (
		<div className="hero d-flex align-items-center">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6">
						<h1 className="title ">
							Effortless Note Taking: Streamline your thought, simplify your life<span>.</span>
						</h1>
						<p className="subtitle">Capture, Organize, Create</p>
						<button className="btn signup-btn" type="submit">
							Sign up for free
						</button>
					</div>
					<div className="col-lg-6 d-none d-lg-block">
						<img src="/hero-img.webp" alt="" className="main-image" />
					</div>
				</div>
				<div className="down-arrow">
					<img src="https://cdn-icons-png.flaticon.com/512/54/54785.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
