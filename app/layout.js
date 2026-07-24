import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export const metadata = {
  title: "Muhammad Ali Butt - Full Stack Developer",
  description:
    "Portfolio of Muhammad Ali Butt — Full Stack Developer specializing in React.js, Laravel, PHP, MERN, and MySQL.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="home-one">
        <div className="page-wrapper">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
