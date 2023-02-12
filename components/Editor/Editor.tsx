import React, { FormEvent, useRef } from 'react';
import { Editor as ToastEditor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import axios from 'axios';

const Editor = () => {
  const editorRef = useRef<ToastEditor>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const tagsRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const post = {
      title: titleRef.current?.value,
      date: dateRef.current?.value,
      description: descriptionRef.current?.value,
      tags: tagsRef.current?.value,
      content: editorRef.current?.getInstance().getMarkdown(),
    };

    try {
      await axios.post('/api', post);
      alert('파일을 생성했습니다.');
    } catch (err) {
      alert('로컬 환경에서만 작성할 수 있습니다.');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='m-3 flex flex-col gap-3'>
        <div>
          <label htmlFor='title'>제목</label>
          <input type='text' id='title' className='border' ref={titleRef} />
        </div>
        <div>
          <label htmlFor='date'>날짜</label>
          <input
            type='date'
            name='date'
            id='date'
            className='border'
            ref={dateRef}
          />
        </div>
        <div>
          <label htmlFor='description'>설명</label>
          <textarea
            id='description'
            className='border w-1/2 h-32 resize-none'
            ref={descriptionRef}
          />
        </div>
        <div>
          <label htmlFor='tags'>태그</label>
          <input
            type='text'
            name='tags'
            id='tags'
            className='border'
            ref={tagsRef}
          />
        </div>
      </div>
      <ToastEditor
        ref={editorRef}
        previewStyle='vertical'
        height='600px'
        initialEditType='markdown'
        useCommandShortcut={true}
      />
      <button className='block bg-gray-200 rounded-3xl w-fit py-2 px-5 hover:bg-gray-300'>
        write
      </button>
    </form>
  );
};

export default Editor;
