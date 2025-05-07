import { QueryClient } from "@tanstack/react-query";

// Simplified query client for static site with no server-side dependencies
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
      // No queryFn for static site
    },
    mutations: {
      retry: false,
    },
  },
});

// Mock API request function for static sites
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  console.log(`Static site mock: ${method} ${url}`, data);
  
  // Return a mock successful response
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
