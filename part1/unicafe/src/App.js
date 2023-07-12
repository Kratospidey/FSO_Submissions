import { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleFeedback = (feedback) => {
		if (feedback === "good") {
			const newGood = good + 1;
			setGood(newGood);
			console.log("set good");
		} else if (feedback === "bad") {
			const newBad = bad + 1;
			setBad(newBad);
			console.log("set bad");
		} else {
			const newNeutral = neutral + 1;
			setNeutral(newNeutral);
			console.log("set neutral");
		}
	};

	return (
		<>
			<h1>Feedback</h1>
			<Button
				eventHandler={() => {
					handleFeedback("good");
				}}
				text={"Good"}
			></Button>
			<Button
				eventHandler={() => {
					handleFeedback("neutral");
				}}
				text={"Neutral"}
			></Button>
			<Button
				eventHandler={() => {
					handleFeedback("bad");
				}}
				text={"Bad"}
			></Button>
			<h1>Statistics</h1>
			<Statistics
				stats={{ good: good, neutral: neutral, bad: bad }}
			></Statistics>
		</>
	);
};

export default App;
