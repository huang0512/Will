import React, { useState, useEffect } from "react"
import axios from "axios"
import queryString from "query-string"
import {
  color,
  Box,
  Flex,
  radius,
  Line,
  ClickableBox,
} from "../components/Style"
import Layout, {
  ConstraintMaxWidth,
  innerPadding,
  globalPhoneGap,
  globalDesktopGap,
  QuarterGrid,
  Tag,
  Breadcrumbs,
  apiURL,
  globalGap,
  formatDate,
  FractionGrid,
} from "../components/Layout"
import { TutorCardContent, NaviGroup } from "./tutor"

import SEO from "../components/SEO"
import Header from "../components/Header"
import Service from "../components/Service"
import Footer from "../components/Footer"
import CaseItem from "../components/CaseItem"
import AppLink from "../components/AppLink"

export default () => {
  const [data, setData] = useState()
  const [relatedCaseData, setRelatedCaseData] = useState()

  useEffect(() => {
    let ignore = false

    let parameter = queryString.parse(window.location.search)

    async function fetchData() {
      const result = await axios(apiURL + "/tutors/" + parameter["id"])
      if (!ignore) setData(result.data)

      const resultCase = await axios(
        apiURL + "/cases/?tutor.id=" + parameter["id"]
      )
      if (!ignore) setRelatedCaseData(resultCase.data)
    }

    fetchData()

    return () => {
      ignore = true
    }
  }, [])

  return (
    <Layout>
      <SEO title="导师简历" />

      <Header onLight />

      <Breadcrumbs label="全部导师" link="/tutor" title="导师详情" />

      <ConstraintMaxWidth>
        <Box r={radius.lg} bg={color.blockBG}>
          <TutorCardContent data={data} />
        </Box>
      </ConstraintMaxWidth>

      <Box my={[globalPhoneGap, globalDesktopGap * 1.5]}>
        <ConstraintMaxWidth>
          <QuarterGrid>
            <NaviGroup>
              <Box>
                <Box my={1.5} color={color.gray}>
                  简历
                </Box>
                {resumeNaviDataDemo.map((item, i) => (
                  <ClickableBox
                    key={i}
                    onClick={() =>
                      window.scrollTo({
                        top:
                          document.getElementById(item.hashtag).offsetTop - 32,
                        behavior: "smooth",
                      })
                    }
                  >
                    <Box cursor={"pointer"} my={1.5}>
                      {item.label}
                    </Box>
                  </ClickableBox>
                ))}
              </Box>
            </NaviGroup>

            <Flex column gap={innerPadding.lg}>
              <TutorSection>
                <TutorSectionTitle title="擅长专业" id="major" />
                {data &&
                  (data.relatedmajors.length > 0
                    ? data.relatedmajors.map((major, i) => (
                        <Tag
                          key={i}
                          scale={0}
                          mr={0.75}
                          mb={0.75}
                          color={color.white}
                          bg={color.plum}
                        >
                          {major.major_name}
                        </Tag>
                      ))
                    : "暂无")}
              </TutorSection>

              <Line color={color.gray5} />

              <TutorSection>
                <TutorSectionTitle title="自我介绍" id="introduction" />
                <Box color={color.gray} paragraph>
                  {data && (data.bio ? data.bio : "暂无")}
                </Box>
              </TutorSection>

              <Line color={color.gray5} />

              <TutorSection>
                <TutorSectionTitle
                  title="教育经历"
                  id="educational-experience"
                />
                {data &&
                  (data.edu_exp.length > 0
                    ? data.edu_exp.map((item, i) => (
                        <ExpItem key={i} data={item} />
                      ))
                    : "暂无")}
              </TutorSection>

              <Line color={color.gray5} />

              <TutorSection>
                <TutorSectionTitle title="工作经历" id="work-experience" />
                {data &&
                  (data.work_exp.length > 0
                    ? data.work_exp.map((item, i) => (
                        <ExpItem key={i} data={item} />
                      ))
                    : "暂无")}
              </TutorSection>

              <Line color={color.gray5} />

              <TutorSection>
                <TutorSectionTitle title="经手案例" id="case" />
                <FractionGrid>
                  {relatedCaseData &&
                    (relatedCaseData.length > 0
                      ? relatedCaseData.map((item, i) => (
                          <CaseItem key={i} data={item} />
                        ))
                      : "暂无")}
                </FractionGrid>
              </TutorSection>
            </Flex>
          </QuarterGrid>
        </ConstraintMaxWidth>
      </Box>

      <Service />

      <AppLink />

      <Footer />
    </Layout>
  )
}

const TutorSection = ({ children }) => (
  <Box mb={innerPadding.xl}>{children}</Box>
)

const TutorSectionTitle = props => (
  <Box scale={2} mb={1} id={props.id}>
    {props.title}
  </Box>
)

const ExpItem = ({ data }) => (
  <Flex
    my={[globalPhoneGap * 1.5, globalDesktopGap * 1.5]}
    paragraph
    responsive
    gap={globalGap}
  >
    <Box flex={[null, 1]} color={color.gray}>
      {formatDate(data.time_start)} - {formatDate(data.time_end)}
    </Box>
    <Box flex={[null, 3]}>
      <Box scale={1}>{data.title}</Box>
      <Box color={color.gray} mt={0.5}>
        {data.description}
      </Box>
      <Box color={color.gray2} mt={1}>
        {data.detail}
      </Box>
    </Box>
  </Flex>
)

// Data

const resumeNaviDataDemo = [
  { label: "擅长专业", hashtag: "major" },
  { label: "自我介绍", hashtag: "introduction" },
  { label: "教育经历", hashtag: "educational-experience" },
  { label: "工作经历", hashtag: "work-experience" },
  { label: "经手案例", hashtag: "case" },
]
