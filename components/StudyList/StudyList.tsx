import React from 'react';
import StudyItem from '../StudyItem/StudyItem';
import { VelogType } from './../../types/Velog';

const StudyList = ({ postData }: { postData: VelogType }) => {
  return (
    <div className='container mx-auto'>
      {postData.items.map((post) => (
        <StudyItem key={post.guid} post={post} />
      ))}
    </div>
  );
};

export default StudyList;
