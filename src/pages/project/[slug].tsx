/* eslint-disable import/extensions */
import Layout from '@/components/layout/Layout';
import getPosts from '@/libs/contents';
import getPost from '@/libs/post';
import { InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';

import { serialize } from 'next-mdx-remote/serialize';

export const getStaticPaths = async () => {
  const posts = await getPosts('project');
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const post = await getPost('project', params.slug);
  const mdxSource = await serialize(post.content);
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};

function Post({
  data,
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div>
        <h1 className="font-bold text-7xl mt-24 mb-12">{data.title}</h1>
        <time className="text-gray-500 italic">{data.date}</time>
        <div className="prose mt-12">
          <MDXRemote {...content} />
        </div>
      </div>
    </Layout>
  );
}

export default Post;
