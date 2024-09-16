import { FooterComponentProps } from "./footer.model";
import SocialNetworkComponent from "../social-network/social-network";
import { NavigationMenu, NavigationMenuList } from "@editorials/ui/server";
import AppearComponent from "../appear/appear";
import { getScopedI18n } from "../../../locales/server";

const FooterComponent = async ({ socialNetworks }: FooterComponentProps) => {
  const scopedT = await getScopedI18n('footer')
  const hasSocialNetwork = socialNetworks && socialNetworks.length > 0;

  return (
    <footer
      className="container-mobile">
      <AppearComponent>
        <div
          className="mx-auto flex flex-col sm:flex-row-reverse py-2 max-w-[900px] sm:items-center justify-between gap-2">
          {hasSocialNetwork && (
            <NavigationMenu>
              <NavigationMenuList>
                {socialNetworks.map((socialNetwork, index) => <SocialNetworkComponent key={index}
                                                                                      socialNetwork={socialNetwork} />)}
              </NavigationMenuList>
            </NavigationMenu>
          )}
          <div className="text-sm">
            {scopedT('copyright')}
          </div>
        </div>
      </AppearComponent>
    </footer>
  );
};

export default FooterComponent;
