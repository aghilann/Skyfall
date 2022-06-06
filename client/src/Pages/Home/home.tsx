import { AuthenticationForm, HeaderAction } from '../../Components/index';
import { Button, Container, Group, Modal, Text } from '@mantine/core';

import { AddLegacy } from './AddLegacy';
import { Hero } from '../Landing/Hero';
import { LegacyTable } from './LegacyTable';
import React from 'react';
import { headerData } from '../../Components/HeaderAction/header-data';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const Home: React.FC<any> = ({ transition }) => {
  const [opened, setOpened] = useState(false);
  return (
    <motion.div {...transition}>
      <Container>
        <HeaderAction {...headerData} />
        <Hero />
        <LegacyTable />
        {/* <>
          <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Add a Legacy"
          >
            <AddLegacy />
          </Modal>
          <Group position="center">
            <Button onClick={() => setOpened(true)}>Open Modal</Button>
          </Group>
        </> */}
      </Container>
    </motion.div>
  );
};
