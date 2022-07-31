import React from "react";

import { useNavigate } from "react-router-dom";
import { Stack, Img } from "components";

const SplashPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/frontpage");
  }

  return (
    <>
      <Stack
        className="common-pointer bg-light_blue_800 h-[1080px] lg:h-[637px] xl:h-[729px] 2xl:h-[820px] 3xl:h-[983px] mx-[auto] lg:px-[107px] xl:px-[123px] 2xl:px-[138px] 3xl:px-[166px] px-[183px] w-[100%]"
        onClick={handleNavigate1}
      >
        <Img
          src="images/img_tsp3.png"
          className="absolute lg:h-[211px] xl:h-[241px] 2xl:h-[271px] 3xl:h-[325px] h-[357px] inset-x-[0] mx-[auto] top-[0] w-[37%]"
          alt="TSPThree"
        />
      </Stack>
    </>
  );
};

export default SplashPagePage;
