import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
}

const useWalletModal = (
  login: Login,
  logout: () => void,
  explorerUrl: string,
  explorerText: string,
  account?: string,
  connectUrl?: string
): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} connectUrl={connectUrl} />);
  const [onPresentAccountModal] = useModal(
    <AccountModal account={account || ""} logout={logout} explorerUrl={explorerUrl} explorerText={explorerText} />
  );
  return { onPresentConnectModal, onPresentAccountModal };
};

export default useWalletModal;
