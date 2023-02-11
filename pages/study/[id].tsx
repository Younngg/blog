import { GetServerSidePropsContext } from 'next';
import React from 'react';
import Parser from 'rss-parser';
import Tag from './../../components/Tag/Tag';
import Link from 'next/link';

const StudyDetail = ({ post }: { post: any }) => {
  return (
    <div className='w-3/5 mx-auto p-10'>
      <div className='mb-10  border-b'>
        <div className='flex items-center justify-between mb-10'>
          <h1 className='text-5xl font-bold'>{post!.title}</h1>
          <span className='text-sm'>{post!.date}</span>
        </div>
        <p className='mb-10'>{post?.description}</p>
        <div className='mb-5'>{post!.tags && <Tag tags={post.tags} />}</div>
      </div>
      <div
        className='prose max-w-full'
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
      <div className='mt-28 flex justify-center'>
        <Link href='/study' legacyBehavior>
          <a className='block bg-gray-200 rounded-3xl w-fit py-2 px-5 hover:bg-gray-300'>
            목록
          </a>
        </Link>
      </div>
    </div>
  );
};

export default StudyDetail;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  let parser = new Parser();

  const allPosts = await parser.parseURL('https://v2.velog.io/rss/younngg1012');

  const post = allPosts.items.find(
    (post) =>
      decodeURI(post.guid!.split('https://velog.io/@younngg1012/')[1]) ===
      context.query.id
  );

  return {
    props: {
      post: post,
    },
  };
};
