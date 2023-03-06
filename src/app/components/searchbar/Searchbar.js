import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../features/categorySlice';

export const Searchbar = () => {
	const [inputValue, setInputValue] = useState('');
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSearchClick = () => {
		if (inputValue) {
			dispatch(setCategory(inputValue));
		}
	};

	return (
		<Container>
			<I
				type='text'
				name='search'
				placeholder='Enter a subreddit (e.g: "quotes")'
				value={inputValue}
				onChange={handleChange}
			/>
			<Ico
				xmlns='http://www.w3.org/2000/svg'
				width='20'
				height='20'
				fill='#252a34'
				viewBox='0 0 16 16'
				onClick={handleSearchClick}
			>
				<path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
			</Ico>
		</Container>
	);
};

const Container = styled.div`
	margin: 2rem auto;
	background: #fff;
	height: 30px;
	width: 2rem;
	border-radius: 30px;
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: 0.7s ease-in-out;
	box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
	&:hover {
		width: 17rem;
	}
	&:focus-within {
		border: 1px solid var(--pink);
	}
`;

const I = styled.input`
	background: transparent;
	border: none;
	outline: none;
	width: 0px;
	font-weight: 500;
	font-size: 16px;
	transition: 0.7s ease-in-out;

	${Container}:hover > & {
		width: 17rem;
	}
`;
const Ico = styled.svg``;
