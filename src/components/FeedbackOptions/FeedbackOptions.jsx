import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // console.log(options, "opt")
  return (
    <>
      {options.map(option => (
        <button
          type="button"
          name={option}
          onClick={onLeaveFeedback}
          key={nanoid()}
          className={css.Btn}
        >
          {option}
        </button>
      ))}
    </>
  );
};

// проптайпи
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
