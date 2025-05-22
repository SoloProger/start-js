import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import theme from "../theme";
import "./globals.css";

const robotoFont = Roboto({
  variable: "--roboto-font",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JavaScript Starter",
  description: "Generate js app with params",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={robotoFont.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
