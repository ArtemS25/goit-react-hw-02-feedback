import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Message } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <Fragment>
      <Message>{message}</Message>
    </Fragment>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
