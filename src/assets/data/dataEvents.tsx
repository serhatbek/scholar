const event1 = 'images/event-01.jpg';
const event2 = 'images/event-02.jpg';
const event3 = 'images/event-03.jpg';

export const dataEvents = {
  heading: {
    subtitle: 'SCHEDULE',
    title: 'Upcoming Events',
  },
  dataBreadcrumb: [
    {
      label: 'Home',
      url: '/scholar/',
    },
    {
      label: 'Events',
      url: '#',
    },
  ],
  dataSchedule: {
    subtitle: 'SCHEDULE',
    title: 'Upcoming Events',
    cards: [
      {
        img: event1,
        category: 'WEB DESIGN',
        title: 'UI Best Practices',
        details: [
          {
            title: 'Date:',
            desc: '16 Feb 2036',
          },
          {
            title: 'Duration:',
            desc: '22 Hours',
          },
          {
            title: 'Price:',
            desc: '$120',
          },
        ],
        btn: {
          url: '/scholar/',
        },
      },
      {
        img: event2,
        category: 'FRONT END',
        title: 'New Design Trend',
        details: [
          {
            title: 'Date:',
            desc: '24 Feb 2036',
          },
          {
            title: 'Duration:',
            desc: '30 Hours',
          },
          {
            title: 'Price:',
            desc: '$320',
          },
        ],
        btn: {
          url: '/scholar/',
        },
      },
      {
        img: event3,
        category: 'FULL STACK',
        title: 'Web Programming',
        details: [
          {
            title: 'Date:',
            desc: '12 Mar 2036',
          },
          {
            title: 'Duration:',
            desc: '48 Hours',
          },
          {
            title: 'Price:',
            desc: '$440',
          },
        ],
        btn: {
          url: '/scholar/',
        },
      },
    ],
  },
};
