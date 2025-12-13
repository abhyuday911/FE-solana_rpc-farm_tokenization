"use client";
// import { useFarmProgram } from "@/hooks/useFarmProgram";
// import { Skeleton } from "../ui/skeleton";
// import { Button } from "../ui/button";
// import { useInitializeFarm } from "@/hooks/useFarm";

const Main = () => {
  // const { program } = useFarmProgram();
  // const { initializeFarm, isReady } = useInitializeFarm();

  // if (!program) {
  //   return <Skeleton className="h-6 w-2xl" />;
  // }

  // const createFarm = () => {
  //   initializeFarm();
  // };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      {/* <h1 className="text-xl px-2">{program._idl.address}</h1>
      <Button onClick={createFarm}>create farm</Button> */}
    </div>
  );
};

export default Main;
