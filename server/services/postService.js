const fs = require('fs/promises');

const createPost = async (post) => {
  const folderPath = './posts';
  const filePath = `./posts/${post.title}.mdx`;
  const folder = await fs.readdir(folderPath).catch(() => void 0);
  const file = await fs.readFile(filePath).catch(() => void 0);

  const content = `---
title: ${post.title}
date: ${post.date}
description: ${post.description}
tags: ${post.tags}
---
  
${post.content}
  `;

  if (!folder) {
    await fs.mkdir(folderPath);
  }

  if (!file) {
    await fs.writeFile(filePath, content, (err) => {
      if (err === null) {
        console.log('success');
      } else {
        console.log('fail');
      }
    });
  }

  return post;
};

exports.createPost = createPost;
