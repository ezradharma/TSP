import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Stack, Text, Line, List } from "components";

const MainPageNoAccountPage = () => {
  const navigate = useNavigate();

  function handleNavigate18() {
    navigate("/frontpage");
  }
  function handleNavigate19() {
    navigate("/frontpage");
  }

  return (
    <>
      <Column className="bg-black_900 font-microsoftjhengheiui items-center mx-[auto] 3xl:pb-[107px] pb-[118px] lg:pb-[69px] xl:pb-[79px] 2xl:pb-[89px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-light_blue_800 border border-black_900 border-solid items-center justify-end xl:p-[4px] lg:p-[4px] 2xl:p-[5px] 3xl:p-[6px] p-[7px] shadow-bs w-[100%]">
            <Img
              src="images/img_tsp3.png"
              className="lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] h-[86px] rounded-radius43 w-[12%]"
              alt="TSPThree"
            />
            <Stack className="bg-white_A700 border border-gray_500 border-solid lg:h-[29px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[45px] h-[49px] lg:ml-[24px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[41px] 3xl:px-[10px] px-[11px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] rounded-radius245 w-[61%]">
              <Img
                src="images/img_search.png"
                className="absolute lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] h-[25px] right-[0] top-[0] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[22px] w-[25px]"
                alt="search"
              />
            </Stack>
            <Column className="bg-blue_500 border border-gray_500 border-solid items-center lg:ml-[10px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] rounded-radius29 w-[20%]">
              <Text
                className="common-pointer font-bold leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-white_A701 w-[100%]"
                onClick={handleNavigate19}
              >
                Log In | Sign Up
              </Text>
            </Column>
            <Column className="items-center lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] ml-[33px] 3xl:mr-[10px] mr-[12px] lg:mr-[7px] xl:mr-[8px] 2xl:mr-[9px] w-[2%]">
              <Line className="bg-white_A701 h-[1px] w-[100%]" />
              <Line className="bg-white_A701 h-[1px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] w-[100%]" />
              <Line className="bg-white_A701 h-[1px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] w-[100%]" />
            </Column>
          </Row>
        </header>
        <List
          className="font-inter gap-[0] min-h-[auto] 3xl:mt-[107px] mt-[118px] lg:mt-[69px] xl:mt-[79px] 2xl:mt-[89px] w-[95%]"
          orientation="vertical"
        >
          <Row className="items-center lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] w-[100%]">
            <Column
              className="common-pointer bg-cyan_200 items-center lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] p-[28px] rounded-radius39 w-[23%]"
              onClick={handleNavigate18}
            >
              <Img
                src="images/img_amazon1.png"
                className="2xl:h-[111px] 3xl:h-[133px] h-[146px] lg:h-[87px] xl:h-[99px] w-[50%]"
                alt="AmazonOne"
              />
              <Stack className="3xl:h-[101px] h-[110px] lg:h-[65px] xl:h-[75px] 2xl:h-[84px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] mb-[8px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[86%]">
                <Text className="absolute font-normal left-[0] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-black_900 top-[0] w-[auto]">
                  Amazon
                </Text>
                <Img
                  src="images/img_user.png"
                  className="absolute bottom-[0] lg:h-[33px] xl:h-[38px] 2xl:h-[42px] 3xl:h-[51px] h-[55px] right-[0] w-[22%]"
                  alt="user"
                />
              </Stack>
            </Column>
            <Column className="bg-cyan_200 items-center lg:ml-[22px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] ml-[39px] lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] p-[28px] rounded-radius39 w-[23%]">
              <Img
                src="images/img_gaplogo1.png"
                className="2xl:h-[107px] 3xl:h-[128px] h-[140px] lg:h-[83px] xl:h-[95px] w-[50%]"
                alt="GapLogoOne"
              />
              <Stack className="3xl:h-[101px] h-[110px] lg:h-[65px] xl:h-[75px] 2xl:h-[84px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] mb-[8px] lg:mt-[20px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] mt-[34px] w-[86%]">
                <Img
                  src="images/img_user.png"
                  className="absolute bottom-[0] lg:h-[33px] xl:h-[38px] 2xl:h-[42px] 3xl:h-[51px] h-[55px] right-[0] w-[21%]"
                  alt="user One"
                />
                <Text className="absolute font-normal left-[0] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-black_900 top-[0] w-[auto]">
                  Gap
                </Text>
              </Stack>
            </Column>
            <Column className="bg-cyan_200 items-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] ml-[66px] lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] p-[28px] rounded-radius39 w-[23%]">
              <Img
                src="images/img_costco1.png"
                className="2xl:h-[111px] 3xl:h-[133px] h-[146px] lg:h-[87px] xl:h-[99px] w-[52%]"
                alt="CostcoOne"
              />
              <Stack className="3xl:h-[101px] h-[110px] lg:h-[65px] xl:h-[75px] 2xl:h-[84px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] mb-[8px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[86%]">
                <Img
                  src="images/img_user.png"
                  className="absolute bottom-[0] lg:h-[33px] xl:h-[38px] 2xl:h-[42px] 3xl:h-[51px] h-[55px] right-[0] w-[21%]"
                  alt="user Two"
                />
                <Text className="absolute font-normal left-[0] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-black_900 top-[0] w-[auto]">
                  Costco
                </Text>
              </Stack>
            </Column>
            <Column className="bg-cyan_200 lg:ml-[35px] xl:ml-[41px] 2xl:ml-[46px] 3xl:ml-[55px] ml-[61px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[20px] p-[22px] rounded-radius39 w-[23%]">
              <Img
                src="images/img_homedepot1.png"
                className="2xl:h-[111px] 3xl:h-[133px] h-[146px] lg:h-[87px] xl:h-[99px] ml-[102px] lg:ml-[60px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] lg:mr-[43px] xl:mr-[49px] 2xl:mr-[56px] 3xl:mr-[67px] mr-[74px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] w-[52%]"
                alt="HomeDepotOne"
              />
              <Stack className="3xl:h-[101px] h-[110px] lg:h-[65px] xl:h-[75px] 2xl:h-[84px] 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[60px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[84%]">
                <Img
                  src="images/img_user.png"
                  className="absolute bottom-[0] lg:h-[33px] xl:h-[38px] 2xl:h-[42px] 3xl:h-[51px] h-[55px] right-[0] w-[21%]"
                  alt="user Three"
                />
                <Text className="absolute font-normal left-[0] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-black_900 top-[0] w-[auto]">
                  Home Depot
                </Text>
              </Stack>
            </Column>
          </Row>
          <Row className="items-center justify-between lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] w-[100%]">
            <Column className="bg-cyan_200 items-center lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] p-[24px] rounded-radius39 w-[23%]">
              <Img
                src="images/img_walmart1.png"
                className="xl:h-[101px] 2xl:h-[114px] 3xl:h-[136px] h-[149px] lg:h-[88px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] w-[48%]"
                alt="WalmartOne"
              />
              <Stack className="h-[108px] lg:h-[64px] xl:h-[73px] 2xl:h-[82px] 3xl:h-[99px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[84%]">
                <Img
                  src="images/img_user.png"
                  className="absolute bottom-[0] lg:h-[33px] xl:h-[38px] 2xl:h-[42px] 3xl:h-[51px] h-[55px] right-[0] w-[21%]"
                  alt="user One"
                />
                <Text className="absolute font-normal left-[0] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-black_900 top-[0] w-[auto]">
                  Walmart
                </Text>
              </Stack>
            </Column>
            <Column className="bg-cyan_200 items-center lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] p-[24px] rounded-radius39 w-[23%]">
              <Img
                src="images/img_hotels1.png"
                className="xl:h-[101px] 2xl:h-[114px] 3xl:h-[136px] h-[149px] lg:h-[88px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] w-[49%]"
                alt="HotelsOne"
              />
              <Stack className="h-[108px] lg:h-[64px] xl:h-[73px] 2xl:h-[82px] 3xl:h-[99px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[86%]">
                <Img
                  src="images/img_user.png"
                  className="absolute bottom-[0] lg:h-[33px] xl:h-[38px] 2xl:h-[42px] 3xl:h-[51px] h-[55px] right-[0] w-[21%]"
                  alt="user One One"
                />
                <Text className="absolute font-normal left-[0] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-black_900 top-[0] w-[auto]">
                  Hotels.com
                </Text>
              </Stack>
            </Column>
            <Column className="bg-cyan_200 items-center lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] p-[24px] rounded-radius39 w-[23%]">
              <Img
                src="images/img_kholslogo1.png"
                className="xl:h-[101px] 2xl:h-[114px] 3xl:h-[136px] h-[149px] lg:h-[88px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] w-[53%]"
                alt="KholsLogoOne"
              />
              <Stack className="h-[108px] lg:h-[64px] xl:h-[73px] 2xl:h-[82px] 3xl:h-[99px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[87%]">
                <Img
                  src="images/img_user.png"
                  className="absolute bottom-[0] lg:h-[33px] xl:h-[38px] 2xl:h-[42px] 3xl:h-[51px] h-[55px] right-[0] w-[21%]"
                  alt="user Two One"
                />
                <Text className="absolute font-normal left-[0] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-black_900 top-[0] w-[auto]">
                  Kohls
                </Text>
              </Stack>
            </Column>
            <Column className="bg-cyan_200 lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[20px] p-[22px] rounded-radius39 w-[23%]">
              <Img
                src="images/img_target21.png"
                className="2xl:h-[107px] 3xl:h-[128px] h-[140px] lg:h-[83px] xl:h-[95px] ml-[104px] lg:ml-[61px] xl:ml-[70px] 2xl:ml-[78px] 3xl:ml-[94px] lg:mr-[45px] xl:mr-[51px] 2xl:mr-[58px] 3xl:mr-[70px] mr-[77px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[50%]"
                alt="TargetTwentyOne"
              />
              <Stack className="h-[108px] lg:h-[64px] xl:h-[73px] 2xl:h-[82px] 3xl:h-[99px] mb-[2px] lg:ml-[27px] xl:ml-[31px] 2xl:ml-[34px] 3xl:ml-[41px] ml-[46px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[38px] mt-[42px] w-[87%]">
                <Img
                  src="images/img_user.png"
                  className="absolute bottom-[0] lg:h-[33px] xl:h-[38px] 2xl:h-[42px] 3xl:h-[51px] h-[55px] right-[0] w-[20%]"
                  alt="user Three One"
                />
                <Text className="absolute font-normal left-[0] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-black_900 top-[0] w-[auto]">
                  Target
                </Text>
              </Stack>
            </Column>
          </Row>
        </List>
      </Column>
    </>
  );
};

export default MainPageNoAccountPage;
