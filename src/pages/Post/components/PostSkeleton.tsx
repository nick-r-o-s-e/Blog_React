import SkeletonBox from "./SkeletonBox";

function PostSkeleton() {
  return (
    <div className="w-full px-8 py-12 mx-auto lg:py-16">
      <div role="status" className="flex flex-col gap-4 animate-pulse">
        <SkeletonBox sizeClasses="h-[45px] lg:h-[90px]  w-[275px]  lg:w-[600px]" />

        <SkeletonBox sizeClasses="h-[15px] lg:h-[15px]   w-[350px]  lg:w-[700px]" />

        <SkeletonBox sizeClasses="h-[15px] lg:h-[15px]   w-[425px]  lg:w-[850px]" />

        <SkeletonBox sizeClasses="h-[15px] lg:h-[15px]   w-[400px]  lg:w-[800px]" />

        <SkeletonBox sizeClasses="h-[15px] lg:h-[15px]   w-[225px]  lg:w-[450px]" />

        <SkeletonBox sizeClasses="h-[7px]  lg:h-[15px]   w-[135px]  lg:w-[270px]" />

        <SkeletonBox sizeClasses="h-[7px]  lg:h-[15px]   w-[190px]  lg:w-[380px]" />

        <SkeletonBox sizeClasses="h-[7px]  lg:h-[15px]   w-[240px]  lg:w-[480px]" />

        <SkeletonBox sizeClasses="h-[40px] lg:h-[60px]   w-[115px]  lg:w-[145px]" />

        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default PostSkeleton;
