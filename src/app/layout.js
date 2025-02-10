import "./globals.css";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "School Education",
  description: "this is site for school",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
