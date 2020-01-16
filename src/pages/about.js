import React from "react"
import { color, Box, Flex, radius, Line} from "../components/Style"
import styled from "styled-components"
import Layout, {
  ConstraintMaxWidth,
  SectionMargin,
  FractionGrid,
  globalGap,
  maxRowWidth,
} from "../components/Layout"
import SEO from "../components/SEO"
import SubHero2 from "../components/Subhero2"
import AppLink from "../components/AppLink"
import Footer from "../components/Footer"
import BlogSummary from "../components/BlogSummary"
import { VideoIntro } from "../components/Whyez"
import Office from "../components/Office"
import heroAbout from "../images/heroAbout.png"
import Joinus from "../components/Joinus"
import FAQ from "../components/FAQ"


export default () => (
  <Layout>
    <SEO title="关于EzEssay" />

    <SubHero2 title="关于我们" bgi={heroAbout} />
    
    <SectionMargin>
    <ConstraintMaxWidth>
          <FractionGrid column={[1, 2]} mt={[2.5, 5]}>
            <Box paragraph>
              <Box scale={1} mt={0.5}>
                EzEssay成立于 2016 年美国洛杉矶市，是为解决留学生英文困境而创立的高端英文写作辅导品牌。
              </Box>
              <Box color={color.gray} mt={globalGap}>
                <p>
                EzEssay2016年成立于洛杉矶，是北美最专业的写作专家，EzEssay旨在帮助客户创造个性化、高品质的英文写作，570余名写作专家实时在线，为留学生们提供值得信赖的教育服务。其中包括各种科目的论文作业定制代写服务，以及简历润色、语法修改等。
                </p>
                <p>
                在EzEssay，您可以拥有专属写作老师为您进行一对一服务，省时省力，用低廉的价格收获超高性价比的优质文章；同时EzEssay承诺您的信息安全，一切从客户的角度出发，及时沟通，按时送达！
                </p>
              </Box>
            </Box>

            <VideoIntro />
          </FractionGrid>
        </ConstraintMaxWidth>
      </SectionMargin>

    <SectionMargin position={"relative"}>
        <ConstraintMaxWidth>
          <Timeline column={[1, 6]}>
            <TimelineItem
              year="2016"
              month="06"
              content="EzEssay成立于美国洛杉矶UCLA的宿舍内"
            />
            <TimelineItem
              year="2017"
              month="04"
              content="手机 App 正式登陆应用商店在这一天，EzEssay迎来了第 1000 人次的写作任务"
            />
            <TimelineItem
              year="2017"
              month="06"
              content="完善业务操作流程，推出简历润色服务"
            />
            <TimelineItem
              year="2018"
              month="06"
              content="EzEssay客服部门成立，实现全球24小时客服服务"
            />
            <TimelineItem
              year="2018"
              month="07"
              content="EzEssay该年留学申请文书写作获得了90%的录取率"
            />
            <TimelineItem
              year="2019"
              month="08"
              content="与抖音以及知乎等各大平台签订合作协议"
            />
          </Timeline>
        </ConstraintMaxWidth>

        <JustDesktopLine
          color={color.gray5}
          position={"absolute"}
          top={"50%"}
          lefe={0}
          right={0}
        />
      </SectionMargin>
    
    <Joinus />
    <Office />
    <FAQ />
    <AppLink />

    <Footer />
  </Layout>
)

const TimelineItem = props => (
    <Flex gap={1}>
      <Box
        flex="none"
        w={0.5}
        h={0.5}
        mt={0.5}
        bg={color.ezessay}
        r={radius.pill}
      />
      <Box>
        <Box scale={1}>
          {props.year}
          <Box as="span" ml={0.25} color={color.gray2}>
            {props.month}
          </Box>
        </Box>
        <Box color={color.gray} mt={1} paragraph>
          {props.content}
        </Box>
      </Box>
    </Flex>
  )
  
  const Timeline = styled(FractionGrid)`
    @media (min-width: ${maxRowWidth}px) {
      > *:nth-child(2n) {
        margin-top: 100%;
      }
    }
  `
  
  const JustDesktopLine = styled(Line)`
    display: none;
    @media (min-width: ${maxRowWidth}px) {
      display: block;
    }
  `

  
const book = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9H24C27.1826 9 30.2348 10.2643 32.4853 12.5147C34.7357 14.7652 36 17.8174 36 21V63C36 60.6131 35.0518 58.3239 33.364 56.636C31.6761 54.9482 29.3869 54 27 54H6V9Z"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M66 9H48C44.8174 9 41.7652 10.2643 39.5147 12.5147C37.2643 14.7652 36 17.8174 36 21V63C36 60.6131 36.9482 58.3239 38.636 56.636C40.3239 54.9482 42.6131 54 45 54H66V9Z"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const msg = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M63 34.5C63.0103 38.4596 62.0852 42.3656 60.3 45.9C58.1833 50.1352 54.9293 53.6975 50.9023 56.1878C46.8754 58.6781 42.2347 59.9981 37.5 60C33.5404 60.0103 29.6343 59.0852 26.1 57.3L9 63L14.7 45.9C12.9148 42.3656 11.9897 38.4596 12 34.5C12.0018 29.7652 13.3218 25.1245 15.8122 21.0976C18.3025 17.0707 21.8648 13.8167 26.1 11.7C29.6343 9.91476 33.5404 8.98964 37.5 8.99996H39C45.253 9.34494 51.1591 11.9842 55.5874 16.4125C60.0157 20.8408 62.655 26.7469 63 33V34.5Z"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const shield = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M36 66C36 66 60 54 60 36V15L36 6L12 15V36C12 54 36 66 36 66Z"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
