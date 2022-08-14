import {Auth, ContactPage, Home, Landing, NotFound404} from '../../Pages';
import { Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import React from 'react';

export const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  const transition = {
    initial: { x: 0, opacity: 0 },
    animate: { width: '100%', opacity: 1, transition: { duration: 1 } },
    exit: { x: window.innerWidth, transition: { duration: 0.2 }, opacity: 0 },
  };

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home transition={transition} />} />
        <Route path="/auth" element={<Auth transition={transition} />} />
        <Route path="/landing" element={<Landing transition={transition} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound404 transition={transition} />} />

      </Routes>
    </AnimatePresence>
  );
};
