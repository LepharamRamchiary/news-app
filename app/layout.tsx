
import "@/styles/globals.css";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <Head />
      </head>
      <body>{children}</body>
    </html>
  );
}

