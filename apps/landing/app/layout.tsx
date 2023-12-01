import './global.css';

export const metadata = {
  title: 'eRetail Labs',
  description: 'Bem vindo a eRetail Labs, especialistas no varejo online!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
