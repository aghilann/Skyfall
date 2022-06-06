import {
  AuthenticationForm,
  HeaderAction,
  headerData,
} from '../../Components/index';

import { Container } from '@mantine/core';
import React from 'react';
import { motion } from 'framer-motion';

export const Auth: React.FC<any> = ({ transition }) => {
  return (
    <motion.div {...transition}>
      <HeaderAction {...headerData} />
      <Container>
        <AuthenticationForm />
      </Container>
    </motion.div>
  );
};
