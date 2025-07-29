import React from 'react';
import SearchBar from '../components/SearchBar';
import HeroSlider from '../components/HeroSlider';
import CategoryNav from '../components/CategoryNav';

const HomePage = () => {
  return (
    <div>
      <SearchBar />
      <HeroSlider />
      <CategoryNav />
    </div>
  );
};

export default HomePage;
