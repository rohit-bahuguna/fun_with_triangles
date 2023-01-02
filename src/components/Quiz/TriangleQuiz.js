import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../quizData';
const TriangleQuiz = () => {
	const [answer, setAnswer] = useState({});
	const [score, setScore] = useState(0);
	const [showModel, setshowModel] = useState(false);
	const [showCorrectAns, setshowCorrectAns] = useState(false);
	const [disabled, setdisabled] = useState(false);
	console.log(answer);

	const getAnswer = e => {
		let name = e.target.name;
		setAnswer({ ...answer, [name]: e.target.value });
	};

	const checkAnswer = () => {
		setdisabled(true);
		let newScore = 0;
		data.map((value, index) => {
			if (value.rightAns == answer[index]) {
				newScore++;
			}
		});

		setScore(newScore);
		setshowModel(true);
	};
	const resetAll = () => {
		setAnswer({});
		setshowCorrectAns(false);
		setshowModel(false);
		setdisabled(false);
	};

	return (
		<div className="triangleQuiz">
			<h1>Quiz on Triangle</h1>
			<p>for each correct answer you will get 1 point</p>
			{data &&
				data.map((value, index) => {
					return (
						<div>
							<form className="form">
								<label>
									<span>question {index + 1} :</span> {value.ques}
								</label>
								{value.ans.map(val => {
									return (
										<div>
											<input
												type="radio"
												id={index}
												name={index}
												value={val}
												onChange={e => getAnswer(e)}
												disabled={disabled}
											/>
											<label htmlFor={index}>
												{val}
											</label>
										</div>
									);
								})}
								{showCorrectAns
									? <div>
											Correct Answer : {value.rightAns}
										</div>
									: ''}
							</form>
						</div>
					);
				})}
			{showCorrectAns
				? <button onClick={() => resetAll()}>play Again</button>
				: <button onClick={() => checkAnswer()} disabled={showCorrectAns}>
						Submit Quiz
					</button>}
			{showModel
				? <div>
						your score is {score}{' '}
						<Link
							onClick={() => {
								setshowCorrectAns(true);
								setshowModel(false);
							}}>
							show correct answers
						</Link>
					</div>
				: ''}
		</div>
	);
};

export default TriangleQuiz;
