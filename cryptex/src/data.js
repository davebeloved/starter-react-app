// import images
import BitconImg from './assets/img/bitcon.png';
import EthereumImg from './assets/img/ethereum.png';
import LitecoinImg from './assets/img/litecoin.png';

export const navData = [
  {
    id: 1,
    name: 'Home',
    to: '/',
  },
  {
    id: 2,
    name: 'Transaction',
    to: '/transaction',
  },
  {
    id: 3,
    name: 'About',
    to: '/about',
  },
  {
    id: 4,
    name: 'Contact',
    to: '/contact',
  },
];

export const currency = [
  {
    id: 1,
    image: BitconImg,
    name: 'Bitcoin',
    abbr: 'BTC',
    description:
      'Digital currency in which a record of transactions is maintained.',
  },
  {
    id: 2,
    image: EthereumImg,
    name: 'Ethereum',
    abbr: 'ETH',
    description:
      'Blockchain technology to create and run decentralized digital applications.',
  },
  {
    id: 3,
    image: LitecoinImg,
    name: 'Litecoin',
    abbr: 'LTC',
    description:
      'Cryptocurrency that enables instant payments to anyone in the world.',
  },
];
