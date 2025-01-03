import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function HomeSkeleton() {
  return (
    <Stack className="bg-[#21201E]" spacing={1}>
      <div>
        <Skeleton
          variant="rectangular"
          className="max-w-[1300px] ml-[280px]"
      
          height={455}
        />
        <div className="max-w-[1300px]  h-min(400px,100vh) px-[6px] py-[32px] ml-[280px]">
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={200} className="text-white text-[20px] pb-4  font-[500]"/>

          <div className="flex items-start justify-start gap-x-[20px] overflow-x-scroll overflow-y-hidden ">
            <Skeleton
              variant="rounded"
              
             
              width={255}
              height={301}
            />

            <Skeleton
              variant="rounded"
          
              width={255}
              height={301}
            />
            <Skeleton
              variant="rounded"
             
        
              width={255}
              height={301}
            />
            <Skeleton
              variant="rounded"
        
             
              width={255}
              height={301}
            />
            
          </div>
        </div>
      </div>
    </Stack>
  );
}
