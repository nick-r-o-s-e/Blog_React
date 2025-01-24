import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  children?: ReactNode;
};

function ErrorInfo({ title, description, children }: Props) {
  return (
    <div className="flex flex-col h-fit max-w-[500px] lg:max-w-[800px] justify-center items-center">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {title}
      </h1>
      <p className="mb-6 text-lg font-normal text-center text-gray-500 lg:text-xl dark:text-gray-400">
        {description} Proin ac scelerisque lectus, non tempus dui. Cras interdum
        eget eros sed posuere. Pellentesque ut ante vel justo maximus dignissim
        vitae vulputate diam. Suspendisse varius semper diam vel tristique.
        Proin congue orci est, eu consequat justo semper sed. Duis ullamcorper
        luctus sem vel efficitur. Pellentesque eget ornare dui.
      </p>
      <div className="flex justify-center gap-5 mb-8">
        {children || <></>}
        <Link
          to="/"
          className="inline-flex items-center text-lg font-medium text-blue-600 w-fit dark:text-blue-500 hover:underline"
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

export default ErrorInfo;
