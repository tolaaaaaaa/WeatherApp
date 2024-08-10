import '../app/globals.css';

export const metadata = {
  title: 'אפליקציית מזג אוויר',
  description: 'אפליקציית מזג אוויר על ידי שחף שומרוני',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir='rtl'>
      <body>{children}</body>
    </html>
  );
}
