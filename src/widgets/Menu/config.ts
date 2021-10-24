export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Buy TUNDRA",
        href: "https://app.pangolin.exchange/#/swap?outputCurrency=0x21c5402C3B7d40C89Cc472C9dF5dD7E51BbAb1b1",
      },
      {
        label: "TUNDRA liquidity",
        href: "https://app.pangolin.exchange/#/add/AVAX/0x21c5402c3b7d40c89cc472c9df5dd7e51bbab1b1",
      },
      {
        label: "Buy EXP",
        href: "https://app.pangolin.exchange/#/swap?outputCurrency=0xf57b80A574297892B64E9a6c997662889b04a73a",
      },
      {
        label: "EXP liquidity",
        href: "https://app.pangolin.exchange/#/add/0xc7198437980c041c805a1edcba50c1ce5db95118/0xf57b80a574297892b64e9a6c997662889b04a73a",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/exppools",
  },
  {
    label: "Raffles",
    icon: "TicketIcon",
    href: "/raffles",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Chart TUNDRA",
        href: "https://chartex.pro/?symbol=AVAX_PANGOLIN%3ATUNDRA.0x0a081F54d81095D9F8093b5F394Ec9b0EF058876&interval=5&theme=dark",
      },
      {
        label: "Chart EXP",
        href: "https://chartex.pro/?symbol=AVAX_PANGOLIN%3AEXP%2FUSDTe.0x5a615108E682D71E9726c7c1567f7DF968F54BA0&interval=60&theme=dark",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Docs",
        href: "https://frostfinance.gitbook.io/frost-finance/",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://mobile.twitter.com/frost_fi/",
  },
  {
    label: "Telegram",
    icon: "TelegramIcon",
    href: "https://t.me/frostfinance",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const MENU_BOTTOM_ENTRY_HEIGHT = 20;
export const PRICE_ENTRY_HEIGHT = 42;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 76;
