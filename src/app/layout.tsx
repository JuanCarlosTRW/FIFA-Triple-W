import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/outfit/300.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Triple W Rentals | FIFA World Cup 2026 RV Rental — Dallas, TX",
  description:
    "Skip sold-out hotels. Rent a premium RV delivered to you for the FIFA World Cup 2026 at Dallas Stadium. 20 units. Nationwide delivery. Reserve now.",
  keywords:
    "RV rental World Cup Dallas, FIFA 2026 accommodation, AT&T Stadium lodging, Dallas World Cup RV, RV rental Arlington TX",
  openGraph: {
    title: "Your World Cup Headquarters. Delivered. | Triple W Rentals",
    description:
      "Premium RVs delivered and set up for FIFA World Cup 2026 in Dallas. Skip $1,000/night hotels. Limited fleet — reserve your dates now.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body bg-charcoal text-cream antialiased">
        {children}
      </body>
    </html>
  );
}
