import "./globals.css";

export const metadata = {
  title: "Search Pokemon Api",
  description: "Searching pokemon app using pokeapi and nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
