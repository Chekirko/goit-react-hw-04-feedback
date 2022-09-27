import PropTypes from 'prop-types';
import { Buttons, ButtonsItem, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <Buttons>
      <ButtonsItem>
        <Button type="button" name="good" onClick={onLeaveFeedback}>
          Good
        </Button>
      </ButtonsItem>
      <ButtonsItem>
        <Button type="button" name="neutral" onClick={onLeaveFeedback}>
          Neutral
        </Button>
      </ButtonsItem>
      <ButtonsItem>
        <Button type="button" name="bad" onClick={onLeaveFeedback}>
          Bad
        </Button>
      </ButtonsItem>
    </Buttons>
  );
};

Notification.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
