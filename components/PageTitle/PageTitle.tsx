import React from 'react';

const PageTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className='pb-10'>
      <h2 className='text-4xl font-bold text-neutral-900'>{title}</h2>
      <p className='mt-5 text-neutral-700'>{description}</p>
    </div>
  );
};

export default PageTitle;
