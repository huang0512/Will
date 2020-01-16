import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "gatsby"
import styled from "styled-components"
import SEO from "../components/SEO"
import Layout, {
  ConstraintMaxWidth,
  SectionTitle,
  SectionMargin,
  QuarterGrid,
  LinkBox,
  innerPadding,
  Tag,
  Paragraph,
  globalDesktopGap,
  globalPhoneGap,
  apiURL,
  MobileFlexAlignItemsStretch,
  FractionGrid,
} from "../components/Layout"

import SubHero2 from "../components/SubHero2"
import FeaturedTutor from "../components/FeaturedTutor"
import {
  Box,
  radius,
  color,
  Flex,
  phone,
  desktop,
  ClickableBox,
} from "../components/Style"

import heroTutor from "../images/heroTutor.png"
import { NumProve } from "../components/Whyez"
import Feedback from "../components/Feedback"
import AppLink from "../components/AppLink"
import Footer from "../components/Footer"

export default () => {
  const [data, setData] = useState()
  const [pageNumber, setPageNumber] = useState(1)

  const [activeCategoryID, setActiveCategoryID] = useState()
  const [relatedCategoryData, setRelatedCategoryData] = useState()

  const [activeMajorID, setActiveMajorID] = useState()
  const [relatedMajorData, setRelatedMajorData] = useState()

  useEffect(() => {
    let ignore = false

    async function fetchData() {
      const categoryResult = await axios(apiURL + "/relatedcategories")
      if (!ignore) setRelatedCategoryData(categoryResult.data)

      const relatedMajorResult = await axios(apiURL + "/relatedmajors")
      if (!ignore) setRelatedMajorData(relatedMajorResult.data)
    }

    fetchData()

    return () => {
      ignore = true
    }
  }, [])

  useEffect(() => {
    let ignore = false

    async function fetchData() {
      const result = await axios(
        apiURL +
          "/tutors?" +
          (activeMajorID ? "&relatedmajors.id=" + activeMajorID : "") +
          (activeCategoryID ? "&relatedcategories.id=" + activeCategoryID : "")
      )
      if (!ignore) setData(result.data)
    }

    fetchData()

    return () => {
      ignore = true
    }
  }, [activeMajorID, activeCategoryID])

  return (
    <Layout>
      <SEO title="导师团队" />

      <SubHero2 title="导师团队" bgi={heroTutor} />

      <FeaturedTutor />

      <SectionMargin>
        <ConstraintMaxWidth>
          <SectionTitle id="all">全部导师</SectionTitle>

          <QuarterGrid>
            <NaviGroup>
              <Box>
                <Box my={1.5} color={color.gray}>
                  类别
                </Box>
                {relatedCategoryData &&
                  relatedCategoryData.map((item, i) => (
                    <Box key={i} my={1.5}>
                      <Flex aic>
                        <ClickableBox
                          as="span"
                          onClick={() => {
                            setActiveCategoryID(item.id)
                            setData()
                            window.scrollTo({
                              top:
                                document.getElementById("all").offsetTop - 32,
                              behavior: "smooth",
                            })
                          }}
                          style={{
                            color:
                              activeCategoryID === item.id
                                ? color.ezstudy
                                : null,
                          }}
                        >
                          {item.category_name}
                        </ClickableBox>
                        {activeCategoryID === item.id && (
                          <Flex
                            aic
                            jcc
                            ml={0.5}
                            w={1}
                            h={1}
                            color={color.ezstudy}
                            onClick={() => setActiveCategoryID()}
                            cursor={"pointer"}
                          >
                            ×
                          </Flex>
                        )}
                      </Flex>
                    </Box>
                  ))}
              </Box>

              <Box>
                <Box my={1.5} color={color.gray}>
                  专业
                </Box>
                {relatedMajorData &&
                  relatedMajorData.map((item, i) => (
                    <Box key={i} my={1.5}>
                      <Flex aic>
                        <ClickableBox
                          as="span"
                          onClick={() => {
                            setActiveMajorID(item.id)
                            setData()
                            window.scrollTo({
                              top:
                                document.getElementById("all").offsetTop - 32,
                              behavior: "smooth",
                            })
                          }}
                          style={{
                            color:
                              activeMajorID === item.id ? color.ezstudy : null,
                          }}
                        >
                          {item.major_name}
                        </ClickableBox>
                        {activeMajorID === item.id && (
                          <Flex
                            aic
                            jcc
                            ml={0.5}
                            w={1}
                            h={1}
                            color={color.ezstudy}
                            onClick={() => setActiveMajorID()}
                            cursor={"pointer"}
                          >
                            ×
                          </Flex>
                        )}
                      </Flex>
                    </Box>
                  ))}
              </Box>
            </NaviGroup>

            <Box>
              <FractionGrid>
                {data &&
                  (data.length > 0 ? (
                    data
                      .slice(pageNumber * 10 - 10, pageNumber * 10)
                      .map((item, i) => (
                        <TutorCardWithLink key={i} data={item} />
                      ))
                  ) : (
                    <Box bg={color.blockBG} p={innerPadding.md} r={radius.lg}>
                      暂无信息，请重新筛选。
                    </Box>
                  ))}

                <Flex aic gap={0.75}>
                  {data &&
                    (data.length > 10 &&
                      Array(Math.ceil(data.length / 10))
                        .fill()
                        .map((item, i) => (
                          <Box key={i}>
                            <Box
                              display={
                                i + 1 === pageNumber + 4 ||
                                (i + 1 === 2 && pageNumber > 4)
                                  ? null
                                  : "none"
                              }
                              color={color.gray}
                            >
                              …
                            </Box>
                            <Box
                              display={
                                i + 1 === 1 ||
                                i + 1 === pageNumber ||
                                i + 1 === data.length ||
                                (pageNumber - 3 < i + 1 &&
                                  i + 1 < pageNumber + 3)
                                  ? null
                                  : "none"
                              }
                              cursor={"pointer"}
                              px={0.75}
                              py={0.5}
                              r={radius.sm}
                              bg={{
                                normal:
                                  i + 1 === pageNumber ? color.ezstudy : null,
                                hover:
                                  i + 1 === pageNumber ? null : color.gray6,
                              }}
                              color={i + 1 === pageNumber ? color.white : null}
                              onClick={() => {
                                setPageNumber(i + 1)
                                window.scrollTo({
                                  top:
                                    document.getElementById("all").offsetTop -
                                    32,
                                  behavior: "smooth",
                                })
                              }}
                            >
                              {i + 1}
                            </Box>
                          </Box>
                        )))}
                </Flex>
              </FractionGrid>
            </Box>
          </QuarterGrid>
        </ConstraintMaxWidth>
      </SectionMargin>

      <Feedback />

      <AppLink />

      <Footer />
    </Layout>
  )
}

export const TutorCardWithLink = props => {
  return (
    <LinkBox>
      <Link to={"/tutordetail?id=" + props.data.id}>
        <TutorCardContent data={props.data} />
      </Link>
    </LinkBox>
  )
}

export const TutorCardContent = ({ data }) => {
  return (
    <Box p={innerPadding.lg}>
      <MobileFlexAlignItemsStretch aic jcsb responsive gap={innerPadding.md}>
        <Flex aic flex={[1, 5]}>
          <Box
            flex={"none"}
            bgi={data && apiURL + data.avatar.url}
            bgc={color.white}
            display={"inline-block"}
            overflow={"hidden"}
            r={radius.pill}
            w={[4, 8]}
            h={[4, 8]}
            mr={innerPadding.md}
          />

          <Paragraph
            type={1}
            title={
              <Flex aic>
                {data && data.name}
                {data &&
                  (data.foreigner && (
                    <Tag bg={color.plumLight} color={color.plum} ml={0.5}>
                      外籍
                    </Tag>
                  ))}
              </Flex>
            }
            paragraph={
              data &&
              (data.school ? data.school : "暂无院校信息") +
                "・" +
                (data.major ? data.major : "暂无专业信息")
            }
          />
        </Flex>

        <Flex
          flex={[1, 2]}
          childFlex={[1, null]}
          gap={[globalPhoneGap, globalDesktopGap * 2]}
        >
          <NumProve
            type={2}
            num={data && (data.services_count ? data.services_count : "-")}
            label="服务次数"
          />
          <NumProve
            type={2}
            num={data && (data.rate ? data.rate + "%" : "-")}
            label="好评率"
          />
        </Flex>
      </MobileFlexAlignItemsStretch>
    </Box>
  )
}

export const NaviGroup = ({ children }) => (
  <Box>
    <NaviGroupStyle position={"sticky"} top={"32px"}>
      {children}
    </NaviGroupStyle>
  </Box>
)

const NaviGroupStyle = styled(Box)`
  ${phone`
    display: flex;
    > * {
      flex: 1;
    }
  `};
  ${desktop`
    > * + * {
      margin-top: 3em;
    }
    > * {
      > :first-child {
        margin-top: 0;
      }
    }
  `}
`
