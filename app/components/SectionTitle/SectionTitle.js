import './SectionTitle.scss';
import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => (
  <div className="SectionTitle">
    <h2>{title}</h2>
  </div>
);

SectionTitle.propTypes = {
  title: PropTypes.string,
};

export default SectionTitle;
