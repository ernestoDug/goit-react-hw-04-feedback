import PropTypes from 'prop-types';

import css from './Notification.module.css';

export default function Notification({ massage }) {
  return <p className={css.massage}> {massage} </p>;
}

// // прототайпи
Notification.propTypes = {
  massage: PropTypes.string.isRequired,
};
