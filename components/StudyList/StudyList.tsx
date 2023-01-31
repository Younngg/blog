import React from 'react';
import StudyItem from '../StudyItem/StudyItem';
import { VelogType } from './../../types/Velog';

const StudyList = ({ postData }: { postData: VelogType }) => {
  return (
    <div className='w-3/5 mx-auto'>
      {postData.items.map((post) => (
        <StudyItem key={post.guid} post={post} />
      ))}
    </div>
  );
};

export default StudyList;
