import PropTypes from 'prop-types';
import { StatTitle, StatList, StatItem, StatData } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatTitle>Statistics</StatTitle>

      <StatList>
        <StatItem>
          <StatData>Good: {good}</StatData>
        </StatItem>
        <StatItem>
          <StatData>Neutral: {neutral}</StatData>
        </StatItem>
        <StatItem>
          <StatData>Bad: {bad}</StatData>
        </StatItem>
        <StatItem>
          <StatData>Total: {total}</StatData>
        </StatItem>
        <StatItem>
          <StatData>
            Positive feedback: {total ? positivePercentage : 0}%
          </StatData>
        </StatItem>
      </StatList>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
