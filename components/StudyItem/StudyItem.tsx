import type { VelogPostType } from '@/types/Velog';
import Link from 'next/link';
import React from 'react';

const StudyItem = ({ post }: { post: VelogPostType }) => {
  const postId = post.link.split('https://velog.io/@younngg1012/')[1];

  return (
    <div className='w-full h-80 px-12 py-10 mb-5 border border-gray-200 shadow-md flex flex-col gap-5 hover:-translate-y-2 hover:shadow-lg transition-all'>
      <div className='flex flex-col gap-5'>
        <Link href={`/study/${postId}`}>
          <h3 className='font-semibold text-neutral-700 mb-1'>{post.title}</h3>
        </Link>
        <Link href={`/study/${postId}`}>
          <p className='w-full break-all text-ellipsis line-clamp-4 text-neutral-600 text-sm leading-7'>
            {post.contentSnippet}
          </p>
        </Link>
      </div>
      <div className='border-t'></div>
      <div className='text-xs text-neutral-600 text-right'>
        {post.isoDate.slice(0, 10)}
      </div>
    </div>
  );
};

export default StudyItem;
