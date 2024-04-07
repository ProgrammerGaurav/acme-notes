import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
	const testimonials = [
		{
			name: "John Smith",
			quote: "Acme Notes has completely transformed the way I organize my thoughts and ideas. With its intuitive interface and collaborative features, I can easily share and collaborate on notes with my team, boosting productivity and efficiency.",
		},
		{
			name: "Emily Johnson",
			quote: "I've tried numerous note-taking apps before, but none compare to Acme Notes. The ability to customize themes and templates to suit my style, coupled with smart suggestions for organizing my notes, makes it my go-to app for staying organized and productive.",
		},
		{
			name: "David Martinez",
			quote: "Offline access and editing have been game-changers for me, especially when I'm on the go or in areas with limited internet connectivity. I can continue working on my notes seamlessly, knowing that they'll sync with the server once I'm back online.",
		},
	];
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="testimonials">
			<div className="container-fluid">
				<h2 className="header">See What Our Users Have to Say </h2>
				<div className="row">
					<Slider {...settings} className="slider-container">
						{testimonials.map((testimonial) => (
							<div className="col-md-12 col-lg-4" key={testimonial.name}>
								<div className="testmonial">
									<img src="profle-pic.webp" alt="" />
									<div className="name">{testimonial.name}</div>
									<div className="quote">{testimonial.quote}</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
