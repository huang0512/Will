import React from "react"
import { RowMaxWidth, Heading, Img, RowPadding } from "./Layout"
import { Box, color, Flex, Icon } from "./Style"
import { logo } from "./Header"

import paymentMethod from "../images/paymentMethod.png"

export default () => (
  <RowPadding>
    <RowMaxWidth>
      <Box>
        <Flex jcsb aic>
          <Heading>
            <Icon source={logo} fill={color.ezessay} />
          </Heading>
          <Img scale={4}>
            <img src={paymentMethod} width="auto" alt="" />
          </Img>
        </Flex>

        <Box mt={1} paragraph o={0.5}>
          EzEssay
          的使命是帮助您实现您的写作思路。我们的写作专家随时待命，协助您的各类写作任务，
          比如 essay代写, articles代写, term and research papers代写, dissertations代写,
          coursework代写, case studies代写, PowerPoint presentations代写, reviews代写, 等等。
          所有的写作服务都只能用于辅导目的，不能作为学术用途，用户须了解违规使用EzEssay服务所带来的潜在风险。
        </Box>
      </Box>

      <Box bt={color.divider} pt={1.5} mt={1.5}>
        <Box o={0.25}>Copyright © 2019 EzEssay Ilc.</Box>
      </Box>
    </RowMaxWidth>
  </RowPadding>
)
