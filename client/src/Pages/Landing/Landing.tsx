import { HeaderAction, headerData } from '../../Components/index';

import { Container } from '@mantine/core';
import { Hero } from './Hero';
import React from 'react';
import { createStyles } from '@mantine/core';
import { motion } from 'framer-motion';

export const Landing: React.FC<any> = ({ transition }) => {
  return (
    <motion.div {...transition}>
      <HeaderAction {...headerData} />
      <Hero />
    </motion.div>
  );
};
