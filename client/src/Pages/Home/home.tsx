import { AuthenticationForm, HeaderAction } from '../../Components/index';

import React from 'react';
import { headerData } from '../../Components/HeaderAction/header-data';

export const Home: React.FC = () => {
  return (
    <>
      <HeaderAction {...headerData} />
      <AuthenticationForm />
    </>
  );
};
