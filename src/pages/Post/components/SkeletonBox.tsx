type Props = {
  sizeClasses: string;
};

function SkeletonBox({ sizeClasses }: Props) {
  return (
    <div
      className={`${sizeClasses} max-w-full bg-gray-400 rounded-md dark:bg-gray-700`}
    ></div>
  );
}

export default SkeletonBox;
