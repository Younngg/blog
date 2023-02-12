import React from 'react';
import dynamic from 'next/dynamic';

const NoSsrEditor = dynamic(() => import('../../components/Editor/Editor'), {
  ssr: false,
});

const DailyWrite = () => {
  return (
    <div>
      <NoSsrEditor />
    </div>
  );
};

export default DailyWrite;
