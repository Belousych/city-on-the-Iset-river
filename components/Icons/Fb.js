import * as React from "react";
import { memo } from "react";

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props} viewBox="0 0 32 32">
    <path
      d="M7 5c-1.094 0-2 .906-2 2v18c0 1.094.906 2 2 2h18c1.094 0 2-.906 2-2V7c0-1.094-.906-2-2-2Zm0 2h18v18h-5.188v-6.75h2.594l.375-3h-2.968v-1.938c0-.874.214-1.468 1.468-1.468h1.625V9.125c-.277-.035-1.238-.094-2.343-.094-2.305 0-3.875 1.387-3.875 3.969v2.25h-2.625v3h2.624V25H7Z"
      fill="currentColor"
    />
  </svg>
);

const Memo = memo(SvgComponent);
export default Memo;
