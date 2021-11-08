import React from "react";
import styled, { css } from "styled-components";
import { size, SizeProps, space, SpaceProps } from "styled-system";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
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

const StyledWalletWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${space}
  ${size}
`;

const StyledWalletButton = styled(Button)<{ isNarrow?: boolean }>`
  color: white;
  background-color: ${({ theme }) => theme.colors.backgroundWallet};
  padding: 0 0.33rem;
  height: ${({ isNarrow }) => (isNarrow ? "50px" : "35px")};
  ${({ isNarrow }) =>
    isNarrow
      ? css`
          height: 50px;
        `
      : css`
          height: 35px;
          margin-right: 0.75em;
        `}
`;

const UserBlock = (props: UserBlockProps) => {
  const { account, login, logout, isDark, isNarrow, explorerUrl, explorerText, connectUrl, ...rest } = props;
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    login,
    logout,
    explorerUrl,
    explorerText,
    connectUrl,
    account
  );
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <StyledWalletWrapper {...rest}>
      {account ? (
        <StyledWalletButton
          isNarrow={isNarrow}
          size="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </StyledWalletButton>
      ) : (
        <StyledWalletButton
          size="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </StyledWalletButton>
      )}
    </StyledWalletWrapper>
  );
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);
