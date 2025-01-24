import ListControlBtn from "./ListControlBtn";

type Props = {
  filters: {
    status?: string;
    date_sort_order?: string;
  };
  handleFilter: (target?: "draft" | "published") => void;
  handleSort: () => void;
};

function ListControls({ filters, handleFilter, handleSort }: Props) {
  return (
    <div className="flex items-center justify-between w-full py-4 max-sm:flex-col md:py-8">
      <div className="flex flex-wrap items-center justify-center ">
        <ListControlBtn
          active={!filters.status}
          handleFunction={() => handleFilter()}
        >
          All categories
        </ListControlBtn>
        <ListControlBtn
          active={filters.status == "published"}
          handleFunction={() => handleFilter("published")}
        >
          Published
        </ListControlBtn>
        <ListControlBtn
          active={filters.status == "draft"}
          handleFunction={() => handleFilter("draft")}
        >
          Draft
        </ListControlBtn>
      </div>
      <button
        className="flex gap-1 text-gray-900 border w-fit border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        onClick={handleSort}
      >
        Sort by Date{" "}
        <svg
          className={`${
            filters.date_sort_order == "asc" && "rotate-180"
          } w-6 h-6 text-gray-800 dark:text-white`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M12 19V5m0 14-4-4m4 4 4-4"
          />
        </svg>
      </button>
    </div>
  );
}

export default ListControls;
