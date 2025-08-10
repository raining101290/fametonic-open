import { Figtree } from 'next/font/google'
import "./globals.css";

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-figtree',
})

export const metadata = {
  title: ".: Fametonic :.",
  description: "Description of Fametonic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
