import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import NavBar from "./component/NavBar/NavBar.jsx";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <Providers>
          <NavBar/>
          {children}</Providers>
      </body>
    </html>
  );
}
