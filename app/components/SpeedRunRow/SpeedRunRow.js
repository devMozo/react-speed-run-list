import PropTypes from 'prop-types';
import Link from 'next/link';
import ViewURL from 'app/constants/urls';
import './SpeedRunRow.scss';

const SpeedRunRow = ({
 style, data: {
 assets, names, released, id,
},
}) => (
  <li className="SpeedRunRow" style={style}>
    <picture className="SpeedRunRow__logo">
      <img src={assets['cover-medium'].uri} alt={names.international} />
    </picture>
    <section className="SpeedRunRow__description">
      <h2>{names.international}</h2>
      <h4>
        Released:
        {'  '}
        {released}
      </h4>
    </section>
    <Link className="SpeedRunRow__link" href={`${ViewURL}/${id}`} prefetch>
      <button type="button">Go!</button>
    </Link>
  </li>
);

SpeedRunRow.propTypes = {
  style: PropTypes.object,
  data: PropTypes.object,
};

export default SpeedRunRow;
