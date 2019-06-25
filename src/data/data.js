export const events = [
  {
    id: 0,
    booked: [13, 16, 17, 19],
    table: 1,
    type: 'VIP',
    timestamp: new Date(2019, 5, 26).getTime(),
  },
  {
    id: 1,
    booked: [13, 16, 17, 19, 20, 21],
    table: 2,
    type: 'standart',
    timestamp: new Date(2019, 5, 30).getTime(),
  },
  {
    id: 2,
    booked: [13, 14, 16, 17, 19, 20, 21, 22],
    table: 3,
    type: 'standart',
    timestamp: new Date(2019, 5, 29).getTime(),
  },
  {
    id: 3,
    booked: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    table: 3,
    type: 'standart',
    timestamp: new Date(2019, 5, 27).getTime(),
  },
  {
    id: 4,
    booked: [12, 13],
    table: 1,
    type: 'standart',
    timestamp: new Date(2019, 6, 2).getTime(),
  },
];

export const tables = [
  {
    id: 1,
    numOfSeats: 2,
    type: 'VIP',
  },
  {
    id: 2,
    numOfSeats: 3,
    type: 'standart',
  },
  {
    id: 3,
    numOfSeats: 2,
    type: 'VIP',
  },
];
