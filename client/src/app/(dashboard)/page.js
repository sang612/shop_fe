import { UserButton } from "@clerk/nextjs";
import { Carousel } from "../../components/Carousel";
import { FirstActicle } from "../../components/FirstActicle";
import { ShopNow } from "../../components/ShopNow";
import { Acticles } from "../../components/Acticles";
import { OurIG } from "../../components/OurIG";

export default function Home() {
  return (
    <div>
      {/* <UserButton/> */}
      {/* <Carousel /> */}
      <FirstActicle />
      <ShopNow />
      <Acticles />
      <OurIG />
    </div>
  );
}
