import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Stack, Img, Text, Row } from "components";

const LoginPage = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    navigate("/mainpagewithaccount");
  }

  return (
    <>
      <Column
        className="common-pointer bg-light_blue_800 font-inter items-center mx-[auto] lg:p-[45px] xl:p-[51px] 2xl:p-[58px] 3xl:p-[70px] p-[77px] w-[100%]"
        onClick={handleNavigate2}
      >
        <Stack className="lg:h-[201px] xl:h-[230px] 2xl:h-[258px] 3xl:h-[310px] h-[340px] w-[26%]">
          <Img
            src="images/img_tsp3.png"
            className="absolute lg:h-[136px] xl:h-[156px] 2xl:h-[175px] 3xl:h-[210px] h-[230px] top-[0] w-[100%]"
            alt="TSPThree"
          />
          <Text className="absolute bottom-[0] font-normal leading-[normal] right-[12%] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-white_A701 w-[67%]">
            Login to find your personalized deals
          </Text>
        </Stack>
        <Column className="items-center lg:mb-[208px] xl:mb-[238px] 2xl:mb-[268px] 3xl:mb-[322px] mb-[354px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] w-[25%]">
          <Stack className="lg:h-[28px] xl:h-[32px] 2xl:h-[35px] 3xl:h-[42px] h-[46px] w-[99%]">
            <Stack className="absolute bg-white_A700 border border-gray_500 border-solid lg:h-[28px] xl:h-[32px] 2xl:h-[35px] 3xl:h-[42px] h-[46px] lg:px-[5px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] px-[9px] rounded-radius23 w-[100%]">
              <Img
                src="images/img_home_green_200.png"
                className="absolute lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] h-[25px] inset-y-[0] my-[auto] right-[0] w-[7%]"
                alt="home"
              />
            </Stack>
            <Text className="absolute font-normal h-[max-content] inset-[0] justify-center leading-[normal] m-[auto] 3xl:text-[10px] text-[12px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 text-center w-[60%]">
              Username
            </Text>
          </Stack>
          <Row className="bg-white_A700 border border-gray_500 border-solid items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] mt-[37px] p-[3px] rounded-radius235 w-[99%]">
            <Text className="font-normal leading-[normal] lg:ml-[30px] xl:ml-[34px] 2xl:ml-[38px] 3xl:ml-[46px] ml-[51px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] 3xl:text-[10px] text-[12px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 text-center w-[78%]">
              Password
            </Text>
            <Img
              src="images/img_home_green_200.png"
              className="lg:h-[16px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] h-[26px] ml-[1px] w-[7%]"
              alt="home One"
            />
          </Row>
          <Stack className="lg:h-[28px] xl:h-[32px] 2xl:h-[35px] 3xl:h-[42px] h-[46px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] mt-[37px] w-[56%]">
            <Stack className="absolute bg-lime_A700 border border-gray_500 border-solid lg:h-[28px] xl:h-[32px] 2xl:h-[35px] 3xl:h-[42px] h-[46px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] px-[5px] rounded-radius23 w-[100%]">
              <Img
                src="images/img_home_green_200.png"
                className="absolute lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] h-[25px] inset-y-[0] my-[auto] right-[0] w-[7%]"
                alt="home Two"
              />
            </Stack>
            <Text className="absolute font-normal h-[max-content] inset-y-[0] leading-[normal] left-[21%] my-[auto] 3xl:text-[10px] text-[12px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 text-center w-[53%]">
              Login
            </Text>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default LoginPage;
