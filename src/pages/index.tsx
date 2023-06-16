import Link from 'next/link';
import { useTypewriter } from 'react-simple-typewriter';

import Layout from '@/components/layout/Layout';
import Logo from '@/components/Logo';
import getPosts from '@/libs/contents';
import PostCard from '@/components/PostCard';



export default function Home({posts}) {
  const [text] = useTypewriter({
    words: ['Frontend Developer', 'Fullstack Developer', 'Project Manager'],
    loop: true,
    delaySpeed: 2000,
  });


  return (
    <Layout>
      <div className="flex min-h-screen flex-col pb-16 pt-20 sm:flex-row  lg:pt-32">
        <div className="order-2 flex w-full flex-col justify-center p-6  sm:order-1">
          <h1 className=" font-display max-w-4xl text-2xl font-medium tracking-tight  sm:text-5xl">
            Hi 👋🏼
            <br />
            You can call me{' '}
            <span className="text-fuaprimary-600  dark:text-fuasecondary-600 font-extrabold">
              Fatih
            </span>
          </h1>
          <p className=" mt-6 max-w-md text-left text-lg tracking-tight">
            Fully passionate about software development, striving to make a
            significant impact.
          </p>
          <Link
            href="#"
            className="bg-fuaprimary-600 dark:bg-fuasecondary-600 hover:bg-fuaprimary-500 active:bg-fuaprimary-800 active:text-fuaprimary-100 focus-visible:outline-fuaprimary-600 group my-4 inline-flex w-fit items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Get in Touch
          </Link>
        </div>
        <div className="order-1 flex w-full justify-center sm:order-2">
          <img src="/images/sec1.png" alt="N" className="" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row ">
        <div className="flex w-full basis-1/3  flex-col justify-center  px-6 py-8 ">
          <Logo xl />
          <h3 className="pt-8 text-center text-xl font-semibold leading-normal md:text-2xl md:leading-normal">
            Fatih Ulil Albab
          </h3>
          <h3 className="text-fuaprimary-500 dark:text-fuasecondary-500 mb-6 h-3 text-center text-xl font-semibold leading-normal md:text-2xl md:leading-normal">
            {text}
          </h3>
        </div>
        <div className="basis-2/3 p-6">
          <p className="py-5">
            I am an experienced web developer and project manager. I prefer to
            use the term "web developer" for my previous role as it accurately
            represents the nature of my work, which varies depending on the
            projects I am involved in. Most of the time, I work as a front-end
            developer and occasionally as a full-stack developer. I have a
            strong passion for software development.
          </p>
          <p className="py-5">
            My professional journey began in 2018. With more than 5 years of
            experience, I have not only worked as a developer but also as a
            system analyst and project manager. I possess knowledge and
            experience in end-to-end development. Through this website, I will
            be sharing my expertise by writing blog posts and showcasing my
            projects. Please feel free to reach out to me, and I will be more
            than happy to assist you.
          </p>
        </div>
      </div>
      <div className="py-6">
        <div className="px-6">
          <h2 className="font-display text-2xl md:text-4xl  font-bold text-fuaprimary-600 dark:text-fuasecondary-400 sm:text-4xl pt-6 pb-2">
            Featured Posts
          </h2>
          <p className="w-1/2 ">
            Sharing Knowledge, Tips, and Tutorials to Fuel Your Passion for Web
            Development
          </p>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {posts.map((post : any) => (
            <PostCard
              key={post.slug}
              title={post.data.title}
              publishedAt={post.data.publishedAt}
              description={post.data.description}
              slug={post.slug}
              banner= {post.data.banner}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = () => {
  const posts = getPosts('project');
  return {
    props: {
      posts,
    },
  };
};
