import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Stack, Text, Line, List } from "components";

const SearchAFilterLowestPage = () => {
  const navigate = useNavigate();

  function handleNavigate11() {
    navigate("/mainpagenoaccount");
  }

  return (
    <>
      <Column className="bg-black_900 font-inter items-center mx-[auto] lg:pb-[48px] xl:pb-[55px] 2xl:pb-[62px] 3xl:pb-[75px] pb-[83px] w-[100%]">
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
                onClick={handleNavigate11}
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
        <Column className="items-center mt-[103px] lg:mt-[60px] xl:mt-[69px] 2xl:mt-[78px] 3xl:mt-[93px] w-[40%]">
          <List
            className="gap-[0] min-h-[auto] w-[100%]"
            orientation="vertical"
          >
            <Row className="bg-cyan_200 border border-black_900 border-solid justify-between lg:my-[11px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] my-[19px] lg:p-[12px] xl:p-[14px] 2xl:p-[15px] 3xl:p-[19px] p-[21px] shadow-bs w-[100%]">
              <Img
                src="images/img_vector_bluegray_800.png"
                className="3xl:h-[102px] h-[112px] lg:h-[67px] xl:h-[76px] 2xl:h-[85px] lg:mb-[5px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] mb-[9px] lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] ml-[5px] mt-[4px] w-[17%]"
                alt="Vector"
              />
              <Column className="lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[44px] w-[41%]">
                <Text className="font-bold 3xl:mr-[11px] mr-[13px] lg:mr-[7px] xl:mr-[8px] 2xl:mr-[9px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-gray_700 w-[auto]">
                  Abercrombie
                </Text>
                <Text className="font-normal lg:ml-[44px] xl:ml-[50px] 2xl:ml-[56px] 3xl:ml-[68px] ml-[75px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-black_900 w-[auto]">
                  Best Rate: 4%
                </Text>
              </Column>
              <Img
                src="images/img_home.png"
                className="lg:h-[32px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[50px] h-[54px] lg:mr-[36px] xl:mr-[41px] 2xl:mr-[47px] 3xl:mr-[56px] mr-[62px] lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] my-[36px] w-[7%]"
                alt="home"
              />
            </Row>
            <Row className="bg-cyan_200 border border-black_900 border-solid lg:my-[11px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] my-[19px] lg:p-[10px] xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] p-[17px] shadow-bs w-[100%]">
              <Img
                src="images/img_vector.png"
                className="3xl:h-[102px] h-[112px] lg:h-[67px] xl:h-[76px] 2xl:h-[85px] lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[20px] mb-[22px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] w-[17%]"
                alt="Vector One"
              />
              <Column className="lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] 3xl:ml-[118px] ml-[130px] lg:ml-[76px] xl:ml-[87px] 2xl:ml-[98px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] mt-[37px] w-[36%]">
                <Text className="font-bold lg:mr-[33px] xl:mr-[37px] 2xl:mr-[42px] 3xl:mr-[50px] mr-[56px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-gray_700 w-[auto]">
                  Apple
                </Text>
                <Text className="font-normal lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] ml-[45px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[19px] mt-[21px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-black_900 w-[auto]">
                  Best Rate: 5%
                </Text>
              </Column>
              <Img
                src="images/img_home.png"
                className="lg:h-[32px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[50px] h-[54px] lg:mb-[25px] xl:mb-[28px] 2xl:mb-[32px] 3xl:mb-[39px] mb-[43px] lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] ml-[82px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] mt-[37px] w-[7%]"
                alt="home One"
              />
            </Row>
            <Row className="bg-cyan_200 border border-black_900 border-solid items-end lg:my-[11px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] my-[19px] lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[22px] p-[25px] shadow-bs w-[100%]">
              <Img
                src="images/img_amazon.png"
                className="3xl:h-[102px] h-[112px] lg:h-[67px] xl:h-[76px] 2xl:h-[85px] lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] ml-[2px] w-[18%]"
                alt="Amazon"
              />
              <Column className="mb-[4px] 3xl:ml-[104px] ml-[115px] lg:ml-[67px] xl:ml-[77px] 2xl:ml-[87px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] mt-[33px] w-[39%]">
                <Text className="font-bold lg:mr-[30px] xl:mr-[35px] 2xl:mr-[39px] 3xl:mr-[47px] mr-[52px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-gray_700 w-[auto]">
                  Amazon
                </Text>
                <Text className="font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[60px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-black_900 w-[auto]">
                  Best Rate: 7%
                </Text>
              </Column>
              <Img
                src="images/img_home.png"
                className="lg:h-[32px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[50px] h-[54px] lg:mb-[21px] xl:mb-[24px] 2xl:mb-[28px] 3xl:mb-[33px] mb-[37px] lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] ml-[82px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27px] w-[7%]"
                alt="home Two"
              />
            </Row>
          </List>
          <Row className="bg-cyan_200 border border-black_900 border-solid justify-between lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[38px] mt-[42px] xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] p-[15px] lg:p-[8px] shadow-bs w-[100%]">
            <Img
              src="images/img_group.png"
              className="3xl:h-[102px] h-[112px] lg:h-[67px] xl:h-[76px] 2xl:h-[85px] lg:mb-[12px] xl:mb-[14px] 2xl:mb-[15px] 3xl:mb-[19px] mb-[21px] 3xl:ml-[10px] ml-[11px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[4px] w-[17%]"
              alt="Group"
            />
            <Column className="lg:mr-[40px] xl:mr-[45px] 2xl:mr-[51px] 3xl:mr-[61px] mr-[68px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[32px] w-[56%]">
              <Row className="justify-between w-[100%]">
                <Text className="font-bold xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-gray_700 w-[auto]">
                  Adidas
                </Text>
                <Img
                  src="images/img_home.png"
                  className="lg:h-[32px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[50px] h-[54px] w-[13%]"
                  alt="home Three"
                />
              </Row>
              <Text className="font-normal lg:ml-[33px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] 2xl:mr-[102px] 3xl:mr-[122px] mr-[135px] lg:mr-[79px] xl:mr-[91px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-black_900 w-[auto]">
                Best Rate: 11%
              </Text>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default SearchAFilterLowestPage;
