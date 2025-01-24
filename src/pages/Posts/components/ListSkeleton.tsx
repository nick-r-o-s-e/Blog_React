import ListCardSkeleton from "./ListCardSkeleton";

function ListSkeleton() {
  return (
    <div className="grid w-full grid-cols-1 gap-10 justify-items-stretch md:grid-cols-2 lg:grid-cols-3">
      {[...Array(10)].map((_, i) => (
        <ListCardSkeleton key={i} />
      ))}
    </div>
  );
}

export default ListSkeleton;
