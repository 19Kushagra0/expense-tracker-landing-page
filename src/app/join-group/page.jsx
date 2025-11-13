"use client";

import { Suspense } from "react";
import JoinGroup from "@/app/join-group/components/Join-group";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <JoinGroup />
    </Suspense>
  );
}
