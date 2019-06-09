import PropTypes from 'prop-types';
import './HeaderView.scss';

const HeaderView = ({
 gameName, img, playerName, time, link,
}) => (
  <section className="HeaderView">
    <picture className="HeaderView__logo">
      <img src={img} alt={gameName} />
    </picture>
    <div className="HeaderView__description">
      <h2>{gameName}</h2>
      <p>{`1° Place: ${playerName}`}</p>
      <p>{`Time: ${time}`}</p>
    </div>
    <div className="HeaderView__link">
      <a href={link} rel="noopener noreferrer" target="_blank">
        Go Video
      </a>
    </div>
  </section>
);

HeaderView.propTypes = {
  gameName: PropTypes.string,
  img: PropTypes.string,
  playerName: PropTypes.string,
  time: PropTypes.string,
  link: PropTypes.string,
};

export default HeaderView;
