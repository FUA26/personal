import Link from 'next/link';

function PostCard({ title, publishedAt, description, slug,banner }: any) {
  return (
    // <div className="my-4 py-4 border-b">
    //   <h2 className="font-bold text-2xl my-4">{title}</h2>
    //   <time className="text-gray-400">{date}</time>
    //   <p className="mt-4 italic">{description}</p>

    //   <Link href={`/${slug}`} as={`/${slug}`}>
    //     <span className="text-blue-500 mt-4 mb-2 block">Read more</span>
    //   </Link>
    // </div>
    <article className="m-4 flex flex-col rounded-lg shadow dark:bg-gray-800">
      <Link href={`/project/${slug}`} as={`/project/${slug}`}>
        <div className="">
          <img
            alt=""
            className="h-52 w-full rounded-lg object-cover dark:bg-gray-500"
            src={`/content/${banner}`}
          />
          <div className="p-4">
            <p className="font-primary text-base font-bold md:text-lg">
              {title}
            </p>
            <p className="mb-2 mt-4 text-sm text-gray-600 dark:text-gray-300">
              {publishedAt}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {description}
            </p>
          </div>
        </div>
      </Link>
      {/* <a
        rel="noopener noreferrer"
        href="#"
        aria-label="Te nulla oportere reprimique his dolorum"
      >
        <img
          alt=""
          className="object-cover w-full h-52 dark:bg-gray-500"
          src="https://source.unsplash.com/200x200/?fashion?1"
        />
      </a>
      <div className="flex flex-col flex-1 p-6">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Te nulla oportere reprimique his dolorum"
        ></a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="text-xs tracki uppercase hover:underline dark:text-violet-400"
        >
          Convenire
        </a>
        <h3 className="flex-1 py-2 text-lg font-semibold leadi">
          Te nulla oportere reprimique his dolorum
        </h3>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
          <span>June 1, 2020</span>
          <span>2.1K views</span>
        </div>
      </div> */}
    </article>
  );
}

export default PostCard;
