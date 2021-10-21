import { Login } from "./types";
interface ReturnType {
    onPresentConnectModal: () => void;
    onPresentAccountModal: () => void;
}
declare const useWalletModal: (login: Login, logout: () => void, explorerUrl: string, explorerText: string, account?: string | undefined) => ReturnType;
export default useWalletModal;
