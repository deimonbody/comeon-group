import React from 'react';
import { BounceLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <BounceLoader
      size={100}
      cssOverride={{
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
      }}
    />
  );
};
