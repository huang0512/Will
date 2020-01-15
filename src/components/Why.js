import React from "react"
import {
  ResponsiveGrid,
  RowMaxWidth,
  RowMargin,
  Heading,
  globalGap,
  Img,
} from "./Layout"
import { Box, Flex, Icon } from "./Style"

import certificate1 from "../images/certificate1.png"
import certificate2 from "../images/certificate2.png"

export default () => (
  <RowMargin>
    <RowMaxWidth>
      <Flex jcsb aic>
        <Heading>
          为何选择<span>EzEssay</span>
        </Heading>
        <Img scale={2}>
          <Flex gap={1}>
            <img src={certificate1} alt="" />
            <img src={certificate2} alt="" />
          </Flex>
        </Img>
      </Flex>

      <Box mt={globalGap}>
        <ResponsiveGrid column={[1, 3]}>
          {reasonData.map((item, i) => (
            <Flex key={i} aic>
              <Icon source={safty} scale={3} mr={0.5} />
              <Box paragraph o={0.75}>
                {item[0]}
                <br />
                {item[1]}
              </Box>
            </Flex>
          ))}
        </ResponsiveGrid>
      </Box>
    </RowMaxWidth>
  </RowMargin>
)

const reasonData = [
  ["简易注册流程", "随时随地查看订单进度"],
  ["接受12小时急单", "不满意立即全额退款"],
  ["安全支付", "用户信息隐私绝对保护"],
]

const safty = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 39.5C20.313 39.5 20.802 39.3823 21.291 39.1273C32.4205 33.2812 36 30.3581 36 23.3154V8.52364C36 6.50302 35.1394 5.85563 33.4963 5.16901C31.2078 4.22736 23.8924 1.55936 21.6235 0.774648C21.0954 0.598089 20.5477 0.5 20 0.5C19.4523 0.5 18.9046 0.617706 18.3961 0.774648C16.1076 1.52012 8.79218 4.24698 6.50367 5.16901C4.8802 5.83602 4 6.50302 4 8.52364V23.3154C4 30.3581 7.77506 32.9477 18.709 39.1273C19.2176 39.4019 19.687 39.5 20 39.5ZM17.8875 29.75C17.2225 29.75 16.6944 29.4557 16.1467 28.7887L10.5134 21.8048C10.2005 21.4321 10.0244 20.9613 10.0244 20.5297C10.0244 19.6076 10.7482 18.9014 11.6284 18.9014C12.176 18.9014 12.665 19.1172 13.1149 19.7254L17.8093 25.7872L26.8851 11.172C27.2567 10.5639 27.7848 10.2696 28.2934 10.2696C29.154 10.2696 29.9755 10.8385 29.9755 11.7802C29.9755 12.2118 29.7213 12.6826 29.4866 13.0749L19.5306 28.7887C19.1002 29.4361 18.5526 29.75 17.8875 29.75Z"
      fill="#66CC70"
    />
  </svg>
)
