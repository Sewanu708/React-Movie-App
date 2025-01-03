import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import TrendingNav from "../navBar/nav";
export default function Variants() {
  return (
    <Stack className="bg-[#21201E]" spacing={1}>
      <div>
        <div className="max-w-[1300px]  h-min(400px,100vh) px-[6px] pb-[15px] pt-[32px] ml-[280px]">
          <TrendingNav />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            width={200}
            className="text-white text-[20px] pb-4  font-[500]"
          />

          <div className="flex items-start justify-start gap-x-[20px] overflow-x-scroll overflow-y-hidden ">
            <Skeleton variant="rounded" width={255} height={301} />
            <Skeleton variant="rounded" width={255} height={301} />
            <Skeleton variant="rounded" width={255} height={301} />
            <Skeleton variant="rounded" width={255} height={301} />
          </div>
        </div>
        <div className="ml-[280px] bg-[#21201E] grid grid-cols-[524px_1.5fr] py-[32px] pl-2 gap-x-[24px]">
          {/* <div className="w-full h-[420px] rounded-[20px] border border-[#ffffff99]"> */}
          <Skeleton
            variant="round"
            sx={{ fontSize: "1rem" }}
            width={515}
            height={401}
            className="text-white text-[20px] pb-4  font-[500]"
          />

          <div>
            <div className="flex justify-between pr-4">
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem" }}
                width={200}
                className="text-white text-[20px] pb-4  font-[500]"
              />

              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem" }}
                width={75}
                className="text-white text-[20px] pb-4  font-[500]"
              />
            </div>
            <div className="flex gap-x-8">
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem" }}
                width={75}
                className="text-white text-[20px] pb-4  font-[500]"
              />

              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem" }}
                width={150}
                className="text-white text-[20px] pb-4  font-[500]"
              />
            </div>
            <div className="mt-2">
              <Skeleton
                variant="rectangular"
                sx={{ fontSize: "1rem" }}
                width={400}
                height={200}
                className="text-white text-[20px] pb-4  font-[500]"
              />
            </div>
            <div className="mt-4">
              <Skeleton
                variant="round"
                sx={{ fontSize: "1rem" }}
                width={100}
                height={50}
                className="text-white text-[20px] pb-4  font-[500]"
              />
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </Stack>
  );
}
