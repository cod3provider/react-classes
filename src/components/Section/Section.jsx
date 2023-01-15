import PropTypes from 'prop-types';
import s from './Section.module.css';

export const Section = ({ title, children }) => {
  return(
    <section className={title ? s.superSection : s.baseSection}>
      {title && <h2 className={s.titleStyle}>{title}</h2>}
      {children}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired
};
