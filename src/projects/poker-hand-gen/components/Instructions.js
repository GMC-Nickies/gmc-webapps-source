import React from "react";
import { connect } from "react-redux";
import { expandInstructions, collapseInstructions } from "../actions/settings";

const Instructions = (props) => {
  const { instructionsExpanded, expandInstructions, collapseInstructions } =
    props;

    console.log(props);
  if (instructionsExpanded) {
    return (
      <div>
        <h3>Explanation</h3>
        <p>Welcome to the poker hand generator.</p>
        <p>
          A few of my friends and I run a poker night every week or so. It made
          me wonder how often I actually get a good hand...
        </p>
        <p>
          So, I made this generator to let you quickly simulate Texas Hold'Em
          hands and observe the probabilities in action.
        </p>
        <button onClick={collapseInstructions}>Show less</button>
      </div>
    );
  }

  return (
    <div>
      <h3>Explanation</h3>
      <p>Welcome to the poker hand generator.</p>
      <button onClick={expandInstructions}>Read more</button>
    </div>
  );
};

export default connect(
  (state) => ({ instructionsExpanded: state.settings.instructionsExpanded }),
  { expandInstructions, collapseInstructions }
)(Instructions);
