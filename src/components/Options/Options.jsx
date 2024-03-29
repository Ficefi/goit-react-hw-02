import clsx from "clsx";
import css from "./Options.module.css";

export const Options = ({
  updateGood,
  updateNeutral,
  updateBad,
  reset,
  total,
}) => {
  return (
    <div className={clsx(css.button_container)}>
      <button onClick={updateGood} className={clsx(css.button, css.good)}>
        Good
      </button>
      <button onClick={updateNeutral} className={clsx(css.button, css.neutral)}>
        Neutral
      </button>
      <button onClick={updateBad} className={clsx(css.button, css.bad)}>
        Bad
      </button>
      {total > 0 && (
        <button onClick={reset} className={clsx(css.button, css.reset)}>
          Reset
        </button>
      )}
    </div>
  );
};
