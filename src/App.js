import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AreaOfTriangle from './components/Area_of_triangle/AreaOfTriangle';
import Header from './components/Header';
import Hypotonuse from './components/Hypotonuse/Hypotonuse';
import TriangleQuiz from './components/Quiz/TriangleQuiz';
import CorrectAns from './components/Quiz/CorrectAns';
export default function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<TriangleQuiz />} />
					<Route path="/triangle" element={<TriangleQuiz />} />
					<Route path="/areaoftriangle" element={<AreaOfTriangle />} />
					<Route path="/hypotonuse" element={<Hypotonuse />} />
					<Route path="/correctans/:answer" element={<CorrectAns />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

{
	/* <TriangleQuiz />
			<AreaOfTriangle />
			<Hypotonuse /> */
}
