import React from "react";
import BillboardClient from "./billboard-client.tsx/page";

export default function BillboardPage() {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient />
      </div>
    </div>
  );
}
