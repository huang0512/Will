import React from "react"
import {
  RowMaxWidth,
  Heading,
  ResponsiveGrid,
  RowPadding,
  globalPhoneGap,
  globalDesktopGap,
} from "./Layout"
import { Box, color, radius, shadow, Flex } from "./Style"
import { Step } from "./Process"

import confidenceIllustration from "../images/confidenceIllustration.png"
import before from "../images/before.png"
import after from "../images/after.png"

export default () => (
  <Box bg={color.bianca}>
    <RowPadding>
      <RowMaxWidth>
        <ResponsiveGrid column={[1, 2]}>
          <Box>
            <Heading>
              我们的写作质量<span>值得信赖</span>
            </Heading>
            <Box mt={[2, 4]}>
              <img
                src={confidenceIllustration}
                width="100%"
                height="auto"
                alt="feature illustration"
              />
            </Box>
          </Box>

          <Box>
            {stepData.map((item, i) => (
              <Step key={i} item={item} i={i} />
            ))}
          </Box>
        </ResponsiveGrid>

        <Box scale={1} mt={2} mb={1} o={0.75}>
          论文精修范文前后对比
        </Box>
        <ResponsiveGrid column={[1, 2]}>
          <Document title={"论文精修前"} themeColor={color.yellow}>
            <img src={before} width="100%" height="auto" alt="" />
          </Document>
          <Document title={"论文精修后"} themeColor={color.ezessay}>
            <img src={after} width="100%" height="auto" alt="" />
          </Document>
        </ResponsiveGrid>

        <Box
          mt={[globalPhoneGap * 1.5, globalDesktopGap * 1.5]}
          align={"center"}
        >
          <a
            href="https://drive.google.com/drive/folders/15NSjISzDIfP1BNmmgaeFBJdpOiFBy8Sd?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Flex
              display={"inline-flex"}
              aic
              bg={color.black}
              r={radius.pill}
              color={color.white}
              px={1.25}
              py={1}
            >
              查看更多案例
            </Flex>
          </a>
        </Box>
      </RowMaxWidth>
    </RowPadding>
  </Box>
)

const stepData = [
  {
    title: "内置抄袭检测系统",
    detail:
      "我们内置的抄袭检测系统确保您的文章是100%来自与我们的写作老师的原创写作， 每一份文章都可以提供一份抄袭检测报告。让您买的放心，用的放心。",
  },
  {
    title: "质量检测",
    detail:
      "我们的全职编辑会对每一个写作订单进行品质管控，确保您的文章逻辑清晰，语法优美。 另外我们还提供7天免费修改服务，确保您可以得到最满意的写作文章。",
  },
]

const Document = ({ title, themeColor, children }) => (
  <Box bg={color.white} r={radius.lg} overflow={"hidden"} s={shadow.lg}>
    <Box m={0.5} p={0.5} bg={themeColor} color={color.white} r={radius.md}>
      <Box o={0.75}>{title}</Box>
    </Box>
    <Box overflow={"scroll"} o={0.75} paragraph>
      {children}
    </Box>
  </Box>
)
