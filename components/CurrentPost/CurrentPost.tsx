import { Post } from '@/.contentlayer/generated';
import { DocumentType } from 'contentlayer/source-files';
import React from 'react';
import Link from 'next/link';

const CurrentPost = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className='w-full text-gray-900'>
      {posts?.slice(0, 5).map((post) => (
        <Link key={post._id} href={`/daily/${post._raw.flattenedPath}`}>
          <li className='w-full py-3 border-b border-gray-900'>
            <div className='flex items-center justify-between'>
              <div className='text-lg font-bold truncate'>{post.title}</div>
              <span className='text-xs'>{post.date}</span>
            </div>
            <div className='text-sm truncate'>{post.description}</div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default CurrentPost;
