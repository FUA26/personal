import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getPost = (type: string, slug: any) => {
  const fileContents = fs.readFileSync(
    path.join(`contents/${type}/${slug}.mdx`),
    'utf8'
  );
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};

export default getPost;
