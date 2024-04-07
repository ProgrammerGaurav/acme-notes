import { useEffect, useState } from "react";

const NavbarComponent = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 50) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		document.addEventListener("scroll", handleScroll);
		return () => handleScroll;
	}, []);

	return (
		<nav className={`navbar navbar-expand-lg ${isScrolled ? "scrolled" : ""}`}>
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					<img src="/logo.webp" alt="" />
					<div>Acme Notes </div>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								Features
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								Pricing
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								Contact Us
							</a>
						</li>
					</ul>
					<button className="btn login-btn" type="submit">
						Log in
					</button>
					<button className="btn signup-btn" type="submit">
						Sign up
					</button>
				</div>
			</div>
		</nav>
	);
};

export default NavbarComponent;
