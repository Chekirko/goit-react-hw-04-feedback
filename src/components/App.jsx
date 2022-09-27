// import PropTypes from 'prop-types';
import { useState } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';

export const App = function () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = evt => {
    const name = evt.currentTarget.name;
    switch (name) {
      case 'good':
        setGood(good + 1);
        console.log(good);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        console.log(neutral);
        break;

      case 'bad':
        setBad(bad + 1);
        console.log(bad);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions onLeaveFeedback={handleIncrement} />

      {!countTotalFeedback() ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      )}
    </Section>
  );
};
