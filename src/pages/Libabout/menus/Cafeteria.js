import React from "react";
import SwiperComponent from "../../../components/Contents/SwiperComponent";
import { SubBackWrap } from "../../../components/Layout/BackWrap";
import { SubTopMenu } from "../../../components/Layout/TopMenu";
import RestaurantData from "../datas/Cafeteria/RestaurantData";
import StoreData from "../datas/Cafeteria/StoreData";
import AudioPlayer from "../../../components/AudioPlayer";
const pageData = [
  {
    title: "식당 안내",
    description: "식당에 대한 설명입니다.",
    ContentsData: <RestaurantData />,
  },
  {
    title: "매점 안내",
    description: "매점에 대한 설명입니다.",
    ContentsData: <StoreData />,
  },
];
const tabs = ["식당 안내", "매점 안내"];

function Cafeteria() {
  return (
    <SubBackWrap>
      <AudioPlayer src="/audio/09audio_output.mp3" />
      <SubTopMenu />
      <div className="subContentWrap">
        <SwiperComponent
          mainTitle={"식당, 매점 운영 안내"}
          tabs={tabs}
          data={pageData}
        />
      </div>
    </SubBackWrap>
  );
}

export default Cafeteria;
