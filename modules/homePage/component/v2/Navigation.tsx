import type { FunctionComponent } from "react";
import links from "../../../../utils/links";
import LogoV2 from "../../../../uikit/layout/LogoV2";
import Button from "../../../../uikit/buttonV2/Button";

/**
 * NavigationProps is a React Component properties that passed to React Component Navigation
 */
type NavigationProps = {};

/**
 * Navigation is just yet another react component
 *
 * @link https://fettblog.eu/typescript-react/components/#functional-components
 */
const Navigation: FunctionComponent<NavigationProps> = ({}) => {
    return (
        <div className="fixed inset-x-0 z-40 bg-dark-background-default/90 py-4 backdrop-blur-lg">
            <div className="mx-auto flex max-w-[343px] flex-row items-center justify-between sm:max-w-[552px] lg:max-w-[936px] xl:max-w-[1128px]">
                {/* Left Side */}
                <div className="flex flex-row gap-11">
                    <LogoV2 />
                    <a href={links.docs} target="_blank" rel="noreferrer noopener" className="paragraph-s hidden text-dark-neutral-medium sm:inline-block">
                        Docs
                    </a>
                    <a href={links.discord} target="_blank" rel="noreferrer noopener" className="paragraph-s hidden text-dark-neutral-medium sm:inline-block">
                        Discord
                    </a>
                    <a href={links.twitter} target="_blank" rel="noreferrer noopener" className="paragraph-s hidden text-dark-neutral-medium sm:inline-block">
                        Twitter
                    </a>
                </div>

                {/* Right Side */}
                <div className="flex flex-row items-start gap-2">
                    {/* Search Bar */}
                    {/* <div className="flex flex-row items-center gap-[90px] rounded-full bg-light-neutral-subtle/10 p-2 pl-4">
                        <div className="flex flex-row items-center gap-2">
                            <img src={Search} alt="search_logo" />
                            <input type="text" placeholder="Search token name or symbol..." className="paragraph-s bg-transparent text-dark-neutral-primary outline-none" />
                        </div>
                        <div className="flex flex-row items-start gap-1">
                            <div className="flex h-6 w-6 items-center justify-center gap-2.5 rounded-lg bg-dark-background-elevated p-2">
                                <img src={Command} alt="command_logo" />
                            </div>
                            <div className="flex h-6 w-6 items-center justify-center gap-2.5 rounded-lg bg-dark-background-elevated p-2">
                                <img src={Slash} alt="slash_logo" />
                            </div>
                        </div>
                    </div> */}

                    {/* Button for desktop */}
                    <Button variant="secondary" type="default" size="md" className="hidden sm:flex">
                        Launch Risedle
                    </Button>

                    {/* Button for mobile */}
                    <Button variant="secondary" type="default" size="md" className="sm:hidden">
                        Launch
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
