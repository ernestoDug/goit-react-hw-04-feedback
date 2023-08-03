// import PropTypes from 'prop-types';

import css from './Statistics.module.css';

// компонент статистики

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.listSt}>
      <li className={css.item}>Добре {good}</li>
      <li className={css.item}>Середнє {neutral} </li>
      <li className={css.item}>Погано {bad} </li>
      <li className={css.itemTotal}> Всього {total} </li>
      {good >= 1 && (
        <li className={css.itemPers}>
          {' '}
          Доля гарних відгуків {positivePercentage}%{' '}
        </li>
      )}
    </ul>
  );
};

// прототайпи
// Statistics.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.string.isRequired,
//   positivePercentage: PropTypes.number.isRequired,
// };

export default Statistics;
