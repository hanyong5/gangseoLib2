import React, { useEffect } from "react";
import a8 from "../../assets/icons/Component 10.svg";
import a9 from "../../assets/icons/Component 11.svg";
import a10 from "../../assets/icons/Component 12.svg";
import a11 from "../../assets/icons/Component 13.svg";
import a1 from "../../assets/icons/Component 3.svg";
import a2 from "../../assets/icons/Component 4.svg";
import a3 from "../../assets/icons/Component 5.svg";
import a4 from "../../assets/icons/Component 6.svg";
import a5 from "../../assets/icons/Component 7.svg";
import a6 from "../../assets/icons/Component 8.svg";
import a7 from "../../assets/icons/Component 9.svg";
import { SubBackWrap } from "../../components/Layout/BackWrap";
import Title from "../../components/Layout/Title";
import { DepthTopMenu } from "../../components/Layout/TopMenu";
import LibaboutBtn from "../../components/LibaboutBtn";
import AudioPlayer from "../../components/AudioPlayer";

function libabout() {
  const menuList = [
    { title: "자료기증 관련 안내", icon: a1, link: "/Donation" },
    { title: "와이파이 안내", icon: a2, link: "/Wifi" },
    { title: "희망도서 신청 안내", icon: a3, link: "/bookrequest" },
    { title: "택배 대출 서비스", icon: a4, link: "/DeliveryLoan" },
    { title: "사물함 안내", icon: a5, link: "/Locker" },
    { title: "대출증, 회원증 안내", icon: a6, link: "/MembershipCard" },
    { title: "복사, 인쇄, 출력, 스캔", icon: a7, link: "/Printing" },
    { title: "식당, 매점 운영 안내", icon: a8, link: "/Cafeteria" },
    { title: "프로그램 안내", icon: a9, link: "/Program" },
    { title: "주차장 이용 안내", icon: a10, link: "/Parking" },
    { title: "시설 이용 안내", icon: a11, link: "/FacilityUse" },
  ];

  return (
    <>
      {/* AudioPlayer 컴포넌트를 호출하여 오디오 재생 시작 */}
      <AudioPlayer src="/audio/01audio_output.mp3" />

      <SubBackWrap>
        <DepthTopMenu />
        <div className="conWrap">
          <Title>도서관 안내</Title>
          <div className="libabout">
            <div className="libContainer">
              {menuList.map((item, idx) => {
                return (
                  <LibaboutBtn
                    key={idx}
                    item={item}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </SubBackWrap>
    </>
  );
}

export default libabout;
