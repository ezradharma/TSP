import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Stack, Text, Line } from "components";

const SearchWalmartPage = () => {
  const navigate = useNavigate();

  function handleNavigate6() {
    navigate("/storeratepagewithaccount");
  }
  function handleNavigate7() {
    navigate("/mainpagenoaccount");
  }

  return (
    <>
      <Column className="bg-black_900 font-inter items-center mx-[auto] lg:pb-[427px] xl:pb-[488px] 2xl:pb-[549px] 3xl:pb-[659px] pb-[725px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-light_blue_800 border border-black_900 border-solid items-center justify-between xl:p-[4px] lg:p-[4px] 2xl:p-[5px] 3xl:p-[6px] p-[7px] shadow-bs w-[100%]">
            <Img
              src="images/img_tsp3.png"
              className="lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] h-[86px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] rounded-radius43 w-[12%]"
              alt="TSPThree"
            />
            <Stack className="lg:h-[29px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[45px] h-[49px] w-[61%]">
              <Stack className="absolute bg-white_A700 border border-gray_500 border-solid lg:h-[29px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[45px] h-[49px] px-[10px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] rounded-radius245 w-[100%]">
                <Img
                  src="images/img_search.png"
                  className="absolute lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] h-[28px] inset-y-[0] my-[auto] right-[0] w-[3%]"
                  alt="search"
                />
              </Stack>
              <Img
                src="images/img_filter.png"
                className="absolute bottom-[18%] lg:h-[18px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] h-[29px] left-[1%] w-[2%]"
                alt="filter"
              />
            </Stack>
            <Row className="bg-blue_500 border border-gray_500 border-solid items-center justify-center lg:pr-[13px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] pr-[23px] rounded-radius29 w-[20%]">
              <Text className="font-bold font-microsoftjhengheiui leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-white_A701 w-[50%]">
                [USERNAME]
              </Text>
              <Text
                className="common-pointer font-inter font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A701 w-[auto]"
                onClick={handleNavigate7}
              >
                | Sign Out
              </Text>
            </Row>
            <Column className="items-center 3xl:mr-[10px] mr-[12px] lg:mr-[7px] xl:mr-[8px] 2xl:mr-[9px] w-[2%]">
              <Line className="bg-white_A701 h-[1px] w-[100%]" />
              <Line className="bg-white_A701 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]" />
              <Line className="bg-white_A701 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]" />
            </Column>
          </Row>
        </header>
        <Row
          className="common-pointer bg-cyan_200 items-center lg:mt-[53px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] mt-[91px] 3xl:p-[10px] p-[12px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[40%]"
          onClick={handleNavigate6}
        >
          <Img
            src="images/img_walmart1.png"
            className="3xl:h-[102px] h-[112px] lg:h-[67px] xl:h-[76px] 2xl:h-[85px] lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[20px] mb-[22px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] w-[17%]"
            alt="WalmartOne"
          />
          <Text className="font-bold xl:ml-[106px] 2xl:ml-[119px] 3xl:ml-[143px] ml-[158px] lg:ml-[93px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-gray_700 w-[auto]">
            Walmart
          </Text>
          <Img
            src="images/img_home.png"
            className="lg:h-[32px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[50px] h-[54px] lg:ml-[118px] xl:ml-[135px] 2xl:ml-[152px] 3xl:ml-[182px] ml-[201px] w-[7%]"
            alt="home"
          />
        </Row>
      </Column>
    </>
  );
};

export default SearchWalmartPage;
