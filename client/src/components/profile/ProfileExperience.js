import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const _ProfileExperience = ({
  experience: { company, title, from, to, description },
}) => (
  <div>
    <h3 className='text-dark'>{company}</h3>
    <p>
      <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
      {!to ? 'now' : <Moment format='YYYY/MM/DD'>${to}</Moment>}
    </p>
    <p>
      <strong>Position: </strong> {title}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

_ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export const ProfileExperience = _ProfileExperience;
