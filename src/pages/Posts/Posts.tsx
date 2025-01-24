import { Link, useLocation, useNavigate } from "react-router-dom";
import { fetchPosts } from "../../api";
import { useQuery } from "react-query";
import ListControls from "./components/ListControls";
import ErrorInfo from "../../components/ErrorInfo";
import ListSkeleton from "./components/ListSkeleton";
import PostList from "./components/PostList";

const PostsPage = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);

  const statusFilter = queryParams.get("status") || undefined;

  const sortOrder = queryParams.get("date-sort-order") || "desc";

  const { data, error, isLoading } = useQuery(
    ["posts", { status: statusFilter, sort_order: sortOrder }],
    async () => {
      const data = await fetchPosts({
        status: statusFilter || undefined,
        date_sort_order: sortOrder,
      });

      return data;
    },
    {
      retry: 1,
    }
  );

  const handleFilter = (target?: "draft" | "published") => {
    if (!target) {
      queryParams.delete("status");
    } else {
      queryParams.set("status", target);
    }

    navigate({ search: queryParams.toString() });
  };

  const handleSort = () => {
    const newSortOrder = sortOrder == "desc" ? "asc" : "desc";

    queryParams.set("date-sort-order", newSortOrder);

    navigate({ search: queryParams.toString() });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 pb-36 h-fit">
      <ListControls
        filters={{ status: statusFilter, date_sort_order: sortOrder }}
        handleFilter={handleFilter}
        handleSort={handleSort}
      />

      {isLoading ? (
        <ListSkeleton />
      ) : error ? (
        <ErrorInfo
          title="Server error"
          description="Oops, something went wrong, try again later."
        />
      ) : data?.length == 0 ? (
        <ErrorInfo
          title="This list is empty!"
          description="Looks like there is no posts in this category."
        >
          <Link
            to={`/create`}
            className="inline-flex items-center px-5 py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add new post
          </Link>
        </ErrorInfo>
      ) : (
        data && <PostList data={data} />
      )}
    </div>
  );
};

export default PostsPage;
