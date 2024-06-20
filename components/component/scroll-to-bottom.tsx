"use client";

import React, { useEffect } from "react";

export default function ScrollToBottom({ children }: React.PropsWithChildren) {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [children]);

  return <div>{children}</div>;
}
