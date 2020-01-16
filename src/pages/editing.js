import React from "react"
import { color, Box, Flex, radius, Line} from "../components/Style"

import Layout, {
  Paragraph,
  ConstraintMaxWidth,
  SectionMargin,
  FractionGrid,
  SectionTitle,
  innerPadding,
  FeatureWithIconItem,
} from "../components/Layout"
import SEO from "../components/SEO"
import Subhero from "../components/Subhero"
import Process from "../components/Process"
import AppLink from "../components/AppLink"
import Footer from "../components/Footer"
import Whyez from "../components/Whyez"

const PrimaryCurrentPageThemeColor = color.green
export default () => (
  <Layout>
    <SEO title="最强留学Essay代写服务" />

    <Subhero />

    <SectionMargin>
        <ConstraintMaxWidth>
          <FractionGrid column={[1, 2]} my={[2.5, 5]}>
            <Flex column gap={1.5} w={"100%"}>
              <Paragraph
                type={1}
                title="适合人群"
                paragraph="留学生大一至大四学生在读，研究生在读"
              />
              <Line color={color.gray5} />
              <Paragraph
                type={1}
                title="服务方式"
                paragraph="VIP线上1对1定制写作"
              />
              <Line color={color.gray5} />
              <Paragraph
                type={1}
                title="服务导师"
                paragraph="金牌导师；王牌导师；海外教授"
              />
            </Flex>

            <Box
              bg={PrimaryCurrentPageThemeColor}
              p={innerPadding.xl}
              color={color.white}
              r={radius.lg}
              position={"relative"}
              overflow={"hidden"}
            >
              <Box scale={2} mb={1}>
                高质量的英文论文订制
              </Box>

              <Box o={0.8} paragraph>
                <p>
                  EzEssay采用独家 "B.E.S.T"
                  管理方案，先由文书导师对学生进行头脑风暴（Brain storm)
                  与背景评估（Evaluation)，24/7在线与外籍写作老师同步交流（Synchronization)；
                </p>
                <p>
                  通过（Turnitin)
                  反抄袭检测系统检测，确保得到一份高质量无同类的个人留学文书。
                </p>
              </Box>

              <Box
                o={0.1}
                position={"absolute"}
                top={0}
                right={0}
                bottom={0}
                left={0}
              />
            </Box>
          </FractionGrid>
        </ConstraintMaxWidth>
      </SectionMargin>
      <SectionMargin>
        <ConstraintMaxWidth>
          <SectionTitle>服务特色</SectionTitle>

          <FractionGrid column={[1, 3]}>
            <FeatureWithIconItem
              icon={book}
              iconColor={PrimaryCurrentPageThemeColor}
              title="涵盖所有文书类型"
              description="无论是人文科学还是理科专业，不管你是来自什么学科领域，EzEssay强大的导师团队都能帮你搞定学业难题。"
            />
            <FeatureWithIconItem
              icon={msg}
              iconColor={PrimaryCurrentPageThemeColor}
              title="与你的导师进行线上交流"
              description="您可以指定或者由我们帮您匹配最合适您的文书导师，并且可以与他/她进行在线进行沟通交流，分享你的写作风格与观点。"
            />
            <FeatureWithIconItem
              icon={shield}
              iconColor={PrimaryCurrentPageThemeColor}
              title="防抄袭检测引擎"
              description="每一篇文书都由外籍导师一对一进行服务，同时我们内置的自动抄袭检测系统确保您的文书独一无抄袭，杜绝抄袭。"
            />
          </FractionGrid>
        </ConstraintMaxWidth>
      </SectionMargin>
    
    <Whyez />
     
    <Process />

    <AppLink />

    <Footer />
  </Layout>
)

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
