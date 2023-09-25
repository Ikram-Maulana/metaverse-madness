import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import localFont from "next/font/local";

const eudoxus = localFont({
  src: [
    {
      path: "./fonts/EudoxusSans-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/EudoxusSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/EudoxusSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/EudoxusSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/EudoxusSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/EudoxusSans-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={eudoxus.className}>
      <body className="min-h-screen antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
