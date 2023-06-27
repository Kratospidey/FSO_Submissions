    import React from "react";
    import Parts from "./Parts";

    function Content({ part1, exercises1, part2, exercises2, part3, exercises3 }) {
        return (
            <>
                <Parts part={part1} exercise={exercises1}></Parts>
                <Parts part={part2} exercise={exercises2}></Parts>
                <Parts part={part3} exercise={exercises3}></Parts>
            </>
        );
    }

    export default Content;
