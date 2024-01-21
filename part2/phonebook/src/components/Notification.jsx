import React from "react";

const Success = ({ message, messageType }) => {
	const successStyle = {
		color: "green",
		fontSize: 20,
		borderStyle: "solid",
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
	};
	const errorStyle = {
		color: "red",
		fontSize: 20,
		borderStyle: "solid",
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
	};
	if (message === null) {
		return null;
	} else if (messageType == "success") {
		return <div style={successStyle}>{message}</div>;
	} else if (messageType == "error") {
		return <div style={errorStyle}>{message}</div>;
	}
};

export default Success;
