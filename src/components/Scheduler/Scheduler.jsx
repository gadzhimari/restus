import React, { PureComponent } from 'react';
import Type from 'prop-types';
import classNames from 'classnames/bind';
import { addMonths, eachDay, format, parse, startOfToday, isToday, isEqual } from 'date-fns';
import { Card } from '..';
import styles from './Scheduler.module.scss';

const cn = classNames.bind(styles);

class Scheduler extends PureComponent {
  static propTypes = {
    dateFormat: Type.string,
    tables: Type.arrayOf(
      Type.shape({
        id: Type.number,
        numOfSeats: Type.number,
        type: Type.string,
      }),
    ).isRequired,
    events: Type.arrayOf(
      Type.shape({
        id: Type.number,
        booked: Type.arrayOf(Type.number),
        table: Type.number,
        type: Type.string,
      }),
    ).isRequired,
  };

  static defaultProps = {
    dateFormat: 'MMMM, DD',
  };

  constructor(props) {
    super(props);

    this.days = this.getDaysFromNow();
  }

  getDaysFromNow = () => {
    const startDate = startOfToday();
    const endDate = addMonths(startDate, 1);
    const days = eachDay(startDate, endDate);

    return days.map(day => parse(day).getTime());
  };

  getBookedTimeSlots = (events, timestamp, tableId) => {
    return events.reduce((bookedTimeSlots, event) => {
      return event.table === tableId && isEqual(event.timestamp, timestamp)
        ? event.booked
        : bookedTimeSlots;
    }, []);
  };

  renderDays() {
    const { dateFormat } = this.props;

    return this.days.map(day => {
      const formattedDay = format(day, dateFormat);

      return (
        <th key={day}>
          <div
            className={cn({
              day: true,
              today: isToday(day),
            })}
          >
            {formattedDay}
          </div>
        </th>
      );
    });
  }

  renderEvents() {
    const { tables, events } = this.props;

    return tables.map(table => (
      <tr key={table.id} className={styles.row}>
        <td className={styles.stickyCol}>
          <div className={styles.tableContainer}>
            <div className={styles.tableId}>{table.id}</div>
            <div className={styles.tableTitle}>
              <div className={styles.tableTitleOuter}>
                <div className={styles.tableTitleInner}>
                  {`${table.numOfSeats} seats, ${table.type}`}
                </div>
              </div>
            </div>
          </div>
        </td>

        {this.days.map(day => {
          const bookedTimeSlots = this.getBookedTimeSlots(events, day, table.id);

          return (
            <td className={styles.col} key={day}>
              <Card timeStart={11} bookedTimeSlots={bookedTimeSlots} />
            </td>
          );
        })}
      </tr>
    ));
  }

  render() {
    return (
      <div className={styles.scheduler}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th />
              {this.renderDays()}
            </tr>
          </thead>
          <tbody className={styles.tableWrapper}>{this.renderEvents()}</tbody>
        </table>
      </div>
    );
  }
}

export default Scheduler;
