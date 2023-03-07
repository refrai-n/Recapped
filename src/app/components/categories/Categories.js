import React from 'react';
import styled from 'styled-components';
import TechIco from '../../resources/tech.png';
import PoliIco from '../../resources/politics.png';
import GameIco from '../../resources/game.png';
import EnvIco from '../../resources/env.png';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../features/categorySlice';

export const Categories = () => {
	const dispatch = useDispatch();

	const handleIcoClick = (event) => {
		const { id } = event.target;
		switch (id) {
			case 'tech':
				dispatch(setCategory('technology'));
				break;
			case 'poli':
				dispatch(setCategory('politics'));
				break;
			case 'game':
				dispatch(setCategory('gaming'));
				break;
			case 'env':
				dispatch(setCategory('environment'));
				break;
			default:
				break;
		}
	};

	return (
		<Container>
			<Squircle>
				<C>
					<Dot></Dot>
					<Ico id='tech' src={TechIco} onClick={handleIcoClick} />
				</C>
				<C>
					<Dot></Dot>
					<Ico id='poli' src={PoliIco} onClick={handleIcoClick} />
				</C>
				<C>
					<Dot></Dot>
					<Ico id='game' src={GameIco} onClick={handleIcoClick} />
				</C>
				<C>
					<Dot></Dot>
					<Ico id='env' src={EnvIco} onClick={handleIcoClick} />
				</C>
			</Squircle>
		</Container>
	);
};

//STYLED COMPONENTS
const Container = styled.div`
	text-align: center;
`;

const Squircle = styled.div`
	width: 15rem;
	height: 4.6rem;
	background-color: var(--pink);
	border-radius: 42px;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const C = styled.span`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Ico = styled.img`
	position: absolute;
	width: 25px;
	height: 25px;
	opacity: 0;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	&:hover {
		transform: scale(1.2);
	}
	${'span:hover + &'} {
		opacity: 1;
	}
	${C}:hover > & {
		opacity: 1;
	}
`;
const Dot = styled.span`
	background-color: var(--dark);
	width: 1.1rem;
	height: 1.1rem;
	border-radius: 2rem;
	filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.43));
	z-index: 4;
	transition: all 0.15s ease-in-out;
	opacity: 1;
	&:hover {
		transform: translateY(30px);
		opacity: 0;
	}
	${C}:hover > & {
		transform: translateY(30px);
		opacity: 0;
	}
`;
