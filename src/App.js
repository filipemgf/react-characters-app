import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './App.css';
import { Link, NavLink, Navigate, Route, Routes } from 'react-router-dom';

function App() {
	let [characterList, setCharacterList] = useState(null);

	useEffect(() => {
		async function getCharacters() {
			const response = await axios.get(
				'https://ih-crud-api.herokuapp.com/characters'
			);
			console.log('character list: ', response.data[0]);

			setCharacterList(response.data);
		}

		getCharacters();
	}, []);

	async function deleteCharacter(id) {
		await axios.delete(`https://ih-crud-api.herokuapp.com/characters/${id}`);
		console.log('updated char list: ', characterList);
	}

	return (
		<div className="App">
			<Link to="/">Home</Link> {/* links to a route */}
			<NavLink to="/">Home</NavLink>{' '}
			{/* Also a Link but sets an active class I can use to style the CURRENT page in my nav */}
			<Routes>
				<Route path="/" element={<p>This is Home</p>} /> {/* sets up route */}
				<Route path="*" element={<div>404 Page not Found!</div>} />{' '}
				{/* Catch all. * is ALL UNDEFINED ROUTES */}
			</Routes>
			{characterList === null ? (
				<h1>Loading...</h1>
			) : (
				<h1>{characterList.length} characters in our database</h1>
			)}
			<section className="charactersDisplay">
				{characterList &&
					characterList.slice(0, 10).map((character, index) => {
						return (
							<div
								style={{ margin: '2rem' }}
								key={'character card - ' + index}
								className="character"
							>
								<div>Name: {character.name}</div>
								<div>Weapon: {character.weapon}</div>

								<button
									onClick={() => {
										deleteCharacter(character.id);
									}}
								>
									Delete
								</button>
							</div>
						);
					})}
			</section>
		</div>
	);
}

export default App;
