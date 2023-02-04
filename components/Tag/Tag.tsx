import React from 'react';

const Tag = ({ tags }: { tags: string[] }) => {
  return (
    <ul className='flex gap-1 mb-2'>
      {tags.map((tag) => (
        <li
          key={tag}
          className='list-none rounded-2xl text-xs py-1 px-2 text-[#68b75e] bg-gray-100'
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default Tag;
