import React from "react";

function Total({ course }) {
  let total = 0;
  return (
    <>
      <p>
        {course.parts.forEach((part) => {
          total += part.exercises;
        })}
        Number of exercises{" "}
		{total}
      </p>
    </>
  );
}

export default Total;
