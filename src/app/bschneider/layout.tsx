import { NavbarBschneider } from '@/components/bschneider/navbarbs';
import FooterBschneider from '@/components/bschneider/footerbs';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavbarBschneider />
      {children}
      <FooterBschneider />
    </div>
  );
}
