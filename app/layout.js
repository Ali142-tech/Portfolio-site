import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export const metadata = {
  title: "Muhammad Ali Butt - Full Stack Developer",
  description:
    "Portfolio of Muhammad Ali Butt — Full Stack Developer specializing in React.js, Laravel, PHP, MERN, and MySQL.",
};

const themeInitScript = `
(function () {
  try {
    var key = "portfolio-theme";
    var saved = localStorage.getItem(key);
    var theme = saved === "light" || saved === "dark"
      ? saved
      : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="home-one" suppressHydrationWarning>
        <div className="page-wrapper">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
