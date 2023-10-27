import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/contexts/auth-context";
import { CardProvider } from "@/contexts/cartContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Roboto } from "next/font/google";
import toast, { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <CardProvider>
            <>
              <Navbar></Navbar>
              <Component {...pageProps} />
            </>
          </CardProvider>
        </AuthProvider>
      </QueryClientProvider>
      <Toaster />
    </>
  );
}
