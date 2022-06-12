import { AuthenticationForm, HeaderAction } from '../../Components/index';
import { Button, Container, Group, Modal, Text } from '@mantine/core';
import React, { useEffect } from 'react';

import { AddLegacy } from './AddLegacy';
import { Hero } from '../Landing/Hero';
import { LegacyTable } from './LegacyTable';
import { RootState } from '../../Redux/store';
import { headerData } from '../../Components/HeaderAction/header-data';
import { motion } from 'framer-motion';
import { usePatchLegacyMutation } from '../../Redux/API/legacySlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';

interface IUser {
  id: string;
  firstName: string;
  middleName: string | null;
  lastName: string;
  email: string;
  phone: string;
}

export const Home: React.FC<any> = ({ transition }) => {
  const [opened, setOpened] = useState(false);
  const currentUser: IUser | null = useSelector(
    (state: RootState) => state.user
  );
  const [addLegacy] = usePatchLegacyMutation();

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
