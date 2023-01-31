import s from './statistics.module.scss';
import PropTypes from 'prop-types';

const Statistics = ({title, stats }) => {
  return (
    <div className={s.wrapper}>
      <section className={s.statistics}>
        {title &&<h2 className={s.title}>{title}</h2>}
        <ul className={s.statList}>
          {stats.map(stats => (
            <li key={stats.id} className={s.item}>
              <span className={s.label}>{stats.label}</span>
              <span className={s.percentage}>{stats.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Statistics;

Statistics.defaultProps = {
  stats: [],
};


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
}; 