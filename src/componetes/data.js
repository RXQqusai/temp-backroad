import tour1 from '../images/tour-1.jpeg';
import tour2 from '../images/tour-2.jpeg';
import tour3 from '../images/tour-3.jpeg';
import tour4 from '../images/tour-4.jpeg';

export const pageLinks = [
  {id: 1, href:'#home', text:'home' },
  {id: 2, href:'#about', text:'about' },
  {id: 3, href:'#services', text:'services' },
  {id: 4, href:'#tours', text:'tours' },
  
];

export const socialLinks = [
  {id: 1, href:'https://www.twitter.com', icon:'fab fa-facebook'},
  {id: 2, href:'https://www.twitter.com', icon:'fab fa-twitter'},
  {id: 3, href:'https://www.twitter.com', icon:'fab fa-squarespace'},
];

export const tours = [{
  id:1,
  image:tour1,
  date:'august 26th, 2020',
  title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
  info:'Tibet Adventure',
  location:'china',
  duration:6,
  cost:2100,
},
{
  id:2,
  image:tour2,
  date:'october 1th, 2020',
  title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
  info:'best of java',
  location:'indonesia',
  duration:11,
  cost:1400,
},
{
  id:3,
  image:tour3,
  date:'september 15th, 2020',
  title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
  info:'explore hong kong',
  location:'hong kong',
  duration:8,
  cost:5000,
},
{
  id:4,
  image:tour4,
  date:'december 5th, 2019',
  title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
  info:'Kenya highlights',
  location:'kenya',
  duration:20,
  cost:3300,
},
];