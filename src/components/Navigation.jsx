import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
	display: block;
	width: 100%;
	height: 100%;
`;

const Navigation = () => {
	return (
		<>
			<Nav fill variant="tabs">
				<Nav.Item>
					<Nav.Link as="div" eventKey="/">
						<StyledNavLink to={"/"}>Home Page</StyledNavLink>
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as="div" eventKey="/popular">
						<StyledNavLink to={"/popular"}>Popular Movies</StyledNavLink>
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as="div" eventKey="/toprated">
						<StyledNavLink to={"/toprated"}>Top Rated Movies</StyledNavLink>
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as="div" eventKey="/tvshows">
						<StyledNavLink to={"/tvshows"}>Tv Shows</StyledNavLink>
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as="div" eventKey="/search">
						<StyledNavLink to={"/search"}>Search Movies</StyledNavLink>
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</>
	);
};

export default Navigation;
