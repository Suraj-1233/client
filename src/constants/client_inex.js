import { createCampaign, dashboard, logout, money, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },

 {
    name: 'giveVote',
    imgUrl: money,
    link: '/giveVote',
  },

  {
    name: 'table',
    imgUrl: withdraw,
    link: '/table',
    
  },
  {
    name: 'winner',
    imgUrl: profile,
    link: '/winner',
  },
  {
    name: 'liveness',
    imgUrl: payment,
    link: '/liveness',
  },
  
 
];
