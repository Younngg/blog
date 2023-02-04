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
            <h2 className='text-xl font-bold mb-10'>
              I&apos;ve been talking about...
            </h2>
            {tags && <Tag tags={tags} size='large' />}
          </div>
        </div>
      </div>
      <div className='background h-96'></div>
      <div className='px-12 py-10 flex justify-center bg-[#80a77a]'>
        <div className='sm:container xl:w-1/2 h-96 flex flex-auto gap-10 justify-center'>
          <iframe
            className='xl:w-1/3 md:w-1/2 h-full'
            src='https://www.youtube.com/embed/videoseries?list=PL055hBeFBrbC1fKHxz9pJ52-vVyducONU'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            data-aos='fade-up'
            data-aos-duration='1000'
          ></iframe>
          <div className='xl:w-1/3 md:w-1/2 flex items-center justify-center'>
            <p className='font-semibold text-xl'>Play List</p>
          </div>
        </div>
      </div>
      <div className='background h-96'></div>
      <div className='mx-auto bg-[#80a77a]'>
        <div
          className='w-fit mx-auto py-20 grid grid-cols-3 gap-20 place-items-center'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          <p>
            <a
              href='https://github.com/Younngg/'
              target='_blank'
              rel='noreferrer'
            >
              <strong>Github</strong>
            </a>
          </p>
          <p>
            <a
              href='https://velog.io/@younngg1012'
              target='_blank'
              rel='noreferrer'
            >
              <strong>Velog</strong>
            </a>
          </p>
          <p>
            <a
              href='https://my.surfit.io/w/1501176912'
              target='_blank'
              rel='noreferrer'
            >
              <strong>Resume</strong>
            </a>
          </p>
          <p className='emailBox col-span-3'>
            <strong className='inline-block mr-2'>Email</strong>
            <span>8533283@naver.com</span>
          </p>
        </div>
      </div>
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
