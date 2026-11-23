import type { Metadata } from "next";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppDrawer from "@/components/WhatsAppDrawer";

export const metadata: Metadata = {
  title: "Insta Skin Clinic | Skin, Laser & Hair Clinic Gujranwala | 4.9 ★",
  description:
    "Insta Skin Clinic is Gujranwala's premier aesthetic dermatology, medical laser, and hair restoration clinic on Kashmir Rd, Peoples Colony. Rated 4.9 ★ based on 139 Google Reviews.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#FAF8F5] text-[#1F2421] font-sans antialiased selection:bg-[#B08968] selection:text-[#FAF8F5] min-h-screen flex flex-col justify-between">
        <div>
          <AnnouncementBar />
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
        <WhatsAppDrawer />
      </body>
    </html>
  );
}
