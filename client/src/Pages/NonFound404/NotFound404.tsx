import React from 'react';
import { motion } from 'framer-motion';

export const NotFound404: React.FC<any> = ({ transition }) => {
  return <motion.div {...transition}>404</motion.div>;
};
