import PropTypes from 'prop-types';
import s from './Statistics.module.css';
const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomRGB = () => {
  return `rgb(${getRandom(10, 250)}, ${getRandom(10, 250)}, ${getRandom(
    10,
    250,
  )})`;
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(el => (
          <li
            key={el.id}
            className={s.item}
            style={{ backgroundColor: getRandomRGB() }}
          >
            <span className={s.label}>{el.label}</span>
            <span className={s.percentage}>{el.percentage + '%'}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics;
