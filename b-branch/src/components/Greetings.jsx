import React from "react";
import propTypes from "prop-types";

function Greetings(props) {
  return (
    <div>
      <h1>
        Good {props.timeOfDay}, {props.name}
      </h1>
    </div>
  );
}

Greetings.propTypes = {
  timeOfDay: propTypes.string,
  name: propTypes.string,
};

Greetings.defaultProps = {
  timeOfDay: "Morning",
  name: "User",
};

export default Greetings;
