// import PropTypes from 'prop-types';
import { useContext } from 'react';
import css from './Notification.module.css';

import { Context } from 'components/App';



export default function Notification() {
  const context = useContext(Context);

  return <p className={css.massage}> {context.massage} </p>;
}

// // прототайпи
// Notification.propTypes = {
//   massage: PropTypes.string,
// };
