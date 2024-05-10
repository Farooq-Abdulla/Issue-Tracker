import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="space-y-4">
      <div className="">
        <Skeleton className="w-[50px] h-[25px]" />
      </div>
      <div className="">
        <Skeleton className="w-[576px] h-[35px]" />
      </div>
      <div className="">
        <Skeleton className="w-[576px] h-[75px]" />
      </div>
      <div className="">
        <Skeleton className="w-[70px] h-[35px]" />
      </div>
    </div>
  );
};

export default loading;
