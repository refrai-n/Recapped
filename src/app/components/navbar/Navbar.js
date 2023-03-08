import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../features/pagesSlice';
import { setIsOpen } from '../../features/burgerMenuSlice';
export const Navbar = () => {
	const dispatch = useDispatch();
	const { isOpen } = useSelector((state) => state.burgerMenu);
	const setAbout = () => {
		dispatch(setPage('about'));
	};

	const setContact = () => {
		dispatch(setPage('contact'));
	};

	const handleBurgerClick = () => {
		isOpen ? dispatch(setIsOpen(false)) : dispatch(setIsOpen(true));
	};

	const listIco = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='35'
			height='35'
			fill='#eaeaea'
			viewBox='0 0 16 16'
		>
			<path
				fillRule='evenodd'
				d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
			/>
		</svg>
	);

	const closeIco = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='35'
			height='35'
			fill='#eaeaea'
			viewBox='0 0 16 16'
		>
			<path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
		</svg>
	);

	return (
		<Nav>
			<Logo className='logo'>
				<a href='#'>Recapped.</a>{' '}
			</Logo>
			<Circle className='circle'></Circle>
			<Pages>
				<Burger
					className='listIco'
					isOpen={isOpen}
					onClick={handleBurgerClick}
				>
					{listIco}
				</Burger>
				<CloseBurger
					className='closeIco'
					isOpen={isOpen}
					onClick={handleBurgerClick}
				>
					{closeIco}
				</CloseBurger>
				<I onClick={setAbout} className='page'>
					about
				</I>
				<I onClick={setContact} className='page'>
					contact
				</I>
			</Pages>
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

	@media screen and (max-width: 688px) {
		.page {
			display: none;
		}
	}

	@media screen and (max-width: 465px) {
		.logo {
			left: 0;
			margin-left: 1rem;
		}
		.circle {
			left: 0;
		}
	}
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

const Pages = styled.ul`
	position: absolute;
	right: 4rem;
	margin: 0;
	display: flex;
`;

const I = styled.li`
	list-style: none;
	font-weight: 600;
	font-size: 1.3rem;
	margin-left: 3rem;

	color: var(--white);
	text-decoration: none;
	transition: all;
	cursor: pointer;
	:hover {
		color: var(--dark);
		transition-duration: 400ms;
		transition-timing-function: ease-in-out;
	}
`;

const Burger = styled.div`
	display: none;
	@media screen and (max-width: 688px) {
		& {
			display: ${(props) => (!props.isOpen ? 'block' : 'none')};
		}
	}
	margin-right: -2rem;
	z-index: 5;
	transition: all 0.5s ease-in-out;
		:hover {
			transform: scale(1.3);
		}
`;

const CloseBurger = styled.div`
	display: none;
	@media screen and (max-width: 688px) {
		& {
			display: ${(props) => (props.isOpen ? 'block' : 'none')};
		}
	}
	margin-right: -2rem;
	z-index: 6;
	transition: all 0.5s ease-in-out;
		:hover {
			transform: scale(1.3);
		}
`;
