"use client";

import { ProviderStore } from "@/store/ProviderStore";
import { NextUIProvider } from "@nextui-org/react";

//Wrap the application with NextUIProvider and ProviderStore
export function Providers({ children }) {
  return (
    <NextUIProvider>
      <ProviderStore>{children}</ProviderStore>
    </NextUIProvider>
  );
}
