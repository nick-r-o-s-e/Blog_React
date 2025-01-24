function ListCardSkeleton() {
  return (
    <div className="flex animate-pulse flex-col min-h-[247px] justify-between  p-5 border bg-gray-200 dark:bg-gray-800/60  border-gray-400 rounded-lg shadow  dark:border-gray-700">
      <div className="">
        <div className="h-[42px] w-52  max-w-full    bg-gray-300 rounded-md dark:bg-gray-600"></div>

        <div className="h-[30px] w-44 mt-2 mb-3  max-w-full    bg-gray-400/60 rounded-md dark:bg-gray-700"></div>

        <div className="flex flex-col gap-1">
          <div className="h-[17px] mb-2  w-full    bg-gray-300 rounded-md dark:bg-gray-700/60"></div>

          <div className="h-[17px]   w-[70%]   bg-gray-300 rounded-md dark:bg-gray-700/60"></div>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="h-[45px] w-[120px] bg-gray-400/60 dark:bg-gray-700 rounded-md "></div>

        <div className="h-[45px] w-[105px] bg-gray-400/60 dark:bg-gray-700 rounded-md "></div>
      </div>
    </div>
  );
}

export default ListCardSkeleton;
