import axios from 'axios';
import React from 'react';
import Parser from 'rss-parser';
import { VelogType } from './../../types/Velog';
import StudyList from './../../components/StudyList/StudyList';

const Study = ({ velogData }: { velogData: VelogType }) => {
  console.log(velogData);

  return (
    <div>
      <StudyList postData={velogData} />
    </div>
  );
};

export default Study;

export const getServerSideProps = async () => {
  let parser = new Parser();

  const result = await parser.parseURL('https://v2.velog.io/rss/younngg1012');

  return {
    props: {
      velogData: result,
    },
  };
};
