const courseImg1 = 'images/course-01.jpg';
const courseImg2 = 'images/course-02.jpg';
const courseImg3 = 'images/course-03.jpg';
const courseImg4 = 'images/course-04.jpg';
const courseImg5 = 'images/course-05.jpg';
const courseImg6 = 'images/course-06.jpg';

export const dataCourses = {
  heading: {
    subtitle: 'COURSES',
    title: 'Latest Courses',
  },
  dataBreadcrumb: [
    {
      label: 'Home',
      url: '/scholar/',
    },
    {
      label: 'Courses',
      url: '#',
    },
  ],
  filterBtnList: [
    {
      id: 1,
      category: 'Show All',
      btnState: true,
    },
    {
      id: 2,
      category: 'Webdesign',
      btnState: false,
    },
    {
      id: 3,
      category: 'Development',
      btnState: false,
    },
    {
      id: 4,
      category: 'Wordpress',
      btnState: false,
    },
  ],
  cards: [
    {
      id: 1,
      href: '#',
      img: courseImg1,
      category: 'Webdesign',
      price: '160',
      teacher: 'Frank Knight',
      desc: 'Learn Web Design',
      addClass: 'fade-in-card',
    },
    {
      id: 2,
      href: '#',
      img: courseImg2,
      category: 'Development',
      price: '340',
      teacher: 'Darrell Mills',
      desc: 'Web Development Tips',
      addClass: 'fade-in-card',
    },
    {
      id: 3,
      href: '#',
      img: courseImg3,
      category: 'Wordpress',
      price: '640',
      teacher: 'Sadie Norman',
      desc: 'Latest Web Trends',
      addClass: 'fade-in-card',
    },
    {
      id: 4,
      href: '#',
      img: courseImg4,
      category: 'Development',
      price: '450',
      teacher: 'Frances Abbott',
      desc: 'Online Learning Steps',
      addClass: 'fade-in-card',
    },
    {
      id: 5,
      href: '#',
      img: courseImg5,
      category: 'Webdesign',
      price: '240',
      teacher: 'Billy Jackson',
      desc: 'Full Stack Developer',
      addClass: 'fade-in-card',
    },
    {
      id: 6,
      href: '#',
      img: courseImg6,
      category: 'Wordpress',
      price: '320',
      teacher: 'Donald Saunders',
      desc: 'Be a WordPress Master',
      addClass: 'fade-in-card',
    },
  ],
};
