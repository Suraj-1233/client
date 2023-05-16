import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'RegisterCandidates',
    imgUrl: createCampaign,
    link: '/RegisterCandidates',
  },
  {
    name: 'StartVoting',
    imgUrl: payment,
    link: '/StartVoting',
   
  },
  {
    name: 'RemoveCandidates',
    imgUrl: withdraw,
    link: '/RemoveCandidates',
    
  },
  {
    name: 'winner',
    imgUrl: profile,
    link: '/winner',
  },
  {
    name: 'WhiteList',
    imgUrl: logout,
    link: '/WhiteList',
    
  },
];
