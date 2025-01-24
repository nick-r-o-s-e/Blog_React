import  { ReactNode } from "react";

type Props = {
  handleFunction: () => void;
  active: boolean;
  children: ReactNode;
};

function ListControlBtn({ handleFunction, active, children }: Props) {
  return (
    <button
      type="button"
      className={
        active
          ? "text-blue-700 hover:text-white hover:border-2 border-2 border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
          : "text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
      }
      onClick={handleFunction}
    >
      {children}
    </button>
  );
}

export default ListControlBtn;
