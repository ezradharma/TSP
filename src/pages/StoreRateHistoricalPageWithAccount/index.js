import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Stack, Text, Line, List } from "components";

const StoreRateHistoricalPageWithAccountPage = () => {
  const navigate = useNavigate();

  function handleNavigate8() {
    navigate("/storeratepagewithaccount");
  }
  function handleNavigate9() {
    navigate("/mainpagenoaccount");
  }

  return (
    <>
      <Column className="bg-black_900 font-microsoftjhengheiui items-center mx-[auto] w-[100%]">
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
                onClick={handleNavigate9}
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
        <Column className="bg-white_A701 items-end lg:pb-[14px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[22px] pb-[25px] lg:px-[14px] xl:px-[16px] 2xl:px-[18px] 3xl:px-[22px] px-[25px] w-[100%]">
          <Stack className="lg:h-[34px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mr-[41px] xl:mr-[47px] 2xl:mr-[53px] 3xl:mr-[63px] mr-[70px] w-[46%]">
            <Text className="absolute font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-black_900 top-[0] w-[auto]">
              Historical Rates for Walmart
            </Text>
            <Img
              src="images/img_storelogo.png"
              className="absolute lg:h-[34px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] left-[6%] w-[18%]"
              alt="StoreLogo"
            />
          </Stack>
          <Column className="lg:mr-[41px] xl:mr-[47px] 2xl:mr-[53px] 3xl:mr-[63px] mr-[70px] w-[93%]">
            <Stack className="lg:h-[448px] xl:h-[513px] 2xl:h-[577px] 3xl:h-[692px] h-[760px] w-[100%]">
              <Column className="absolute bg-light_blue_800 items-end left-[0] lg:pb-[44px] xl:pb-[50px] 2xl:pb-[56px] 3xl:pb-[68px] pb-[75px] lg:pr-[44px] xl:pr-[50px] 2xl:pr-[56px] 3xl:pr-[68px] pr-[75px] rounded-radius15 w-[100%]">
                <Text className="font-light leading-[normal] rotate-[90deg] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-shadow-ts text-white_A701 w-[97%]">
                  Jan
                  <br />
                  Feb
                  <br />
                  Mar
                  <br />
                  Apr
                  <br />
                  May
                  <br />
                  Jun
                  <br />
                  Jul
                  <br />
                  Aug
                  <br />
                  Sept
                  <br />
                  Oct
                  <br />
                  Nov
                  <br />
                  Dec
                </Text>
                <Row className="items-end 2xl:mb-[109px] 3xl:mb-[131px] mb-[144px] lg:mb-[84px] xl:mb-[97px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] w-[100%]">
                  <Text className="font-bold lg:my-[124px] xl:my-[142px] 2xl:my-[160px] 3xl:my-[192px] my-[212px] rotate-[90deg] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-shadow-ts text-white_A701 w-[auto]">
                    %
                  </Text>
                  <Text className="font-bold leading-[normal] 3xl:mt-[106px] mt-[117px] lg:mt-[68px] xl:mt-[78px] 2xl:mt-[88px] rotate-[90deg] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-shadow-ts text-white_A701 lg:tracking-ls42 xl:tracking-ls48 2xl:tracking-ls54 3xl:tracking-ls65 tracking-ls72 w-[2%]">
                    012345
                  </Text>
                  <Stack className="bg-white_A700_0c border border-black_900 border-solid lg:h-[261px] xl:h-[299px] 2xl:h-[336px] 3xl:h-[403px] h-[442px] mb-[4px] w-[97%]">
                    <Stack className="absolute lg:h-[208px] xl:h-[238px] 2xl:h-[267px] 3xl:h-[321px] h-[352px] top-[0] w-[100%]">
                      <Stack className="absolute bottom-[2%] lg:h-[203px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] h-[343px] w-[100%]">
                        <Stack className="absolute lg:h-[203px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] h-[343px] w-[100%]">
                          <Stack className="absolute lg:h-[203px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] h-[343px] w-[100%]">
                            <Column className="absolute w-[100%]">
                              <Stack className="lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] h-[93px] w-[100%]">
                                <Line className="absolute bg-red_A700 h-[1px] outline outline-[0.5px] outline-red_A700 top-[0] w-[100%]" />
                                <Line className="absolute bg-cyan_700 h-[1px] left-[0] rotate-[31deg] w-[10%]" />
                              </Stack>
                              <Line className="bg-cyan_700 h-[1px] xl:ml-[103px] 2xl:ml-[116px] 3xl:ml-[140px] ml-[154px] lg:ml-[90px] w-[90%]" />
                              <Line className="bg-teal_600 h-[1px] ml-[0] lg:mt-[146px] xl:mt-[167px] 2xl:mt-[188px] 3xl:mt-[225px] mt-[248px] w-[19%]" />
                            </Column>
                            <Img
                              src="images/img_line9.png"
                              className="absolute bottom-[1%] lg:h-[147px] xl:h-[168px] 2xl:h-[189px] 3xl:h-[226px] h-[248px] left-[19%] w-[9%]"
                              alt="LineNine"
                            />
                          </Stack>
                          <Line className="absolute bg-teal_601 h-[1px] right-[0] top-[27%] w-[72%]" />
                          <Line className="absolute bg-yellow_700 bottom-[24%] h-[1px] left-[0] w-[37%]" />
                        </Stack>
                        <Line className="absolute bg-yellow_700 bottom-[24%] h-[1px] left-[37%] rotate-[29deg] w-[9%]" />
                      </Stack>
                      <Line className="absolute bg-yellow_700 h-[1px] inset-y-[0] my-[auto] right-[9%] w-[45%]" />
                      <Line className="absolute bg-yellow_700 h-[1px] right-[0] rotate-[31deg] top-[26%] w-[9%]" />
                      <Line className="absolute bg-red_A200 bottom-[3%] h-[1px] left-[0] rotate-[59deg] w-[10%]" />
                      <Line className="absolute bg-red_A200 bottom-[0] h-[1px] left-[10%] rotate-[1deg] w-[72%]" />
                    </Stack>
                    <Line className="absolute bg-red_600 bottom-[18%] h-[1px] right-[0] rotate-[31deg] w-[18%]" />
                  </Stack>
                </Row>
              </Column>
              <List
                className="absolute bg-black_900 bottom-[0] lg:gap-[22px] xl:gap-[25px] 2xl:gap-[28px] 3xl:gap-[34px] gap-[38px] grid grid-cols-5 left-[0] min-h-[auto] lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] p-[5px] rounded-radius15 w-[96%]"
                orientation="horizontal"
              >
                <Column className="items-center mb-[1px] w-[100%]">
                  <Text className="font-light leading-[normal] rotate-[90deg] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-red_A700 text-right text-shadow-ts w-[82%]">
                    Hoopla Doopla
                  </Text>
                  <Img
                    src="images/img_servicelogo.png"
                    className="lg:h-[21px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[34px] lg:w-[20px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[34px]"
                    alt="ServiceLogo"
                  />
                </Column>
                <Column className="items-center mb-[1px] w-[100%]">
                  <Text className="font-light leading-[normal] rotate-[90deg] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-right text-shadow-ts text-teal_A700 w-[82%]">
                    MaxRebates
                  </Text>
                  <Img
                    src="images/img_servicelogo_34X34.png"
                    className="lg:h-[21px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[34px] lg:w-[20px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[34px]"
                    alt="ServiceLogo One"
                  />
                </Column>
                <Column className="items-center mb-[1px] w-[100%]">
                  <Text className="font-light leading-[normal] rotate-[90deg] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-right text-shadow-ts text-teal_602 w-[82%]">
                    rebatesme
                  </Text>
                  <Img
                    src="images/img_servicelogo_1.png"
                    className="lg:h-[21px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[34px] lg:w-[20px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[34px]"
                    alt="ServiceLogo Two"
                  />
                </Column>
                <Column className="items-center mb-[1px] w-[100%]">
                  <Text className="font-light leading-[normal] rotate-[90deg] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-right text-shadow-ts text-yellow_700 w-[82%]">
                    Dollar Dig
                  </Text>
                  <Img
                    src="images/img_servicelogo_2.png"
                    className="lg:h-[21px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[34px] lg:w-[20px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[34px]"
                    alt="ServiceLogo Three"
                  />
                </Column>
                <Column className="items-center mb-[1px] w-[100%]">
                  <Text className="font-light leading-[normal] rotate-[90deg] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-red_A200 text-right text-shadow-ts w-[82%]">
                    GoCashBack
                  </Text>
                  <Img
                    src="images/img_servicelogo_3.png"
                    className="lg:h-[21px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[34px] lg:w-[20px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[34px]"
                    alt="ServiceLogo Four"
                  />
                </Column>
              </List>
            </Stack>
            <Column className="bg-light_blue_800 border border-black_900 border-solid items-center ml-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] rounded-radius15 w-[40%]">
              <Text
                className="common-pointer font-bold leading-[normal] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-black_900 text-center w-[100%]"
                onClick={handleNavigate8}
              >
                Current Mode
              </Text>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default StoreRateHistoricalPageWithAccountPage;
