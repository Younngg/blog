import React, { useState } from 'react';
import StudyItem from '../StudyItem/StudyItem';
import { VelogType } from './../../types/Velog';
import Pagination from './../Pagination/Pagination';

const StudyList = ({ postData }: { postData: VelogType }) => {
  const [page, setPage] = useState(1);

  const LIMIT = 4;
  const OFFSET = (page - 1) * LIMIT;

  return (
    <div className='w-3/5 mx-auto'>
      {postData.items.slice(OFFSET, OFFSET + LIMIT).map((post) => (
        <StudyItem key={post.guid} post={post} />
      ))}
      <Pagination
        total={postData.items.length}
        limit={LIMIT}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default StudyList;
