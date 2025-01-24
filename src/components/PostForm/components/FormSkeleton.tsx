function FormSkeleton() {
  return (
    <div className="flex animate-pulse flex-col gap-3 h-fit max-w-[600px] rounded-lg mt-9 justify-between  mx-4  p-4 md:p-8 border bg-gray-200 dark:bg-gray-800/60  border-gray-400 w-full shadow  dark:border-gray-700">
      <div className="flex flex-col gap-3">
        <div className="h-[17px]   w-[100px]   bg-gray-300 rounded-md dark:bg-gray-700/60"></div>
        <div className="h-[42px] w-full mb-3  max-w-full    bg-gray-300 rounded-md dark:bg-gray-600"></div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="h-[17px]   w-[100px]   bg-gray-300 rounded-md dark:bg-gray-700/60"></div>
        <div className="h-[42px] w-full mb-3  max-w-full    bg-gray-300 rounded-md dark:bg-gray-600"></div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="h-[17px]   w-[100px]   bg-gray-300 rounded-md dark:bg-gray-700/60"></div>
        <div className="h-[105px] w-full mb-3  max-w-full    bg-gray-300 rounded-md dark:bg-gray-600"></div>
      </div>

      <div className="flex justify-start gap-4">
        <div className="h-[45px] w-[120px] bg-gray-400/60 dark:bg-gray-700 rounded-md "></div>

        <div className="h-[45px] w-[105px] bg-gray-400/60 dark:bg-gray-700 rounded-md "></div>
      </div>
    </div>
  );
}

export default FormSkeleton;
