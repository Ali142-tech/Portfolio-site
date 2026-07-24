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

const templateStyles = [
  "/assets/css/flaticon.min.css",
  "/assets/css/fontawesome-5.14.0.min.css",
  "/assets/css/bootstrap.min.css",
  "/assets/css/animate.min.css",
  "/assets/css/slick.min.css",
  "/assets/css/style.css",
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {templateStyles.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
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
