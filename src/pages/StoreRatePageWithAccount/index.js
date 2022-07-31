import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Stack, Text, Line, List } from "components";

const StoreRatePageWithAccountPage = () => {
  const navigate = useNavigate();

  function handleNavigate4() {
    navigate("/storeratehistoricalpagewithaccount");
  }
  function handleNavigate5() {
    navigate("/mainpagenoaccount");
  }

  return (
    <>
      <Column className="bg-black_900 font-microsoftjhengheiui items-center mx-[auto] lg:pb-[12px] xl:pb-[14px] 2xl:pb-[15px] 3xl:pb-[19px] pb-[21px] w-[100%]">
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
                onClick={handleNavigate5}
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
        <Row className="justify-between mt-[1px] w-[98%]">
          <Column className="bg-white_A701 items-center lg:mb-[394px] xl:mb-[451px] 2xl:mb-[508px] 3xl:mb-[609px] mb-[670px] lg:pb-[14px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[21px] pb-[24px] w-[46%]">
            <Text className="font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-black_900 w-[auto]">
              Current Rates for Walmart
            </Text>
            <Img
              src="images/img_storelogo.png"
              className="lg:h-[36px] xl:h-[42px] 2xl:h-[47px] 3xl:h-[56px] h-[61px] w-[18%]"
              alt="StoreLogo"
            />
            <Column className="items-center w-[81%]">
              <Stack className="lg:h-[416px] xl:h-[476px] 2xl:h-[535px] 3xl:h-[642px] h-[705px] w-[100%]">
                <Stack className="absolute lg:h-[416px] xl:h-[476px] 2xl:h-[535px] 3xl:h-[642px] h-[705px] w-[100%]">
                  <Row className="absolute bg-light_blue_800 items-center left-[0] lg:pr-[17px] xl:pr-[19px] 2xl:pr-[21px] 3xl:pr-[26px] pr-[29px] lg:py-[17px] xl:py-[19px] 2xl:py-[21px] 3xl:py-[26px] py-[29px] rounded-radius15 w-[100%]">
                    <Text className="font-bold rotate-[90deg] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-shadow-ts text-white_A701 w-[auto]">
                      %
                    </Text>
                    <Text className="font-bold leading-[normal] rotate-[90deg] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-shadow-ts text-white_A701 lg:tracking-ls42 xl:tracking-ls48 2xl:tracking-ls54 3xl:tracking-ls65 tracking-ls72 w-[4%]">
                      012345
                    </Text>
                    <div className="bg-white_A700_0c border border-black_900 border-solid lg:h-[258px] xl:h-[295px] 2xl:h-[332px] 3xl:h-[398px] h-[437px] lg:mb-[114px] xl:mb-[130px] 2xl:mb-[147px] 3xl:mb-[176px] mb-[194px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[91%]"></div>
                  </Row>
                  <div className="absolute bg-black_900 bottom-[0] lg:h-[127px] xl:h-[145px] 2xl:h-[164px] 3xl:h-[196px] h-[215px] rounded-radius15 w-[100%]"></div>
                </Stack>
                <List
                  className="absolute bottom-[1%] lg:gap-[12px] xl:gap-[14px] 2xl:gap-[15px] 3xl:gap-[19px] gap-[21px] grid grid-cols-5 left-[11%] min-h-[auto] w-[50%]"
                  orientation="horizontal"
                >
                  <Column className="items-center w-[100%]">
                    <div className="bg-white_A701 border border-black_900 border-solid lg:h-[258px] xl:h-[295px] 2xl:h-[332px] 3xl:h-[398px] h-[437px] rounded-radius10 shadow-bs w-[100%]"></div>
                    <Column className="items-center 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[67%]">
                      <Text className="font-light leading-[normal] rotate-[90deg] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-right text-shadow-ts text-white_A701 w-[82%]">
                        Hoopla Doopla
                      </Text>
                      <Img
                        src="images/img_servicelogo.png"
                        className="lg:h-[21px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[34px] lg:w-[20px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[34px]"
                        alt="ServiceLogo"
                      />
                    </Column>
                  </Column>
                  <Column className="items-center lg:mt-[48px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[75px] mt-[83px] w-[100%]">
                    <div className="bg-white_A701 border border-black_900 border-solid lg:h-[209px] xl:h-[239px] 2xl:h-[269px] 3xl:h-[323px] h-[354px] rounded-radius10 shadow-bs w-[100%]"></div>
                    <Column className="items-center 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[65%]">
                      <Text className="font-light leading-[normal] rotate-[90deg] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-right text-shadow-ts text-white_A701 w-[82%]">
                        MaxRebates
                      </Text>
                      <Img
                        src="images/img_servicelogo_34X34.png"
                        className="lg:h-[21px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[34px] lg:w-[20px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[34px]"
                        alt="ServiceLogo One"
                      />
                    </Column>
                  </Column>
                  <Column className="items-center lg:mt-[48px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[75px] mt-[83px] w-[100%]">
                    <div className="bg-white_A701 border border-black_900 border-solid lg:h-[209px] xl:h-[239px] 2xl:h-[269px] 3xl:h-[323px] h-[354px] rounded-radius10 shadow-bs w-[100%]"></div>
                    <Column className="items-center 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[64%]">
                      <Text className="font-light leading-[normal] rotate-[90deg] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-right text-shadow-ts text-white_A701 w-[82%]">
                        rebatesme
                      </Text>
                      <Img
                        src="images/img_servicelogo_1.png"
                        className="lg:h-[21px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[34px] lg:w-[20px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[34px]"
                        alt="ServiceLogo Two"
                      />
                    </Column>
                  </Column>
                  <Column className="items-center lg:mt-[48px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[75px] mt-[83px] w-[100%]">
                    <div className="bg-white_A701 border border-black_900 border-solid lg:h-[209px] xl:h-[239px] 2xl:h-[269px] 3xl:h-[323px] h-[354px] rounded-radius10 shadow-bs w-[100%]"></div>
                    <Column className="items-center 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[65%]">
                      <Text className="font-light leading-[normal] rotate-[90deg] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-right text-shadow-ts text-white_A701 w-[82%]">
                        Dollar Dig
                      </Text>
                      <Img
                        src="images/img_servicelogo_2.png"
                        className="lg:h-[21px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[34px] lg:w-[20px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[34px]"
                        alt="ServiceLogo Three"
                      />
                    </Column>
                  </Column>
                  <Column className="items-center xl:mt-[111px] 2xl:mt-[125px] 3xl:mt-[151px] mt-[166px] lg:mt-[97px] w-[100%]">
                    <div className="bg-white_A701 border border-black_900 border-solid lg:h-[160px] xl:h-[183px] 2xl:h-[206px] 3xl:h-[247px] h-[271px] rounded-radius10 shadow-bs w-[100%]"></div>
                    <Column className="items-center 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[62%]">
                      <Text className="font-light leading-[normal] rotate-[90deg] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-right text-shadow-ts text-white_A701 w-[82%]">
                        GoCashBack
                      </Text>
                      <Img
                        src="images/img_servicelogo_3.png"
                        className="lg:h-[21px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[34px] lg:w-[20px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[34px]"
                        alt="ServiceLogo Four"
                      />
                    </Column>
                  </Column>
                </List>
              </Stack>
              <Column className="bg-light_blue_800 border border-black_900 border-solid items-center lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] rounded-radius15 w-[100%]">
                <Text
                  className="common-pointer font-bold leading-[normal] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-black_900 text-center w-[100%]"
                  onClick={handleNavigate4}
                >
                  Historical Mode
                </Text>
              </Column>
            </Column>
          </Column>
          <List
            className="gap-[0] min-h-[auto] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] w-[52%]"
            orientation="vertical"
          >
            <Stack className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[309px] my-[10.375px] xl:my-[6px] lg:my-[6px] 2xl:my-[7px] 3xl:my-[9px] w-[100%]">
              <Row className="absolute bg-black_900 border border-solid border-white_A701 bottom-[0] items-center justify-between lg:px-[20px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] px-[35px] rounded-radius10 w-[100%]">
                <Line className="bg-white_A701 h-[1px] lg:ml-[100px] xl:ml-[115px] 2xl:ml-[129px] 3xl:ml-[155px] ml-[171px] rotate-[90deg] w-[1px]" />
                <Img
                  src="images/img_subtract.png"
                  className="3xl:h-[102px] h-[111px] lg:h-[66px] xl:h-[75px] 2xl:h-[85px] w-[11%]"
                  alt="Subtract"
                />
              </Row>
              <Row className="absolute h-[max-content] inset-y-[0] justify-evenly left-[0] my-[auto] w-[72%]">
                <Column className="items-center 3xl:mt-[10px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:pr-[12px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[20px] pr-[22px] w-[33%]">
                  <Img
                    src="images/img_servicelogo.png"
                    className="lg:h-[123px] xl:h-[140px] 2xl:h-[157px] 3xl:h-[189px] h-[207px] w-[100%]"
                    alt="ServiceLogo Five"
                  />
                  <Text className="font-bold 3xl:mt-[10px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-white_A701 w-[auto]">
                    5%
                  </Text>
                </Column>
                <Column className="3xl:mb-[11px] mb-[13px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] w-[67%]">
                  <Text className="font-light lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[40px] text-white_A701 w-[auto]">
                    Hoopla Doopla
                  </Text>
                  <Text className="font-bold lg:ml-[121px] xl:ml-[138px] 2xl:ml-[156px] 3xl:ml-[187px] ml-[206px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] mt-[63px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-gray_800 w-[auto]">
                    Card Linked
                  </Text>
                  <Row className="items-center ml-[1px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[91%]">
                    <Stack className="h-[100px] lg:h-[59px] xl:h-[68px] 2xl:h-[76px] 3xl:h-[91px] w-[35%]">
                      <Text className="absolute bottom-[0] font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-gray_800 w-[auto]">
                        Instore
                      </Text>
                      <Text className="absolute font-bold inset-x-[0] mx-[auto] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-white_A701 top-[0] w-[max-content]">
                        Online
                      </Text>
                    </Stack>
                    <Column className="items-center lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[59px] ml-[65px] w-[50%]">
                      <Text className="font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-gray_800 w-[auto]">
                        Receipt
                      </Text>
                      <Text className="font-bold mt-[2px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-white_A701 w-[auto]">
                        Extension
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </Stack>
            <Stack className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[309px] my-[10.375px] xl:my-[6px] lg:my-[6px] 2xl:my-[7px] 3xl:my-[9px] w-[100%]">
              <Row className="absolute bg-black_900 border border-solid border-white_A701 bottom-[0] items-center justify-between lg:px-[20px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] px-[35px] rounded-radius10 w-[100%]">
                <Line className="bg-white_A701 h-[1px] lg:ml-[100px] xl:ml-[115px] 2xl:ml-[129px] 3xl:ml-[155px] ml-[171px] rotate-[90deg] w-[1px]" />
                <Img
                  src="images/img_subtract.png"
                  className="3xl:h-[102px] h-[111px] lg:h-[66px] xl:h-[75px] 2xl:h-[85px] w-[11%]"
                  alt="Subtract One"
                />
              </Row>
              <Row className="absolute h-[max-content] inset-y-[0] justify-evenly left-[0] my-[auto] w-[72%]">
                <Column className="items-center 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:pr-[12px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[20px] pr-[22px] w-[33%]">
                  <Img
                    src="images/img_servicelogo_34X34.png"
                    className="lg:h-[122px] xl:h-[139px] 2xl:h-[157px] 3xl:h-[188px] h-[206px] w-[100%]"
                    alt="ServiceLogo Six"
                  />
                  <Text className="font-bold 3xl:mt-[10px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-white_A701 w-[auto]">
                    4%
                  </Text>
                </Column>
                <Column className="3xl:mb-[11px] mb-[13px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] w-[67%]">
                  <Text className="font-light lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[40px] text-white_A701 w-[auto]">
                    MaxRebates
                  </Text>
                  <Text className="font-bold lg:ml-[121px] xl:ml-[138px] 2xl:ml-[156px] 3xl:ml-[187px] ml-[206px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] mt-[63px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-gray_800 w-[auto]">
                    Card Linked
                  </Text>
                  <Row className="items-center ml-[1px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[91%]">
                    <Stack className="h-[100px] lg:h-[59px] xl:h-[68px] 2xl:h-[76px] 3xl:h-[91px] w-[35%]">
                      <Text className="absolute bottom-[0] font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-gray_800 w-[auto]">
                        Instore
                      </Text>
                      <Text className="absolute font-bold inset-x-[0] mx-[auto] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-white_A701 top-[0] w-[max-content]">
                        Online
                      </Text>
                    </Stack>
                    <Column className="items-center lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[59px] ml-[65px] w-[50%]">
                      <Text className="font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-gray_800 w-[auto]">
                        Receipt
                      </Text>
                      <Text className="font-bold mt-[2px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-white_A701 w-[auto]">
                        Extension
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </Stack>
            <Stack className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[309px] my-[10.375px] xl:my-[6px] lg:my-[6px] 2xl:my-[7px] 3xl:my-[9px] w-[100%]">
              <Row className="absolute bg-black_900 border border-solid border-white_A701 bottom-[0] items-center justify-between lg:px-[20px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] px-[35px] rounded-radius10 w-[100%]">
                <Line className="bg-white_A701 h-[1px] lg:ml-[100px] xl:ml-[115px] 2xl:ml-[129px] 3xl:ml-[155px] ml-[171px] rotate-[90deg] w-[1px]" />
                <Img
                  src="images/img_subtract.png"
                  className="3xl:h-[102px] h-[111px] lg:h-[66px] xl:h-[75px] 2xl:h-[85px] w-[11%]"
                  alt="Subtract Two"
                />
              </Row>
              <Row className="absolute h-[max-content] inset-y-[0] justify-evenly left-[0] my-[auto] w-[72%]">
                <Column className="items-center 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:pr-[12px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[20px] pr-[22px] w-[33%]">
                  <Img
                    src="images/img_servicelogo_1.png"
                    className="lg:h-[122px] xl:h-[139px] 2xl:h-[157px] 3xl:h-[188px] h-[206px] w-[100%]"
                    alt="ServiceLogo Seven"
                  />
                  <Text className="font-bold 3xl:mt-[10px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-white_A701 w-[auto]">
                    4%
                  </Text>
                </Column>
                <Column className="3xl:mb-[11px] mb-[13px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] w-[67%]">
                  <Text className="font-light lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[40px] text-white_A701 w-[auto]">
                    rebatesme
                  </Text>
                  <Text className="font-bold lg:ml-[121px] xl:ml-[138px] 2xl:ml-[156px] 3xl:ml-[187px] ml-[206px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] mt-[63px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-gray_800 w-[auto]">
                    Card Linked
                  </Text>
                  <Row className="items-center ml-[1px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[91%]">
                    <Stack className="h-[100px] lg:h-[59px] xl:h-[68px] 2xl:h-[76px] 3xl:h-[91px] w-[35%]">
                      <Text className="absolute bottom-[0] font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-gray_800 w-[auto]">
                        Instore
                      </Text>
                      <Text className="absolute font-bold inset-x-[0] mx-[auto] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-white_A701 top-[0] w-[max-content]">
                        Online
                      </Text>
                    </Stack>
                    <Column className="items-center lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[59px] ml-[65px] w-[50%]">
                      <Text className="font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-gray_800 w-[auto]">
                        Receipt
                      </Text>
                      <Text className="font-bold mt-[2px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-white_A701 w-[auto]">
                        Extension
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </Stack>
            <Stack className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[309px] my-[10.375px] xl:my-[6px] lg:my-[6px] 2xl:my-[7px] 3xl:my-[9px] w-[100%]">
              <Row className="absolute bg-black_900 border border-solid border-white_A701 bottom-[0] items-center justify-between lg:px-[20px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] px-[35px] rounded-radius10 w-[100%]">
                <Line className="bg-white_A701 h-[1px] lg:ml-[100px] xl:ml-[115px] 2xl:ml-[129px] 3xl:ml-[155px] ml-[171px] rotate-[90deg] w-[1px]" />
                <Img
                  src="images/img_subtract.png"
                  className="3xl:h-[102px] h-[111px] lg:h-[66px] xl:h-[75px] 2xl:h-[85px] w-[11%]"
                  alt="Subtract Three"
                />
              </Row>
              <Row className="absolute h-[max-content] inset-y-[0] justify-evenly left-[0] my-[auto] w-[72%]">
                <Column className="items-center 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:pr-[12px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[20px] pr-[22px] w-[33%]">
                  <Img
                    src="images/img_servicelogo_2.png"
                    className="lg:h-[122px] xl:h-[139px] 2xl:h-[157px] 3xl:h-[188px] h-[206px] w-[100%]"
                    alt="ServiceLogo Eight"
                  />
                  <Text className="font-bold 3xl:mt-[10px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-white_A701 w-[auto]">
                    4%
                  </Text>
                </Column>
                <Column className="3xl:mb-[11px] mb-[13px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] w-[67%]">
                  <Text className="font-light lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[40px] text-white_A701 w-[auto]">
                    Dollar Dig
                  </Text>
                  <Text className="font-bold lg:ml-[121px] xl:ml-[138px] 2xl:ml-[156px] 3xl:ml-[187px] ml-[206px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] mt-[63px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-gray_800 w-[auto]">
                    Card Linked
                  </Text>
                  <Row className="items-center ml-[1px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[91%]">
                    <Stack className="h-[100px] lg:h-[59px] xl:h-[68px] 2xl:h-[76px] 3xl:h-[91px] w-[35%]">
                      <Text className="absolute bottom-[0] font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-gray_800 w-[auto]">
                        Instore
                      </Text>
                      <Text className="absolute font-bold inset-x-[0] mx-[auto] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-white_A701 top-[0] w-[max-content]">
                        Online
                      </Text>
                    </Stack>
                    <Column className="items-center lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[59px] ml-[65px] w-[50%]">
                      <Text className="font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-gray_800 w-[auto]">
                        Receipt
                      </Text>
                      <Text className="font-bold mt-[2px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-white_A701 w-[auto]">
                        Extension
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </Stack>
            <Stack className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[309px] my-[10.375px] xl:my-[6px] lg:my-[6px] 2xl:my-[7px] 3xl:my-[9px] w-[100%]">
              <Row className="absolute bg-black_900 border border-solid border-white_A701 bottom-[0] items-center justify-between lg:px-[20px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] px-[35px] rounded-radius10 w-[100%]">
                <Line className="bg-white_A701 h-[1px] lg:ml-[100px] xl:ml-[115px] 2xl:ml-[129px] 3xl:ml-[155px] ml-[171px] rotate-[90deg] w-[1px]" />
                <Img
                  src="images/img_subtract.png"
                  className="3xl:h-[102px] h-[111px] lg:h-[66px] xl:h-[75px] 2xl:h-[85px] w-[11%]"
                  alt="Subtract Four"
                />
              </Row>
              <Row className="absolute h-[max-content] inset-y-[0] justify-evenly left-[0] my-[auto] w-[72%]">
                <Column className="items-center 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:pr-[12px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[20px] pr-[22px] w-[33%]">
                  <Img
                    src="images/img_servicelogo_3.png"
                    className="lg:h-[122px] xl:h-[139px] 2xl:h-[157px] 3xl:h-[188px] h-[206px] w-[100%]"
                    alt="ServiceLogo Nine"
                  />
                  <Text className="font-bold 3xl:mt-[10px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-white_A701 w-[auto]">
                    4%
                  </Text>
                </Column>
                <Column className="3xl:mb-[11px] mb-[13px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] w-[67%]">
                  <Text className="font-light lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[40px] text-white_A701 w-[auto]">
                    GoCashBack
                  </Text>
                  <Text className="font-bold lg:ml-[121px] xl:ml-[138px] 2xl:ml-[156px] 3xl:ml-[187px] ml-[206px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] mt-[63px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-gray_800 w-[auto]">
                    Card Linked
                  </Text>
                  <Row className="items-center ml-[1px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[91%]">
                    <Stack className="h-[100px] lg:h-[59px] xl:h-[68px] 2xl:h-[76px] 3xl:h-[91px] w-[35%]">
                      <Text className="absolute bottom-[0] font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-gray_800 w-[auto]">
                        Instore
                      </Text>
                      <Text className="absolute font-bold inset-x-[0] mx-[auto] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-white_A701 top-[0] w-[max-content]">
                        Online
                      </Text>
                    </Stack>
                    <Column className="items-center lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[59px] ml-[65px] w-[50%]">
                      <Text className="font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-gray_800 w-[auto]">
                        Receipt
                      </Text>
                      <Text className="font-bold mt-[2px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-white_A701 w-[auto]">
                        Extension
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </Stack>
          </List>
        </Row>
      </Column>
    </>
  );
};

export default StoreRatePageWithAccountPage;
