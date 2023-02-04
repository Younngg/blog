import React, { ReactNode } from 'react';
import NavBar from '../NavBar/NavBar';
import { useRouter } from 'next/router';
import PageTitle from '../PageTitle/PageTitle';

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const title = {
    '/study': {
      title: 'Study',
      description: '공유하고 싶거나 제가 공부한 것을 기록합니다.',
    },
    '/daily': { title: 'Daily', description: '제 취향과 일상을 기록합니다.' },
  };

  return (
    <>
      <NavBar />
      {router.pathname.includes('daily') && (
        <div className='px-12 py-10 flex justify-center bg-[#80a77a]'>
          <div className='sm:container xl:w-1/2 h-80 flex flex-auto gap-10 justify-center'>
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
      )}
      {router.pathname === '/daily' || router.pathname === '/study' ? (
        <PageTitle
          title={title[router.pathname].title}
          description={title[router.pathname].description}
        />
      ) : null}
      <div>{children}</div>
      <footer className='mx-auto mt-20 bg-[#80a77a]'>
        <div className='w-fit mx-auto py-20 grid grid-cols-3 gap-20 place-items-center'>
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
      </footer>
    </>
  );
};

export default Layout;
