import { Suspense } from "react";
import JoinGroup from "./JoinGroup";
import React from "react";

export default function Page({ searchParams = {} }) {
  return (
    <Suspense fallback={null}>
      <JoinGroup groupName={searchParams.groupName} />
    </Suspense>
  );
}
