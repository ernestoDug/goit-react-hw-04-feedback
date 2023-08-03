import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // console.log(options, "opt")
  return (
    <>
      {options.map((title, id) => (
        <button
          id={id}
          type="button"
          name={title}
          onClick={onLeaveFeedback}
          key={nanoid()}
          className={css.Btn}
        >
          {title}
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
