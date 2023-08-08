import PropTypes from 'prop-types';
// npm i prop-types

import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.wrap}>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

// прототайпи

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  // children: PropTypes.element,
  // children: PropTypes.elementType,
};

export default Section;
