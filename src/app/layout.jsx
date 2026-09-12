import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import "./globals.css";

export const metadata = {
  title: "Srujana Deshpande | Full Stack & .NET Developer",
  description:
    "Official portfolio of Srujana Deshpande. Full Stack Web Developer, C# & .NET Intern at Saatvik Solutions, Product Developer, UI/UX Enthusiast, and Digital Marketer based in Bengaluru, India.",
  keywords: [
    "Srujana Deshpande",
    "Full Stack Web Developer",
    "C# Developer",
    ".NET Developer",
    "Saatvik Solutions",
    "Yuvamytr",
    "UI/UX Design",
    "Digital Marketing",
    "React",
    "Next.js",
    "Bengaluru Engineer"
  ],
  authors: [{ name: "Srujana Deshpande" }],
  openGraph: {
    title: "Srujana Deshpande | Full Stack & .NET Developer",
    description:
      "Explore projects, work experience, technical skills, C#/.NET engineering, and digital solutions of Srujana Deshpande.",
    url: "https://portfolio-srujanadeshpande84-gmailcoms-projects.vercel.app/",
    siteName: "Srujana Deshpande Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srujana Deshpande | Full Stack & .NET Developer",
    description: "Full Stack & .NET Engineering, UI/UX & Digital Growth.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth font-sans">
      <head>
        {/* Anti-flash script for dark theme default */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--text-secondary)] antialiased selection:bg-[var(--accent)] selection:text-white transition-colors duration-300">
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
