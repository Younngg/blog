import { Post } from '@/.contentlayer/generated';
import React from 'react';
import Link from 'next/link';
import { VelogPostType } from '@/types/Velog';

const RecentPost = ({ posts }: { posts: Post[] | VelogPostType[] }) => {
  const instanceOfVelogPost = (object: any): object is VelogPostType => {
    return 'contentSnippet' in object;
  };

  return (
    <ul className='w-full'>
      {posts &&
        posts.slice(0, 5).map((post) =>
          instanceOfVelogPost(post) ? (
            <Link
              key={post.guid}
              href={`study/${
                post.link.split('https://velog.io/@younngg1012/')[1]
              }`}
            >
              <li className='w-full py-3 border-b border-gray-900'>
                <div className='flex items-center justify-between sm:mb-2'>
                  <div className='w-2/3 sm:text-lg font-bold truncate'>
                    {post.title}
                  </div>
                  <span className='text-xs'>{post.isoDate.slice(0, 10)}</span>
                </div>
                <div className='hidden w-5/6 sm:block sm:text-sm sm:truncate'>
                  {post.contentSnippet}
                </div>
              </li>
            </Link>
          ) : (
            <Link key={post._id} href={`/daily/${post._raw.flattenedPath}`}>
              <li className='w-full py-3 border-b border-gray-900'>
                <div className='flex items-center justify-between'>
                  <div className='w-2/3 text-lg font-bold truncate'>
                    {post.title}
                  </div>
                  <span className='text-xs'>{post.date}</span>
                </div>
                <div className='text-sm truncate'>{post.description}</div>
              </li>
            </Link>
          )
        )}
    </ul>
  );
};

export default RecentPost;
