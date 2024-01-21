export const Feedback = ({ values, totalFeedback, positive }) => {
  return (
    <div>
      <p>Good: {values.good}</p>
      <p>Neutral: {values.neutral}</p>
      <p>Bad: {values.bad}</p>
      <h4>Total: {totalFeedback}</h4>
      <h4 id="positive">Positive: {positive}%</h4>
    </div>
  );
};
