import Metamask from "./icons/Metamask";
import WalletConnect from "./icons/WalletConnect";
// import Coin98Wallet from "./icons/Coin98Wallet";
// import Coinbase from "./icons/Coinbase";
import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
    priority: 1,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
    priority: 2,
  },
  // {
  //   title: "Coin98 Wallet",
  //   icon: Coin98Wallet,
  //   connectorId: ConnectorNames.Coin98,
  // },
  // {
  //   title: "Coinbase Wallet",
  //   icon: Coinbase,
  //   connectorId: ConnectorNames.WalletLink,
  // },
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";
