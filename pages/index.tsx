import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { allPosts } from '@/.contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import Tag from './../components/Tag/Tag';
import Parser from 'rss-parser';
import { VelogPostType } from '@/types/Velog';
import RecentPost from './../components/RecentPost/RecentPost';

export default function Home({
  posts,
  tags,
  velogPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div className='index'></div>
      <div className='background h-screen'></div>
      <div className='p-20 flex justify-center bg-[#80a77a]'>
        <div className='sm:container xl:w-3/5 min-[1900px]:px-20 flex flex-col gap-20'>
          <h2 className='text-center text-2xl font-bold'>Recent Post</h2>
          <div className='flex flex-col items-center' data-aos='fade-up'>
            <h2 className='text-xl font-bold mb-10'>Study</h2>
            <RecentPost posts={posts} />
          </div>
          <div className='flex flex-col items-center' data-aos='fade-up'>
            <h2 className='text-xl font-bold mb-10'>Daily</h2>
            <RecentPost posts={velogPosts} />
          </div>
          <div className='flex flex-col items-center' data-aos='fade-up'>
            <h2 className='text-xl font-bold mb-10'>Tags</h2>
            {tags && <Tag tags={tags} size='large' />}
          </div>
        </div>
      </div>
      <div className='background h-96'></div>
      <div className='background h-20'></div>
      <style jsx>{`
        .index {
          width: 100%;
          height: 100vh;
          position: fixed;
          z-index: -1;
          background: fixed no-repeat url('/asset/background.jpg') #80a77a;
          background-size: 1200px;
          background-position: center top -100px;
        }

        .container {
          background-color: #80a77a;
        }

        a:hover {
          color: #595959;
        }
      `}</style>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  const tags = allPosts.flatMap(
    (post) => post.tags && post.tags.split(',').map((tag) => tag.trimStart())
  ) as string[];

  const uniqueTags = new Set(tags);

  let parser = new Parser();

  const velogPosts = await parser.parseURL(
    'https://v2.velog.io/rss/younngg1012'
  );

  return {
    props: {
      posts,
      tags: Array.from(uniqueTags),
      velogPosts: velogPosts.items as VelogPostType[],
    },
  };
};
