// import "../styles/globals.css";

export const metadata = {
  title: "Dreadmyst Trading",
  description: "Community trading for Dreadmyst"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
