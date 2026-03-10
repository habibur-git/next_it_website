"use client";

import { SWRConfig } from "swr";

export interface SWRError extends Error {
  info?: any;
  status?: number;
}

export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher: async (resource: string, init?: RequestInit) => {
          const res = await fetch(resource, init);

          if (!res.ok) {
            const error = new Error("An error occurred while fetching.") as SWRError;
            
            error.info = await res.json();
            error.status = res.status;
            
            throw error;
          }

          return res.json();
        },
        revalidateOnFocus: false,
        dedupingInterval: 10000,
      }}
    >
      {children}
    </SWRConfig>
  );
};