import { Link } from 'react-router-dom';
import "./styles.css";

const Navbar = () => {
	return (
		<nav>
			<Link to="/">
				<h1>Github API</h1>
			</Link>
		</nav>
	);
};

export default Navbar;
