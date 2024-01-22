import "./App.css";
import { Description } from "./Description/Description.jsx";
import { Options } from "./Options/Options.jsx";
import { Feedback } from "./Feedback/Feedback";
import { useEffect, useState } from "react";

const state = {
  good: 0,
  neutral: 0,
  bad: 0,
};
const key = "saved-state";

export const App = () => {
  const [value, setValue] = useState(() => {
    const savedState = window.localStorage.getItem(key);

    if (savedState !== null) {
      return JSON.parse(savedState);
    }
    return state;
  });

  const updateGood = () => {
    setValue({
      ...value,
      good: value.good + 1,
    });
  };

  const updateNeutral = () => {
    setValue({
      ...value,
      neutral: value.neutral + 1,
    });
  };

  const updateBad = () => {
    setValue({
      ...value,
      bad: value.bad + 1,
    });
  };

  const reset = () => {
    setValue({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  const totalFeedback = value.good + value.neutral + value.bad;
  const coefficient = Math.round(
    ((value.good + value.neutral) / totalFeedback) * 100
  );

  return (
    <div className="main">
      <Description />
      <Options
        updateGood={updateGood}
        updateNeutral={updateNeutral}
        updateBad={updateBad}
        reset={reset}
        total={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          values={value}
          totalFeedback={totalFeedback}
          positive={coefficient}
        />
      ) : (
        <p>No Feedback yet</p>
      )}
    </div>
  );
};
