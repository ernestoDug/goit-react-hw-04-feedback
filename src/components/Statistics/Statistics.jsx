// import PropTypes from 'prop-types';
import { useContext } from 'react';
import css from './Statistics.module.css';

import { Context } from 'components/App';

const Statistics = () => {
  const context = useContext(Context);

  return (
    <ul className={css.listSt}>
      <li className={css.item}>Добре {context.feedBack.good}</li>
      <li className={css.item}>Середнє {context.feedBack.neutral} </li>
      <li className={css.item}>Погано {context.feedBack.bad} </li>
      <li className={css.itemTotal}> Всього {context.total} </li>
      {context.feedBack.good >= 1 && (
        <li className={css.itemPers}>
          {' '}
          Доля гарних відгуків {context.positivePercentage}%{' '}
        </li>
      )}
    </ul>
  );
};

// прототайпи
// Statistics.propTypes = {
//   feedBack: PropTypes.objectOf(PropTypes.string),
//   total: PropTypes.number,
//   positivePercentage: PropTypes.number,
// };

export default Statistics;
