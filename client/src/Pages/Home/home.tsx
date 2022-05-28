import { HeaderAction } from '../../Components/Header';
import React from 'react';
import { headerData } from '../../Data/header-data';

export const Home: React.FC = () => {
  return (
    <>
      <HeaderAction {...headerData} />
    </>
  );
};
