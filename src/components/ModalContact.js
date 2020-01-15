import React from "react"
import { Box, color, radius, Flex } from "./Style"
import ModalFrame, { ModalBox } from "./ModalFrame"

export default ({ state, close }) => (
  <ModalFrame state={state} close={close}>
    <ModalBox>
      <Box scale={1} weight={"bold"} mb={1} paragraph>
        为了提供更好的服务质量，请使用以下方式与客服联系
      </Box>

      <Box my={1}>
        {conactData.map((item, i) => (
          <Flex
            key={i}
            py={1}
            bt={color.divider}
            bb={i === conactData.length - 1 ? color.divider : null}
            gap={0.5}
            responsive
          >
            <Box o={0.5}>{item.way}</Box>
            <Box weight={"bold"}>
              {item.detail}
              {item.recommend && (
                <Box
                  as="span"
                  scale={-1}
                  p={0.25}
                  r={radius.sm}
                  ml={0.5}
                  bg={color.green}
                  color={color.white}
                >
                  推荐
                </Box>
              )}
            </Box>
          </Flex>
        ))}
      </Box>

      <Box
        cursor={"pointer"}
        display={"inline-block"}
        weight={"bold"}
        p={0.75}
        bg={color.black}
        color={color.white}
        r={radius.sm}
        onClick={close}
      >
        我已了解沟通方式
      </Box>
    </ModalBox>
  </ModalFrame>
)

const conactData = [
  {
    way: "联系邮箱",
    detail: "help@ezessay.com",
    recommend: false,
  },
  {
    way: "QQ",
    detail: "3605319194",
    recommend: false,
  },
  {
    way: "微信",
    detail: "onlineclass123",
    recommend: false,
  },
  {
    way: "网页在线客服",
    detail: "请点击右下角进行沟通",
    recommend: true,
  },
]
