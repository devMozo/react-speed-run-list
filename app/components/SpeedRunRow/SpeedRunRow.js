import PropTypes from 'prop-types';
import Link from 'next/link';
import './SpeedRunRow.scss';

const SpeedRunRow = ({ style, data }) => (
  <li className="SpeedRunRow" style={style}>
    <picture className="SpeedRunRow__logo">
      <img src={data.assets['cover-medium'].uri} alt={data.names.international} />
    </picture>
    <section className="SpeedRunRow__description">
      <h2>{data.names.international}</h2>
      <h4>
        Released:
        {'  '}
        {data.released}
      </h4>
    </section>
    <Link href={`/View/${data.id}`} prefetch>
      <button className="SpeedRunRow__link" type="button">
        Go!
      </button>
    </Link>
  </li>
);

SpeedRunRow.propTypes = {
  style: PropTypes.object,
  data: PropTypes.object,
};

export default SpeedRunRow;
