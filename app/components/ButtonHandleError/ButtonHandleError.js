import './ButtonHandleError.scss';
import PropTypes from 'prop-types';

const ButtonHandleError = ({ onClick }) => (
  <div className="ButtonHandleError">
    <button onClick={onClick} type="button">
      {' '}
      Try Again
{' '}
    </button>
  </div>
);

ButtonHandleError.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonHandleError;
