import { HeaderAction, headerData } from '../../Components/index';

import { Container } from '@mantine/core';
import { Hero } from './Hero';
import React from 'react';

export const Landing = () => {
  return (
    <Container>
      <HeaderAction {...headerData} />
      <Hero />
    </Container>
  );
};
