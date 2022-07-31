import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Stack, Img, Text, Row } from "components";

const FrontPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate13() {
    navigate("/login");
  }
  function handleNavigate14() {
    navigate("/signup");
  }
  function handleNavigate15() {
    navigate("/mainpagenoaccount");
  }

  return (
    <>
      <Column className="bg-light_blue_800 font-inter items-center justify-end mx-[auto] lg:p-[103px] xl:p-[118px] 2xl:p-[133px] 3xl:p-[160px] p-[176px] w-[100%]">
        <Column className="items-end xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] w-[81%]">
          <Stack className="lg:h-[293px] xl:h-[336px] 2xl:h-[377px] 3xl:h-[453px] h-[497px] w-[100%]">
            <Img
              src="images/img_tsp3.png"
              className="absolute lg:h-[211px] xl:h-[241px] 2xl:h-[271px] 3xl:h-[325px] h-[357px] left-[24%] top-[0] w-[45%]"
              alt="TSPThree"
            />
            <Text className="absolute bottom-[0] font-normal leading-[normal] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-center text-white_A701 w-[100%]">
              Welcome to The Saving Portal Login or Sign up
            </Text>
          </Stack>
        </Column>
        <Row className="items-center justify-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] w-[40%]">
          <Row
            className="common-pointer bg-teal_A400 border border-gray_500 border-solid items-center justify-end lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] p-[5px] rounded-radius23 w-[39%]"
            onClick={handleNavigate13}
          >
            <Text className="font-normal my-[3px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-black_900 w-[auto]">
              Login
            </Text>
            <Img
              src="images/img_home_green_200.png"
              className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] h-[25px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] ml-[26px] w-[7%]"
              alt="home"
            />
          </Row>
          <Row
            className="common-pointer bg-lime_A700 border border-gray_500 border-solid items-center justify-end 2xl:ml-[100px] 3xl:ml-[121px] ml-[133px] lg:ml-[78px] xl:ml-[89px] lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] p-[5px] rounded-radius23 w-[39%]"
            onClick={handleNavigate14}
          >
            <Text className="font-normal my-[3px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-black_900 w-[auto]">
              Signup
            </Text>
            <Img
              src="images/img_home_green_200.png"
              className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] h-[25px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] w-[7%]"
              alt="home One"
            />
          </Row>
        </Row>
        <Column className="items-end lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[76px] mt-[84px] lg:px-[297px] xl:px-[340px] 2xl:px-[383px] 3xl:px-[459px] px-[505px] w-[81%]">
          <Row
            className="common-pointer bg-yellow_900 border border-gray_500 border-solid items-center justify-end lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] p-[5px] rounded-radius23 w-[100%]"
            onClick={handleNavigate15}
          >
            <Text className="font-normal my-[3px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-black_900 w-[auto]">
              Guest Mode
            </Text>
            <Img
              src="images/img_home_green_200.png"
              className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] h-[25px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] w-[7%]"
              alt="home Two"
            />
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default FrontPagePage;
