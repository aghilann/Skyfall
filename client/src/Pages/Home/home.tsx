import { AuthenticationForm, HeaderAction } from '../../Components/index';
import { Button, Container, Group, Modal, Text } from '@mantine/core';

import { AddLegacy } from './AddLegacy';
import { Hero } from '../Landing/Hero';
import { LegacyTable } from './LegacyTable';
import React from 'react';
import { RootState } from '../../Redux/store';
import { headerData } from '../../Components/HeaderAction/header-data';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const Home: React.FC<any> = ({ transition }) => {
  const [opened, setOpened] = useState(false);
  const currentUser = useSelector((state: RootState) => state.user);
  return (
    <motion.div {...transition}>
      <Container>
        <HeaderAction {...headerData} />
        <Hero />
        <LegacyTable />
      </Container>
    </motion.div>
  );
};
