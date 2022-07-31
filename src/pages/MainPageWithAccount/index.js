import React from "react";

import { Column, Row, Img, Stack, Text, Line, List } from "components";
import { useNavigate } from "react-router-dom";

const MainPageWithAccountPage = () => {
  const navigate = useNavigate();

  function handleNavigate16() {
    navigate("/storeratepagewithaccount");
  }
  function handleNavigate17() {
    navigate("/mainpagenoaccount");
  }

  return (
    <>
      <Column className="bg-black_900 font-inter items-center mx-[auto] lg:pb-[12px] xl:pb-[14px] 2xl:pb-[16px] 3xl:pb-[20px] pb-[22px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-light_blue_800 border border-black_900 border-solid items-center justify-evenly xl:p-[4px] lg:p-[4px] 2xl:p-[5px] 3xl:p-[6px] p-[7px] shadow-bs w-[100%]">
            <Img
              src="images/img_tsp3.png"
              className="lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] h-[86px] rounded-radius43 w-[12%]"
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
                className="absolute lg:h-[18px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] h-[29px] inset-y-[0] left-[2%] my-[auto] w-[2%]"
                alt="filter"
              />
            </Stack>
            <Row className="bg-blue_500 border border-gray_500 border-solid items-center justify-center lg:pr-[13px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] pr-[23px] rounded-radius29 w-[20%]">
              <Text className="font-bold font-microsoftjhengheiui leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-white_A701 w-[50%]">
                [USERNAME]
              </Text>
              <Text
                className="common-pointer font-inter font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A701 w-[auto]"
                onClick={handleNavigate17}
              >
                | Sign Out
              </Text>
            </Row>
            <Column className="items-center w-[2%]">
              <Line className="bg-white_A701 h-[1px] w-[100%]" />
              <Line className="bg-white_A701 h-[1px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] w-[100%]" />
              <Line className="bg-white_A701 h-[1px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] w-[100%]" />
            </Column>
          </Row>
        </header>
        <Stack className="lg:h-[549px] xl:h-[628px] 2xl:h-[706px] 3xl:h-[847px] h-[930px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[98%]">
          <Row className="absolute items-center justify-between w-[100%]">
            <Column className="bg-light_blue_800 items-center 3xl:p-[10px] p-[12px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius45 w-[49%]">
              <Text className="font-normal lg:mb-[485px] xl:mb-[555px] 2xl:mb-[624px] 3xl:mb-[749px] mb-[824px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-white_A701 w-[auto]">
                Your Favorites
              </Text>
            </Column>
            <Column className="bg-indigo_400 items-end lg:p-[10px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] p-[18px] rounded-radius38 w-[50%]">
              <Text className="font-normal leading-[normal] lg:mb-[476px] xl:mb-[544px] 2xl:mb-[612px] 3xl:mb-[735px] mb-[808px] lg:mr-[101px] xl:mr-[116px] 2xl:mr-[131px] 3xl:mr-[157px] mr-[173px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-center text-white_A701 w-[57%]">
                Recommended for you
              </Text>
            </Column>
          </Row>
          <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[97%]">
            <Stack className="lg:h-[439px] xl:h-[502px] 2xl:h-[565px] 3xl:h-[678px] h-[744px] w-[23%]">
              <Stack className="absolute lg:h-[439px] xl:h-[502px] 2xl:h-[565px] 3xl:h-[678px] h-[744px] w-[100%]">
                <Column className="absolute bg-cyan_200 items-center lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] p-[28px] rounded-radius39 top-[0] w-[100%]">
                  <Img
                    src="images/img_amazon1.png"
                    className="2xl:h-[111px] 3xl:h-[133px] h-[146px] lg:h-[87px] xl:h-[99px] w-[50%]"
                    alt="AmazonOne"
                  />
                  <Text className="font-normal lg:mb-[28px] xl:mb-[32px] 2xl:mb-[36px] 3xl:mb-[43px] mb-[48px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-black_900 w-[auto]">
                    Amazon
                  </Text>
                </Column>
                <Column
                  className="common-pointer absolute bg-cover bg-repeat bottom-[0] items-center justify-end xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] p-[15px] lg:p-[8px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group3.png')" }}
                  onClick={handleNavigate16}
                >
                  <Img
                    src="images/img_walmart1.png"
                    className="xl:h-[101px] 2xl:h-[114px] 3xl:h-[136px] h-[149px] lg:h-[88px] 3xl:mt-[119px] mt-[131px] lg:mt-[77px] xl:mt-[88px] 2xl:mt-[99px] w-[46%]"
                    alt="WalmartOne"
                  />
                  <Text className="font-normal lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-black_900 w-[auto]">
                    Walmart
                  </Text>
                  <Text className="font-normal mt-[1px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-green_900 w-[auto]">
                    Best Rate 4.2%
                  </Text>
                </Column>
              </Stack>
              <Text className="absolute font-normal right-[13%] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-green_900 top-[38%] w-[auto]">
                Best Rate 5%
              </Text>
            </Stack>
            <List
              className="gap-[0] min-h-[auto] w-[75%]"
              orientation="vertical"
            >
              <Row className="items-center justify-between lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] w-[100%]">
                <Column className="bg-cyan_200 items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[20px] p-[22px] rounded-radius39 w-[30%]">
                  <Img
                    src="images/img_gaplogo1.png"
                    className="2xl:h-[107px] 3xl:h-[128px] h-[140px] lg:h-[83px] xl:h-[95px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] w-[48%]"
                    alt="GapLogoOne"
                  />
                  <Column className="items-center lg:mt-[20px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] mt-[34px] w-[75%]">
                    <Text className="font-normal lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-black_900 w-[auto]">
                      Gap
                    </Text>
                    <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-green_900 w-[auto]">
                      Best Rate 2%
                    </Text>
                  </Column>
                </Column>
                <Column className="bg-cyan_200 items-center lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[22px] p-[25px] rounded-radius39 w-[30%]">
                  <Img
                    src="images/img_costco1.png"
                    className="2xl:h-[111px] 3xl:h-[133px] h-[146px] lg:h-[87px] xl:h-[99px] mt-[2px] w-[51%]"
                    alt="CostcoOne"
                  />
                  <Stack className="lg:h-[56px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px] h-[94px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[22px] mb-[25px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[88%]">
                    <Img
                      src="images/img_user.png"
                      className="absolute bottom-[0] lg:h-[31px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] h-[52px] right-[0] w-[21%]"
                      alt="user"
                    />
                    <Text className="absolute font-normal left-[0] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-black_900 top-[0] w-[auto]">
                      Costco
                    </Text>
                  </Stack>
                </Column>
                <Column className="bg-cyan_200 xl:p-[4px] lg:p-[4px] 2xl:p-[5px] 3xl:p-[6px] p-[7px] rounded-radius39 w-[30%]">
                  <Img
                    src="images/img_homedepot1.png"
                    className="2xl:h-[111px] 3xl:h-[133px] h-[146px] lg:h-[87px] xl:h-[99px] 3xl:ml-[105px] ml-[116px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[87px] lg:mr-[51px] xl:mr-[59px] 2xl:mr-[66px] 3xl:mr-[80px] mr-[88px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] w-[48%]"
                    alt="HomeDepotOne"
                  />
                  <Stack className="lg:h-[56px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px] h-[94px] lg:mb-[25px] xl:mb-[28px] 2xl:mb-[32px] 3xl:mb-[39px] mb-[43px] lg:ml-[43px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] ml-[74px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[81%]">
                    <Img
                      src="images/img_user.png"
                      className="absolute bottom-[0] lg:h-[31px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] h-[52px] right-[0] w-[20%]"
                      alt="user One"
                    />
                    <Text className="absolute font-normal left-[0] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-black_900 top-[0] w-[auto]">
                      Home Depot
                    </Text>
                  </Stack>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] w-[100%]">
                <Column className="bg-cyan_200 items-center xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] p-[15px] lg:p-[8px] rounded-radius39 w-[30%]">
                  <Img
                    src="images/img_hotels1.png"
                    className="xl:h-[101px] 2xl:h-[114px] 3xl:h-[136px] h-[149px] lg:h-[88px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[46%]"
                    alt="HotelsOne"
                  />
                  <Text className="font-normal lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-black_900 w-[auto]">
                    Hotels.com
                  </Text>
                  <Text className="font-normal mt-[1px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-green_900 w-[auto]">
                    Best Rate 3%
                  </Text>
                </Column>
                <Column className="bg-cyan_200 items-center lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[22px] p-[25px] rounded-radius39 w-[30%]">
                  <Img
                    src="images/img_kholslogo1.png"
                    className="xl:h-[101px] 2xl:h-[114px] 3xl:h-[136px] h-[149px] lg:h-[88px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[53%]"
                    alt="KholsLogoOne"
                  />
                  <Stack className="lg:h-[45px] xl:h-[52px] 2xl:h-[58px] 3xl:h-[70px] h-[76px] lg:my-[17px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] my-[29px] w-[91%]">
                    <Img
                      src="images/img_user.png"
                      className="absolute bottom-[0] lg:h-[31px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] h-[52px] right-[0] w-[20%]"
                      alt="user One"
                    />
                    <Text className="absolute font-normal left-[0] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-black_900 top-[0] w-[auto]">
                      Kohls
                    </Text>
                  </Stack>
                </Column>
                <Column className="bg-cyan_200 xl:p-[4px] lg:p-[4px] 2xl:p-[5px] 3xl:p-[6px] p-[7px] rounded-radius39 w-[30%]">
                  <Img
                    src="images/img_target21.png"
                    className="2xl:h-[107px] 3xl:h-[128px] h-[140px] lg:h-[83px] xl:h-[95px] 3xl:ml-[107px] ml-[118px] lg:ml-[69px] xl:ml-[79px] 2xl:ml-[89px] lg:mr-[53px] xl:mr-[61px] 2xl:mr-[69px] 3xl:mr-[82px] mr-[91px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] mt-[26px] w-[46%]"
                    alt="TargetTwentyOne"
                  />
                  <Stack className="lg:h-[45px] xl:h-[52px] 2xl:h-[58px] 3xl:h-[70px] h-[76px] lg:mb-[28px] xl:mb-[32px] 2xl:mb-[36px] 3xl:mb-[43px] mb-[48px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[60px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[38px] mt-[42px] w-[84%]">
                    <Img
                      src="images/img_user.png"
                      className="absolute bottom-[0] lg:h-[31px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] h-[52px] right-[0] w-[20%]"
                      alt="user One One"
                    />
                    <Text className="absolute font-normal left-[0] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-black_900 top-[0] w-[auto]">
                      Target
                    </Text>
                  </Stack>
                </Column>
              </Row>
            </List>
          </Row>
        </Stack>
      </Column>
    </>
  );
};

export default MainPageWithAccountPage;
