import React from 'react';
import { Card, Icon } from 'antd';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';

const NumberCard = ({ color, number, type }) => {
  return (
    <Card hoverable>
      <div className="dashboardCard">
        <div className="icon">
          <Icon type={type} style={{ color: color }} />
        </div>
        <div className="count">
          <CountUp end={number} />
        </div>
      </div>
    </Card>
  );
}

NumberCard.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
  number: PropTypes.string,
}

export default NumberCard;