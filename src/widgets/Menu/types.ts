import { Login } from "../WalletModal/types";

export interface Language {
  code: string;
  language: string;
  locale: string;
}

export interface Profile {
  username?: string;
  image?: string;
  profileLink: string;
  noProfileLink: string;
  showPip?: boolean;
}

export interface PushedProps {
  isPushed: boolean;
  pushNav: (isPushed: boolean) => void;
}

export interface NavTheme {
  background: string;
  backgroundSidebar: string;
  backgroundFooter: string;
  hover: string;
}

export interface MenuSubEntry {
  label: string;
  href: string;
  target?: string;
  calloutClass?: string;
}

export interface MenuEntry {
  label: string;
  icon: string;
  items?: MenuSubEntry[];
  href?: string;
  target?: string;
  calloutClass?: string;
  initialOpenState?: boolean;
}

export interface PanelProps {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  cakePriceUsd?: number;
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
  links: Array<MenuEntry>;
}

export interface NavProps extends PanelProps {
  account?: string;
  login: Login;
  profile?: Profile;
  logout: () => void;
  explorerUrl: string;
  explorerText: string;
  connectUrl?: string;
}
