import { AuthenticationForm, HeaderAction } from '../../Components/index';
import { Button, Container } from '@mantine/core';

import { Hero } from '../Landing/Hero';
import React from 'react';
import { headerData } from '../../Components/HeaderAction/header-data';

export const Home: React.FC = () => {
  return (
    <Container>
      {/* <HeaderAction {...headerData} />I am the home page
      <AuthenticationForm /> */}
      <Hero />
    </Container>
  );
};
