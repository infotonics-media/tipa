import React from 'react';
import Footer from './Footer';
import Nomination from './Nomination';
import '../assets/css/bloginfo.css';
// import { Link } from 'react-router-dom';
import Nav from './Nav';
import BlogCardsRelated from '../components/BlogCardsRelated';

const NominationPage = () => {
  // const [classupdate, setClassupdate] = useState(false);
  return (
    <div>
      <Nav />
      <Nomination title="Award Categories" />
      <BlogCardsRelated/>
      <div style={{ paddingTop: '7rem' }}>
        <Footer />
      </div>
    </div>
  );
};

export default NominationPage;
