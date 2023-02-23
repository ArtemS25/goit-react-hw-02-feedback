import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Fragment>
      {Object.keys(options).map(key => {
        return (
          <Button type="button" key={key} onClick={onLeaveFeedback}>
            {key}
          </Button>
        );
      })}
    </Fragment>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
