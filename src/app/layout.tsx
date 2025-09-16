import "./globals.css";
import { ThemeProvider } from "../components/ThemeContext";

export const metadata = {
  title: "Cartolinks Task",
  description: "Replicating the UI with slider + theme toggle",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}