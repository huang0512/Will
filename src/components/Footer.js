import React from "react"
import { color, Box, Icon, Flex, radius, DarkBox } from "./Style"
import {
  ConstraintMaxWidth,
  globalDesktopGap,
  globalPhoneGap,
  innerPadding,
  globalGap,
  Heading,
  Img
} from "./Layout"

import 咨询服务号 from "../images/咨询服务号.jpg"
import { Link } from "gatsby"
import { logo } from "./Header"
import paymentMethod from "../images/paymentMethod.png"

export default () => (
  <Box bg={color.white} color={color.gray}>
    <ConstraintMaxWidth py={innerPadding.xl}>
      <Flex jcsb responsive gap={2}>
        <Box>
        <Flex jcsb aic>
          <Heading>
            <Icon source={logo} fill={color.ezessay} />
          </Heading>
          <Img scale={3}>
            <img src={paymentMethod} width="auto" alt="" />
          </Img>
        </Flex>

          <Box
            color={color.gray}
            mt={globalGap}
            w={["100%", 30]}
            maxWidth={"100%"}
            paragraph
          >
            EzEssay
          的使命是帮助您实现您的写作思路。我们的写作专家随时待命，协助您的各类写作任务，
          比如 essay, articles, term and research papers, dissertations,
          coursework, case studies, PowerPoint presentations, reviews, 等等。
          所有的写作服务都只能用于辅导目的，不能作为学术用途，用户须了解违规使用EzEssay服务所带来的潜在风险。
          </Box>
        </Box>

        <Box>
          <Flex gap={[globalPhoneGap * 3, globalDesktopGap * 2]}>
            <QR image={咨询服务号} label={"关注公众号"} />
          </Flex>
        </Box>
      </Flex>

        <Flex
          gap={globalGap}
          responsive
          pt={innerPadding.md}
          mt={[4, 8]}
          bt={color.black}
          paragraph
        >
          <Link to="/essay">定制写作</Link>
          <Link to="/tutor">导师团队</Link>
          <Link to="/case">成功案例</Link>
          <Link to="/about">关于我们</Link>
          <Link to="/policy">隐私与退款协议</Link>
          <a
            href="mailto:bd@ezessay.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            商务合作：bd@ezessay.com
          </a>
        </Flex>
        <Box mt={innerPadding.sm} color={color.gray5dark}>
          版权所有 © 2016-2020 EzEssay.com
        </Box>
    </ConstraintMaxWidth>
  </Box>
)

const QR = props => {
  return (
    <Box align={"center"}>
      <Box w={[8, 10]} overflow={"hidden"} r={radius.md}>
        <img src={props.image} width="100%" height="auto" alt="" />
      </Box>
      <Box mt={0.75}>{props.label}</Box>
    </Box>
  )
}

