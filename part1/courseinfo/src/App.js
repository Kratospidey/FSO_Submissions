import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

const App = () => {
	const parts = [
		{ part: "Fundamentals of React", exercise: 10 },
		{ part: "Using props to pass data", exercise: 7 },
		{ part: "State of a component", exercise: 14 },
	];

	return (
		<div>
			<Header course={course}></Header>
			<Content part={part1} exercise={exercises1}></Content>
			<Content part={part2} exercise={exercises2}></Content>
			<Content part={part3} exercise={exercises3}></Content>
			<Content></Content>
			<Total total={exercises1 + exercises2 + exercises3}></Total>
		</div>
	);
};

export default App;
