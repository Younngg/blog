import Link from 'next/link';
import React from 'react';
import navLinks from './../../data/navLinks';

const NavBar = () => {
  return (
    <>
      <header className='sticky top-0 z-50'>
        <div className='container mx-auto flex flex-col items-center'>
          <h1 className='mt-8 mb-3 font-bold text-lg'>
            <Link href='/'>지영의 블로그</Link>
          </h1>
          <div className='mb-4'>
            <nav className={`grid grid-cols-${navLinks.length} gap-4`}>
              {navLinks.map((link) => (
                <li key={link.link}>
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
        header {
          background-color: #91c788;
        }

        li:hover {
          color: #595959;
        }
      `}</style>
    </>
  );
};

export default NavBar;
