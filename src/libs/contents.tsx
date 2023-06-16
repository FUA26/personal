import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getPosts = (type : string) => {
  const files = fs.readdirSync(path.join(`contents/${type}`));
  const allPostsData = files.map((fileName) => {
    const slug = fileName.replace('.mdx', '');
    const fileContents = fs.readFileSync(
      path.join(`contents/${type}/${slug}.mdx`),
      'utf8'
    );

    const { data } = matter(fileContents);
    return {
      slug,
      data,
    };
  });

  return allPostsData;
};

export default getPosts;
