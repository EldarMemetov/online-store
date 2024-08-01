import { AboutMarket } from "../AboutMarket/AboutMarket";
import { ExpertAbout } from "../ExpertAbout/ExpertAbout";
import { HeroAboutMain } from "../HeroAboutMain/HeroAboutMain";
import { OfferAbout } from "../OfferAbout/OfferAbout";
import { UsAbout } from "../UsAbout/UsAbout";

export function AboutAllCommand() {
  return (
    <>
      <main>
        <HeroAboutMain />
        <UsAbout />
        <AboutMarket />
        <ExpertAbout />
        <OfferAbout />
      </main>
    </>
  );
}
