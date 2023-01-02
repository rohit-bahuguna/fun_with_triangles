import React from 'react';
import { useParams } from 'react-router';

function CorrectAns() {
	const answer = useParams();
	console.log(answer);
	return <div>CorrectAns</div>;
}

export default CorrectAns;
