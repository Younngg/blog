import axios from 'axios';
import React from 'react';
import Parser from 'rss-parser';
import { VelogType } from './../../types/Velog';
import StudyList from './../../components/StudyList/StudyList';
import PageTitle from './../../components/PageTitle/PageTitle';

const Study = ({ velogData }: { velogData: VelogType }) => {
  return (
    <div className='w-3/5 mx-auto py-10'>
      <PageTitle
        title='Study'
        description='공유하고 싶거나 제가 공부한 것을 기록합니다.'
      />
      <StudyList postData={velogData} />
    </div>
  );
};

export default Study;

export const getServerSideProps = async () => {
  let parser = new Parser();

  const velogData = await parser.parseURL(
    'https://v2.velog.io/rss/younngg1012'
  );

  return {
    props: {
      velogData: velogData,
    },
  };
};
