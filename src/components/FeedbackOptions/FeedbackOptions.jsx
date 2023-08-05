// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useContext } from 'react';
import css from './FeedbackOptions.module.css';

import { Context } from 'components/App';

const FeedbackOptions = () => {
  const context = useContext(Context);

  return (
    <>
      {context.options.map(title => (
        <button
          type="button"
          name={title}
          onClick={context.onLeaveFeedback}
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
// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string),
//   onLeaveFeedback: PropTypes.func,
// };

export default FeedbackOptions;
