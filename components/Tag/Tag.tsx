import React from 'react';

const Tag = ({ tags, size }: { tags: string[]; size?: 'large' | 'medium' }) => {
  return (
    <ul className={`flex ${size === 'large' ? 'gap-5' : 'gap-1'} mb-2`}>
      {tags.map((tag) => (
        <li
          key={tag}
          className={`list-none ${
            size === 'large'
              ? 'text-lg py-2 px-4 rounded-3xl'
              : 'text-xs py-1 px-2 rounded-2xl'
          } text-[#68b75e] bg-gray-100`}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default Tag;
