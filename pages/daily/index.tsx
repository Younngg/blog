import { allPosts } from '@/.contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import React, { useState } from 'react';
import PageTitle from './../../components/PageTitle/PageTitle';
import DailyItem from './../../components/DailyItem/DailyItem';
import Pagination from '@/components/Pagination/Pagination';

const Daily = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [page, setPage] = useState(1);

  const LIMIT = 4;
  const OFFSET = (page - 1) * LIMIT;

  return (
    <div className='w-3/5 mx-auto'>
      {posts.map((post) => (
        <DailyItem
          title={post.title}
          des={post.description}
          date={post.date}
          id={post._raw.flattenedPath}
          tag={post.tags?.split(',').map((tag) => tag.trimStart())}
          key={post._id}
        />
      ))}
      <Pagination
        total={posts.length}
        limit={LIMIT}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};

export default Daily;
