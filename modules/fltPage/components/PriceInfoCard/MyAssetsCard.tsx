import { ethers } from "ethers";
import type { FunctionComponent } from "react";
import { useLeveragedTokenNAV } from "../../../../components/v1/swr/useLeveragedTokenNAV";
import { useTokenBalance } from "../../../../components/v1/swr/useTokenBalance";
import { useVaultExchangeRate } from "../../../../components/v1/swr/useVaultExchangeRate";
import { getProvider, useWalletContext } from "../../../../components/v1/Wallet";
import { InformationCard } from "../../../../uikit/card/FLTInformationCard";
import { tokenBalanceFormatter } from "../../../../utils/formatters";
import { AssetsItem } from "../../../tokenPage/component/AssetsItem";
import { Metadata } from "../../../tokenPage/component/MarketMetadata";

/**
 * MyAssetsCardProps is a React Component properties that passed to React Component MyAssetsCard
 */
type MyAssetsCardProps = {
    chainID: number;
    address: string;
    isVault?: boolean;
};

// }

/**
 * MyAssetsCard is just yet another react component
 *
 * @link https://fettblog.eu/typescript-react/components/#functional-components
 */
const MyAssetsCard: FunctionComponent<MyAssetsCardProps> = ({ address, isVault = false, chainID }) => {
    const { account, chain } = useWalletContext();
    const provider = getProvider({ chainId: chainID });
    const metadata = Metadata[chainID][address];

    // Read on-chain data
    const navResponse = useLeveragedTokenNAV({ token: address, vault: metadata.vaultAddress, provider: provider });
    const latestVaultExchangeRateResponse = useVaultExchangeRate({ vault: metadata.vaultAddress, provider: provider });
    const balanceResponse = useTokenBalance({ account: account, token: isVault ? metadata.vaultAddress : address, provider: provider });

    // Data
    const nav = parseFloat(ethers.utils.formatUnits(navResponse.data ? navResponse.data : 0, metadata.debtDecimals));
    const latestVaultExchangeRate = parseFloat(ethers.utils.formatUnits(latestVaultExchangeRateResponse.data ? latestVaultExchangeRateResponse.data : 0, metadata.collateralDecimals));
    const balance = parseFloat(ethers.utils.formatUnits(balanceResponse.data ? balanceResponse.data : 0, isVault ? metadata.debtDecimals : metadata.collateralDecimals));
    const value = (isVault ? latestVaultExchangeRate : nav) * balance;

    // UI states
    const showLoading = navResponse.isLoading || balanceResponse.isLoading ? true : false;
    const showError = navResponse.error || balanceResponse.error ? true : false;
    const showData = !showLoading && !showError && navResponse.data && balanceResponse.data ? true : false;
    if (balance > 0) {
        return (
            <div className="mx-4 border-t border-dashed border-gray-light-5 pt-6 dark:border-gray-dark-5">
                <div className="grid grid-cols-2 gap-6">
                    <AssetsItem icon="balance" title="Token Balance" value={`${tokenBalanceFormatter.format(balance)}`} showData={showData} showLoading={showLoading || showError} />
                    <AssetsItem icon="value" title="Value" value={`${tokenBalanceFormatter.format(value)}`} showData={showData} showLoading={showLoading || showError} />
                    <AssetsItem icon="return" title="Open P/L" value={`-`} showData={showData} showLoading={showLoading || showError} />
                    <AssetsItem icon="returnUSD" title="Return" value={`-`} showData={showData} showLoading={showLoading || showError} />
                </div>
            </div>
        );
    }
    return null;
};

export default MyAssetsCard;
