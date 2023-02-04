import React from 'react';
import { allPosts } from '@/.contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import PageTitle from '../../components/PageTitle/PageTitle';

const DailyDetail = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post!.body.code);

  console.log(post);

  return (
    <div className='container mx-auto p-10'>
      <div className='mb-10  border-b pb-10'>
        <div className='flex items-center justify-between mb-10'>
          <h1 className='text-5xl font-bold'>{post!.title}</h1>
          <span className='text-sm'>{post!.date}</span>
        </div>
        <p className='leading-10'>{post?.description}</p>
      </div>
      <div className='prose'>
        <MDXComponent />
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
      post,
    },
  };
};
