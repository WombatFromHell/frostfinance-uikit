import React from "react";
import { SizeProps, SpaceProps } from "styled-system";
import { Login } from "../../WalletModal/types";
interface UserBlockProps extends SpaceProps, SizeProps {
    account?: string;
    isDark?: boolean;
    login: Login;
    logout: () => void;
    explorerUrl: string;
    explorerText: string;
    connectUrl?: string;
    isNarrow?: boolean;
}
declare const _default: React.MemoExoticComponent<(props: UserBlockProps) => JSX.Element>;
export default _default;
