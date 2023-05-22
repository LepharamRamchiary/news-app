import "@/styles/globals.css";
import Head from "./head";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // dark:bg-zinc-900
    <html>
      <Head />
      <body className="bg-gray-100  transition-all duration-700">
        <Header />
        <div className="max-w-6xl mx-auto" >{children}</div>
      </body>
    </html>
  );
}
