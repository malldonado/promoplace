import React from 'react';
import Navbar from './components/navbar/navbar';
import BannerIndex from './components/banners/bannerIndex';
import Categories from './components/categories/categories';
import CaseMostViews from './components/showcases/caseMostViews';
import CaseStores from './components/showcases/caseStores';
import Footer from './components/footer/footer';

const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <BannerIndex />
      <Categories />
      <CaseMostViews />
      <CaseStores />
      <Footer />
    </>
  );
}

export default Page;
