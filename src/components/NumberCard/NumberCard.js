import React from 'react';
import { Icon, Card } from 'antd';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';
// import Active from '../../styles/images/active.png';
// import Pending from '../../styles/images/pending.png';
// import Complete from '../../styles/images/complete.png';
// import Unassigned from '../../styles/images/notAssigned.png';
// import Leased from '../../styles/images/leased.png';
// import NotLeased from '../../styles/images/notLeased.png';
const styles = {
  iconStyle: {
    height: 54
  }
};
const NumberCard = (props) => {
  const { icon, color, title, number, link } = props;
  return (
    <Card loading={number >= 0 ? false : true} className={"numberCard"} bordered={false} bodyStyle={{ padding: 0 }}>
      {icon ?
        <Icon className={"iconWarp"} style={{ color }} type={icon} />
        : null}
      <div className={"content"}>
        <p className={"title"}>{title || 'No Title'}</p>
        <p className={"number"}>
          <CountUp
            start={0}
            end={number}
            duration={2.75}
            useEasing
            useGrouping
            separator=','
          />
        </p>
      </div>
    </Card>);
};

NumberCard.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  number: PropTypes.number
};

export default NumberCard;