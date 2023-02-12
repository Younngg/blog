import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { RefObject, useEffect, useRef } from 'react';
import navLinks from './../../data/navLinks';
import Seo from './../Seo';
import metadata from './../../data/metadata';

interface BgColorForPathType {
  [key: string]: string;
}

const NavBar = ({ headerRef }: { headerRef: RefObject<HTMLHeadElement> }) => {
  const router = useRouter();

  const pageTitle = metadata.find((v) => v.link === router.pathname);

  const bgColorForPath: BgColorForPathType = {
    '/daily': 'bg-white',
    '/daily/[id]': 'bg-white',
    '/study': 'studyBg',
    '/study/[id]': 'studyBg',
    '/': 'bg-[#91c788]',
  };

  return (
    <>
      <Seo title={pageTitle?.title} />
      <header
        className={`sticky top-0 z-50 ${bgColorForPath[router.pathname]}`}
        ref={headerRef}
      >
        <div className='container mx-auto flex flex-col items-center'>
          <h1 className='mt-8 mb-3 font-bold text-lg'>
            <Link href='/'>지영의 블로그</Link>
          </h1>
          <div className='menu mb-4'>
            <nav className={`grid grid-cols-${navLinks.length} gap-2`}>
              {navLinks.map((link) => (
                <li key={link.link} className='list-none hover:text-[#595959]'>
                  <Link href={link.link} legacyBehavior>
                    <a className='block p-4'>{link.title}</a>
                  </Link>
                </li>
              ))}
            </nav>
          </div>
        </div>
      </header>
      <style jsx>{`
        .studyBg {
          background: no-repeat url('/asset/studyBg.jpg') #b7967a;
          background-size: 100%;
          background-position: center top -300px;
          color: white;
        }

        header.small {
          box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.1);
          -webkit-box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.1);
          -moz-box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.1);
        }

        header.small .container {
          height: 80px;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
        }
        header.small h1,
        header.small .menu {
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default NavBar;
