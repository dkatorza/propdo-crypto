import { Logo } from './Logo';
import { Sidebar } from './Sidebar';

export const Header = () => {
  return (
    <nav>
      <Sidebar />
      <Logo />
    </nav>
  );
};
