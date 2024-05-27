import Skeleton from "@/components/skeleton";

export default function Loading() {
  return (
    <div
      className="flex flex-col justify-center max-w-[1100px] mx-auto
      px-[20px] py-24 gap-20"
    >
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}
