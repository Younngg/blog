import React from 'react';

const Skeleton = () => {
  const POST_NUM = 4;

  return (
    <>
      <div className='w-3/5 mx-auto'>
        {Array(POST_NUM)
          .fill('')
          .map(() => (
            <>
              <div className='w-full h-80 px-12 py-10 mb-5 border border-gray-200 shadow-md flex flex-col justify-between gap-5 hover:-translate-y-2 hover:shadow-lg transition-all'>
                <div className='flex flex-col gap-5 '>
                  <div className='w-1/2 h-8 font-semibold text-neutral-700 mb-1 text-xl bg-gray-200'></div>
                  <p className='w-full h-5 leading-7 bg-gray-200'></p>
                  <p className='w-full h-5 leading-7 bg-gray-200'></p>
                </div>
                <div>
                  <div className='mb-3 bg-gray-200 w-20 h-5'></div>
                  <div className='border-t flex justify-end'>
                    <div className='mt-5 bg-gray-200 w-20 h-5'>{}</div>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(1000px);
          }
        }

        .bg-gray-200::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 100%;
          background: linear-gradient(
            90deg,
            #e5e7eb 0%,
            #f2f2f2 50%,
            #e5e7eb 100%
          );
          animation: loading 3s infinite linear;
        }

        .bg-gray-200 {
          overflow: hidden;
          position: relative;
        }
      `}</style>
    </>
  );
};

export default Skeleton;
