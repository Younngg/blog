import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div className='index'></div>
      <div className='background h-screen'></div>
      <div className='container mx-auto'>
        <div
          className='w-fit mx-auto py-20 grid grid-cols-3  gap-20 place-items-center'
          data-aos='fade-up'
          data-aos-duration='3000'
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
      <div className='background h-96'></div>
      <div className='container mx-auto h-96'></div>
      <div className='background h-96'></div>
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
