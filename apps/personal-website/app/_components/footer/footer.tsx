import { FooterComponentProps } from "./footer.model";
import styles from "./footer.module.css";
import SocialNetworkComponent from "../social-network/social-network";
import { NavigationMenu, NavigationMenuList } from "@editorials/ui/server";

const FooterComponent = ({ copyright, socialNetworks }: FooterComponentProps) => {
  const hasSocialNetwork = socialNetworks && socialNetworks.length > 0;

  return (
    <footer
      className="container-mobile mx-auto flex h-14 max-w-[900px] items-center justify-between">
      <div>
        {copyright}
      </div>
      {hasSocialNetwork && (
        <NavigationMenu>
          <NavigationMenuList>
            {socialNetworks.map((socialNetwork, index) => <SocialNetworkComponent key={index} socialNetwork={socialNetwork} />)}
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </footer>
  );
};

export default FooterComponent;
