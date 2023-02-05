import Link from 'next/link';
import React from 'react';
import Tag from '../Tag/Tag';

interface DailyItemProps {
  date: string;
  title: string;
  des: string;
  id: string;
  tag?: string[];
}

const DailyItem = ({ date, title, des, id, tag }: DailyItemProps) => {
  console.log(id);
  return (
    <Link href={`/daily/${id}`} passHref>
      <div className='w-full h-80 px-12 py-10 mb-5 border border-gray-200 shadow-md flex flex-col justify-between gap-5 hover:-translate-y-2 hover:shadow-lg transition-all'>
        <div className='flex flex-col gap-5'>
          <h3 className='font-semibold text-neutral-700 mb-1 text-xl'>
            {title}
          </h3>
          <p className='w-full break-all text-ellipsis line-clamp-4 text-neutral-600 text-sm leading-7'>
            {des}
          </p>
        </div>
        <div>
          {tag && <Tag tags={tag} />}
          <div className='border-t pt-5 text-xs text-neutral-500 text-right'>
            {date}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DailyItem;
