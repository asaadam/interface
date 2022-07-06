import { FunctionComponent } from "react";

type TokenBalanceIconProps = {
    type: "bsc" | "arb";
};

/**
 * React Component to render OpenGraph website
 */
const TokenBalanceIcon: FunctionComponent<TokenBalanceIconProps> = ({ type }) => {
    return (
        <svg className={type === "bsc" ? "fill-amber-light-9 dark:fill-amber-dark-9" : "fill-violet-light-10 dark:fill-violet-dark-10"} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2V10H18C18 12.1217 17.1571 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18C7.87827 18 5.84344 17.1571 4.34315 15.6569C2.84285 14.1566 2 12.1217 2 10V10Z" />
            <path d="M12 2.25201C13.3836 2.61048 14.6462 3.33246 15.6569 4.34313C16.6676 5.35381 17.3895 6.61639 17.748 8.00001H12V2.25201Z" />
        </svg>
    );
};

export default TokenBalanceIcon;
