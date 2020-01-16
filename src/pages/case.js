import React, { useState, useEffect } from "react"
import axios from "axios"
import SEO from "../components/SEO"
import Layout, {
  ConstraintMaxWidth,
  SectionTitle,
  SectionMargin,
  QuarterGrid,
  apiURL,
  FractionGrid,
  innerPadding,
} from "../components/Layout"

import SubHero2 from "../components/SubHero2"
import FeaturedCase from "../components/FeaturedCase"
import Feedback from "../components/Feedback"
import AppLink from "../components/AppLink"
import Footer from "../components/Footer"
import CaseItem from "../components/CaseItem"

import heroCase from "../images/heroCase.png"
import { NaviGroup } from "./tutor"
import { Box, color, ClickableBox, radius, Flex } from "../components/Style"

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
          "/cases?" +
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
      <SEO title="写作案例" />

      <SubHero2 title="写作案例" bgi={heroCase} />

      <FeaturedCase />

      <SectionMargin>
        <ConstraintMaxWidth>
          <SectionTitle id="all">全部案例</SectionTitle>

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
                    data.map((item, i) => <CaseItem key={i} data={item} />)
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
