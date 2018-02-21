module.exports = [
  {
    id: 0,
    label: 'Time period',
    options: [
      { key: 0, value: 'All time', api: '0' },
      { key: 1, value: 'Last month', api: '1' },
      { key: 2, value: 'Last week', api: '2' },
      { key: 3, value: 'Yesterday', api: '3' },
    ],
  },
  {
    id: 1,
    label: 'Ranked',
    options: [
      { key: 0, value: 'All', api: null },
      { key: 1, value: 'Ranked', api: true },
      { key: 2, value: 'Casual', api: false },
    ],
  },
  {
    id: 2,
    label: 'Team size',
    options: [
      { key: 0, value: 'All', api: null },
      { key: 1, value: '2v2', api: '2' },
      { key: 2, value: '3v3', api: '3' },
    ],
  },
  {
    id: 3,
    label: 'League',
    options: [
      { key: 0, value: 'All', api: null },
      { key: 1, value: 'Bronze', api: '0' },
      { key: 2, value: 'Silver', api: '1' },
      { key: 3, value: 'Gold', api: '2' },
      { key: 4, value: 'Platinum', api: '3' },
      { key: 5, value: 'Diamond', api: '4' },
      { key: 6, value: 'Champion', api: '5' },
      { key: 7, value: 'Grand champion', api: '6' },
    ],
  },
];
