import { ThemeProvider } from "./theme";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./globalcomponents/header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web & Frontend Developer | Juross Madrid",
  description: "My Works and Web Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
          <div className="flex min-h-screen w-full flex-col">    
            <Header />  
              <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 content-main-width">          
                {children}
              </div>  
          </div>
        </ThemeProvider> 
      </body>
    </html>
  );
}
