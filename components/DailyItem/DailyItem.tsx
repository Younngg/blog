import React from 'react';

const DailyItem = () => {
  return (
    <div className='w-full h-80 px-12 py-10 mb-5 border border-gray-200 shadow-md flex flex-col gap-5 hover:-translate-y-2 hover:shadow-lg transition-all'>
      <div className='flex flex-col gap-5'>
        <a href='' target='_blank' rel='noreferrer'>
          <h3 className='font-semibold text-neutral-700 mb-1'>게시글 제목</h3>
        </a>
        <a href='' target='_blank' rel='noreferrer'>
          <p className='w-full break-all text-ellipsis line-clamp-4 text-neutral-600 text-sm leading-7'>
            게시글 설명
          </p>
        </a>
      </div>
      <div className='border-t'></div>
      <div className='text-xs text-neutral-600 text-right'>작성 날짜</div>
    </div>
  );
};

export default DailyItem;
