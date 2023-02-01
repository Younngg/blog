import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <>
      <header className='sticky top-0 z-50'>
        <div className='container mx-auto flex flex-col items-center'>
          <h1 className='mt-8 mb-3 font-bold text-lg'>
            <Link href='/'>지영의 블로그</Link>
          </h1>
          <div className='mb-4'>
            <nav className='grid grid-cols-2 gap-4'>
              <li>
                <Link href='/study' legacyBehavior>
                  <a className='block p-4'>Study</a>
                </Link>
              </li>
              <li>
                <Link href='/me' legacyBehavior>
                  <a className='block p-4'>Daily</a>
                </Link>
              </li>
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
