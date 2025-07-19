import { useState } from "react";
import MainLayout from "../../Layout/MainLayout";
import Banner from "./components/Banner";
import CardItems from "./components/CardItems";
import Cta from "../../components/Cta";
import ESATake from "./components/ESATake";
import ESAQuestion from "./components/ESAQuestions";
import ESAStarter from "./components/ESAStarter";
import TrustCompliance from "./components/TrustCompliance";
import ESAHelperSupport from "./components/ESAHelperSupport";
import HowITWork from "./components/HowITWork";
import FamilyLove from "./components/FamilyLove";
import CardCheckBox from "../../components/CardCheckBox";

export const Home = () => {
  const [showCardCheckBox, setShowCardCheckBox] = useState(false);

  return (
    <MainLayout>

      <Banner onShowCard={() => setShowCardCheckBox(true)}  />

      {showCardCheckBox ? (
        <CardCheckBox />
      ) : (
        <>
          <CardItems />
          <Cta />
          <ESATake />
          <ESAQuestion />
          <ESAStarter />
          <TrustCompliance />
          <HowITWork />
          <ESAHelperSupport />
          <FamilyLove />
        </>
      )}
    </MainLayout>
  );
};
