import React from "react";
import StatisticLine from "./StatisticLine";

function Statistics({ stats }) {
	const total = stats.good + stats.neutral + stats.bad;

	if (total !== 0) {
		return (
			<>
				<table>
					<tbody>
						<StatisticLine text={"Good"} value={stats.good} />
						<StatisticLine text={"Neutral"} value={stats.neutral} />
						<StatisticLine text={"Bad"} value={stats.bad} />
						<StatisticLine text={"All"} value={total} />
						<StatisticLine
							text={"Average"}
							value={(stats.good - stats.bad) / total}
						/>
						<StatisticLine
							text={"Positive"}
							value={`${+(stats.good / total) * 100}%`}
						/>
					</tbody>
				</table>
			</>
		);
	}
	return "No Feedback given :(";
}

export default Statistics;
