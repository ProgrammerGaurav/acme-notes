import React from "react";

const Features = () => {
	const features = [
		{
			icon: "bi-currency-rupee",
			title: "Free of cost",
		},
		{
			icon: "bi-lightbulb-fill",
			title: "Smart Suggestions",
		},
		{
			icon: "bi-people-fill",
			title: "Collaborative",
		},
		{
			icon: "bi-wifi-off",
			title: "Offline Access",
		},
	];
	return (
		<div className="features">
			<div className="container-fluid">
				<h2 className="header">Features</h2>
				<div className="row">
					{features.map((feature) => (
						<div className="col-md-6 col-lg-3" key={feature.title}>
							<div className="card feature">
								<i className={`bi ${feature.icon}`}></i>
								<div className="title">{feature.title}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Features;
