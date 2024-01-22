import clsx from "clsx";
import css from "./Feedback.module.css";

export const Feedback = ({ values, totalFeedback, positive }) => {
  let positiveColor =
    positive >= 70 ? css.good : positive > 40 ? css.neutral : css.bad;

  return (
    <div>
      <p>Good: {values.good}</p>
      <p>Neutral: {values.neutral}</p>
      <p>Bad: {values.bad}</p>
      <h4>Total: {totalFeedback}</h4>
      <h4 className={clsx(positiveColor)}>Positive: {positive}%</h4>
    </div>
  );
};
