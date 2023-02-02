import React from 'react';
import { allPosts } from '@/.contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

const DailyDetail = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post!.body.code);
  return (
    <div>
      <MDXComponent />
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
