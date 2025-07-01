import React from "react";
import PropTypes from "prop-types";
const Greetings = ({name}) => {
    const hour = new Date().getHours();

    const greeting = 
        hour < 12 ? "Good Morning": hour<18 ? "Good Afternoon" : "Good Evening";
  return (
    <div>
        <h2>{greeting}, {name}!</h2>;
    </div>
  );
};
Greetings.propTypes = {
    name:PropTypes.string.isRequired
}; 
export default Greetings;