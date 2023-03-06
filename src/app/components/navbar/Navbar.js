import React from 'react';
import styled from 'styled-components';

export const Navbar = () => {
	return (
		<Nav>
			<Logo>
				<a href='#'>Recapped.</a>{' '}
			</Logo>
			<Circle></Circle>
			<Menu>
				<I>
					<a href='#'>about</a>{' '}
				</I>
				<I>
					<a href='#'>contact</a>
				</I>
			</Menu>
		</Nav>
	);
};

const Nav = styled.nav`
	padding: 0;
	background-color: var(--pink);
	color: var(--white);
	min-height: 6rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	position: relative;
`;

const Logo = styled.h1`
	position: absolute;
	margin: 0;
	font-weight: bold;
	font-size: 2.4rem;
	z-index: 2;

	a {
		color: var(--white);
		text-decoration: none;
		transition: all;

		:hover {
			color: white;
			transition-duration: 400ms;
			transition-timing-function: ease-in-out;
		}
	}
`;
const Circle = styled.div`
	background-color: var(--dark);
	width: 185px;
	height: 185px;
	border-radius: 300px;
	z-index: 1;
	position: absolute;
	top: -4rem;
	animation: levitate 10s infinite ease-in-out forwards alternate;
	:hover {
		transform: scale(1.1);
	}
	@keyframes levitate {
		from {
			transform: rotate(0deg) translateX(15px) rotate(0deg);
		}
		to {
			transform: rotate(360deg) translateX(15px) rotate(-360deg);
		}
	}
`;

const Menu = styled.ul`
	position: absolute;
	right: 4rem;
	margin: 0;
	display: flex;

	a {
		color: var(--white);
		text-decoration: none;
		transition: all;

		:hover {
			color: var(--dark);
			transition-duration: 400ms;
			transition-timing-function: ease-in-out;
		}
	}
`;

const I = styled.li`
	list-style: none;
	font-weight: 600;
	font-size: 1.3rem;
	margin-left: 3rem;
`;
