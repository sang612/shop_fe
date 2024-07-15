import { UserButton } from "@clerk/nextjs";
import { Carousel } from "../../components/Carousel";
import { FirstActicle } from "../../components/FirstActicle";
import { ShopNow } from "../../components/ShopNow";

export default function Home() {
  return (
    <div>
      {/* <UserButton/> */}
      <Carousel />
      <FirstActicle />
      <ShopNow />
    </div>
  );
}
