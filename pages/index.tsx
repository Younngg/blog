import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { allPosts } from '@/.contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import CurrentPost from '../components/CurrentPost/CurrentPost';

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div className='index'></div>
      <div className='background h-screen'></div>
      <div className='container mx-auto p-10 flex flex-col items-center'>
        <h2 className='text-xl font-bold'>Current Post</h2>
        <CurrentPost posts={posts} />
      </div>
      <div className='background h-96'></div>
      <div className='container mx-auto px-12 py-10 flex flex-auto gap-10 justify-center'>
        <div className='w-2/5 h-96'>
          <iframe
            className='w-full h-full'
            src='https://www.youtube.com/embed/videoseries?list=PL055hBeFBrbC1fKHxz9pJ52-vVyducONU'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            data-aos='fade-up'
            data-aos-duration='1000'
          ></iframe>
        </div>
        <div className='w-2/5 flex items-center justify-center'>
          <p className='font-semibold text-xl'>Play List</p>
        </div>
      </div>
      <div className='background h-96'></div>
      <div className='container mx-auto'>
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

  return {
    props: {
      posts,
    },
  };
};
