import React, { useState } from "react"
import {
  RowMaxWidth,
  Heading,
  ResponsiveGrid,
  RowPadding,
  globalGap,
  innerPadding,
} from "./Layout"
import { Box, Flex, color, Icon, radius } from "./Style"

import processIllustration from "../images/processIllustration.png"
import { videoIcon } from "./Hero"
import ModalFrame from "./ModalFrame"

import processDemo from "../images/processDemo.gif"

export default () => {
  const [processGifOpen, setProcessGifOpen] = useState(false)

  return (
    <>
      <RowPadding>
        <RowMaxWidth>
          <ResponsiveGrid column={[1, 2]}>
            <Box>
              <Heading>
                我们如何<span>服务</span>
              </Heading>
              <Box mt={[2, 8]}>
                <img
                  src={processIllustration}
                  width="100%"
                  height="auto"
                  alt=""
                />
              </Box>
            </Box>

            <Box>
              {stepData.map((item, i) => (
                <Step key={i} item={item} i={i} />
              ))}
            </Box>
          </ResponsiveGrid>

          <Flex aic jcc py={2.5} mt={1}>
            <Flex
              aic
              cursor={"pointer"}
              p={0.75}
              r={radius.pill}
              bg={{ hover: color.bianca }}
              onClick={() => setProcessGifOpen(true)}
            >
              <Icon
                scale={2}
                source={videoIcon}
                fill={color.yellow}
                mr={0.25}
              />
              <Box o={0.75}>服务过程演示（GIF）</Box>
            </Flex>
          </Flex>
        </RowMaxWidth>
      </RowPadding>

      {/* Gif Modal */}
      <ModalFrame state={processGifOpen} close={() => setProcessGifOpen(false)}>
        <Box bg={color.white} r={radius.lg} p={innerPadding.sm} m={globalGap}>
          <Box overflow={"hidden"} width="auto" r={radius.md}>
            <img src={processDemo} width="100%" height="auto" alt="" />
          </Box>
        </Box>
      </ModalFrame>
    </>
  )
}

export const Step = ({ item, i }) => (
  <Flex bt={i === 0 ? color.divider : null} bb={color.divider} py={globalGap}>
    <Box flex={1}>
      <Box scale={3} weight={"lighter"} o={0.25}>
        0{i + 1}.
      </Box>
    </Box>
    <Box flex={5}>
      <Box scale={1} weight={"bold"} mb={0.5}>
        {item.title}
      </Box>
      <Box paragraph o={0.5}>
        {item.detail}
      </Box>
    </Box>
  </Flex>
)

const stepData = [
  {
    title: "提交你的写作要求",
    detail:
      "选择您所在的时区，填写好您的写作要求，截止日期，并上传您相关的文章材料。",
  },
  {
    title: "匹配您的写作老师",
    detail:
      "我们的服务经理将会处理您的订单请求，并协助您匹配最佳的写作老师， 您可以与写作老师在线沟通，分享您的思路。",
  },
  {
    title: "下载文章",
    detail:
      "您可以随时提出修改意见，我们会为您进行14天内免费无限制次数修改。待文章完成后，您可以通过多种方式（网站、手机app、电子邮件等）下载您的文章。",
  },
]
