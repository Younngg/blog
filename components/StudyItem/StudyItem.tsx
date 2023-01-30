import { VelogPostType } from '@/types/Velog';
import React from 'react';

const StudyItem = ({ post }: { post: VelogPostType }) => {
  return <div>{post.title}</div>;
};

export default StudyItem;
