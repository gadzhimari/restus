import React, { PureComponent } from 'react';
import Type from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Card.module.scss';

const cn = classNames.bind(styles);

class Card extends PureComponent {
  static propTypes = {
    timeStart: Type.number.isRequired,
    totalTimeSlotsCount: Type.number,
    bookedTimeSlots: Type.arrayOf(Type.number),
  };

  static defaultProps = {
    bookedTimeSlots: [],
    totalTimeSlotsCount: 12,
  };

  constructor(props) {
    super(props);

    this.timeSlots = this.generateTimeSlots();
  }

  calcBookedPercentage = (currentTimeSlotsCount, totalTimeSlotsCount) => {
    return Math.round((currentTimeSlotsCount / totalTimeSlotsCount) * 100);
  };

  getColorByPercentage = value => {
    if (value > 0 && value < 33) {
      return 'green';
    }
    if (value >= 33 && value < 65) {
      return 'yellow';
    }
    if (value >= 66 && value < 90) {
      return 'orange';
    }
    if (value >= 90 && value <= 100) {
      return 'red';
    }

    return 'white';
  };

  generateTimeSlots() {
    const { timeStart, totalTimeSlotsCount } = this.props;

    return [...Array(totalTimeSlotsCount)].map((timeSlot, idx) => timeStart + idx);
  }

  render() {
    const { bookedTimeSlots, totalTimeSlotsCount } = this.props;
    const bookedPercentage = this.calcBookedPercentage(bookedTimeSlots.length, totalTimeSlotsCount);
    const statusColor = this.getColorByPercentage(bookedPercentage);

    return (
      <div className={styles.card}>
        <div className={styles.header}>
          <span
            className={cn({
              status: true,
              [statusColor]: true,
            })}
          >
            <span className={styles.value}>{bookedPercentage}</span>
            <span className={styles.percent}>%</span>
          </span>
          <span className={styles.more}>...</span>
        </div>
        <div className={styles.body}>
          <div className={styles.timeSlots}>
            {this.timeSlots.map(timeSlot => (
              <span
                key={timeSlot}
                className={cn({
                  timeSlot: true,
                  booked: bookedTimeSlots.includes(timeSlot),
                })}
              >
                {`${timeSlot}:00`}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
