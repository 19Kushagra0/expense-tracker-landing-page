import { Suspense } from "react";
import JoinGroup from "./components/Join-group";

export default function Page() {
  return (
    <Suspense fallback={<div></div>}>
      <JoinGroup />
    </Suspense>
  );
}
