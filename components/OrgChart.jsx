"use client";

import Image from "next/image";
import { Tree, TreeNode } from "react-organizational-chart";

export default function OrgChart() {
  const nodeStyle =
    "px-6 py-3 rounded-xl bg-slate-800 text-white font-semibold shadow-md min-w-[250px] text-center";

  return (
    <div className="w-full bg-white py-20 overflow-x-hidden">
      <div className="w-full flex justify-center">
        <Tree
          label={<div className={nodeStyle}>CareHolding S.p.A.</div>}
          lineColor="#6b7280"
          lineWidth="2px"
          lineBorderRadius="10px"
        >
          <TreeNode label={
            <div className="flex flex-col justify-center items-center">
                <Image src="/assets/logo/logo.png" width={200} height={200} className="object-contain"/> 
                CareisGold S.p.A.
            </div>
            }/>
          <TreeNode label={<div className={nodeStyle}>CareisLife S.p.A.</div>} />
        </Tree>
      </div>
    </div>
  );
}
