import React from 'react';
import Navbar from './components/navbar/navbar';
import BannerIndex from './components/banners/bannerIndex';
import Categories from './components/categories/categories';
import CaseMostViews from './components/showcases/caseMostViews';
import CasStores from './components/showcases/caseStores';
import Footer from './components/footer/footer';

const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <BannerIndex />
      <Categories />
      <CaseMostViews />
      <CasStores />
      <Footer />
    </>
  );
}

export default Page;
