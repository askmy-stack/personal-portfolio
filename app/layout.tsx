import type { Metadata } from "next";
import { DM_Serif_Display, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NoiseTexture from "@/components/NoiseTexture";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhinaysai Kamineni | Data Science & MLOps Engineer",
  description:
    "Turning Data into Scalable Intelligence. Data Science graduate student at GWU, specializing in MLOps, Cloud-Native Systems, and Deep Learning.",
  openGraph: {
    type: "website",
    url: "https://abhinaysai.dev",
    title: "Abhinaysai Kamineni | Data Science & MLOps Engineer",
    description:
      "Turning Data into Scalable Intelligence. Data Science graduate student at GWU, specializing in MLOps, Cloud-Native Systems, and Deep Learning.",
    siteName: "Abhinaysai Kamineni Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhinaysai Kamineni | Data Science & MLOps Engineer",
    description:
      "Turning Data into Scalable Intelligence. Data Science graduate student at GWU, specializing in MLOps, Cloud-Native Systems, and Deep Learning.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSerifDisplay.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-[family-name:var(--font-heading)] bg-[var(--bg)] text-[var(--fg)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abhinaysai Kamineni",
              url: "https://abhinaysai.dev",
              jobTitle: "Data Science & MLOps Engineer",
              email: "mailto:kamineniabhinaysai@gmail.com",
              sameAs: [
                "https://linkedin.com/in/abhinaysai-kamineni",
                "https://github.com/askmy-stack",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "The George Washington University",
              },
              knowsAbout: [
                "Data Engineering",
                "MLOps",
                "Cloud Infrastructure",
                "Machine Learning",
                "Deep Learning",
                "Kubernetes",
                "Terraform",
                "Apache Spark",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Arlington",
                addressRegion: "VA",
                addressCountry: "US",
              },
            }),
          }}
        />
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <NoiseTexture />
          <CustomCursor />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-[var(--bg)] focus:rounded"
          >
            Skip to main content
          </a>
          <ScrollProgress />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
