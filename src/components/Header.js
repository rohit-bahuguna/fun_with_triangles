import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<div>
			<div className="left-side">Fun with Triangles</div>
			<div className="right-side">
				<Link className="nav-link" to="/triangle">
					Triangle Quiz
				</Link>
				<Link className="nav-link" to="/areaoftriangle">
					Area of Triangle
				</Link>
				<Link className="nav-link" to="/hypotonuse">
					Hypotonuse
				</Link>
			</div>
		</div>
	);
};

export default Header;
