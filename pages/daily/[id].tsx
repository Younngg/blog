import React from 'react';
import { allPosts } from '@/.contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Tag from '../../components/Tag/Tag';
import Link from 'next/link';

const DailyDetail = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post.body!.code);

  return (
    <div className='container mx-auto p-10'>
      <div className='mb-10  border-b'>
        <div className='flex items-center justify-between mb-10'>
          <h1 className='text-5xl font-bold'>{post!.title}</h1>
          <span className='text-sm'>{post!.date}</span>
        </div>
        <p className='mb-10'>{post?.description}</p>
        <div className='mb-5'>{post!.tags && <Tag tags={post.tags} />}</div>
      </div>
      <div className='prose'>
        <MDXComponent />
      </div>
      <div className='mt-28 flex justify-center'>
        <Link href='/daily' legacyBehavior>
          <a className='block bg-gray-200 rounded-3xl w-fit py-2 px-5 hover:bg-gray-300'>
            목록
          </a>
        </Link>
      </div>
    </div>
  );
};

export default DailyDetail;

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { id: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.id);
  return {
    props: {
      post: {
        ...post,
        tags: post?.tags?.split(',').map((tag) => tag.trimStart()),
      },
    },
  };
};
