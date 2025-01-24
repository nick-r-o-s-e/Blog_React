import { PostFormData } from "../../../utils/types";
import { Link } from "react-router-dom";

type Props = {
  post: PostFormData;
  handleDelete: () => Promise<void>;
  id: string;
};

function PostDetails({ post, handleDelete, id }: Props) {
  return (
    <div className="w-full px-16 py-12 mx-auto lg:py-16">
      <div className="flex flex-col max-w-[500px] lg:max-w-[800px] justify-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {post.title}
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          {post.description}
        </p>
        <div className="flex gap-5 mb-8">
          <Link
            to={`/edit/${id}`}
            className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Edit
          </Link>
          <button
            className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg w-fit hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>

        <Link
          to="/"
          className="inline-flex items-center text-lg font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Back to Home{" "}
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default PostDetails;
