import React, { useState } from "react"
import { Box, Flex, color, Icon, radius, shadow } from "./Style"
import { RowMaxWidth, ResponsiveGrid, globalGap, innerPadding } from "./Layout"
import Header from "./Header"
import Subherobg from "../images/Subherobg.png"
import ModalContact from "./ModalContact"

export default () => {
  const [contactModalOpen, setContactModalOpen] = useState(false)

  return (
    <>
      <Box
        position={"relative"}
        minHeight={[null, "95vh"]}
        bgc={color.ezessay}
        bgi={Subherobg}
      >
        <Header white />

        <RowMaxWidth>
          <Flex column jcc h={[null, "80vh"]} py={1.5}>
            <ResponsiveGrid column={[1, 2]}>
              <Flex color={color.white} column jcc mb={[1.5, null]}>
                <Box scale={2} paragraph>
                  100%满意，保证准时
                </Box>
                <Box scale={1.3} mb={0.5} weight={"bold"} paragraph>
                  <h1>最强留学论文定制</h1>
                </Box>

                <Flex display={"inline-flex"} scale={1} gap={1}>
                  <a
                    href="https://ezessay.com/user/reg/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Flex
                      aic
                      bg={color.yellow}
                      r={radius.pill}
                      color={color.white}
                      p={1}
                      weight={"bold"}
                    >
                      自助下单
                    </Flex>
                  </a>
                  <Flex
                    aic
                    bg={color.green}
                    r={radius.pill}
                    color={color.white}
                    p={1}
                    cursor={"pointer"}
                    weight={"bold"}
                    onClick={() => setContactModalOpen(true)}
                  >
                    人工服务
                  </Flex>
                </Flex>
              </Flex>
            </ResponsiveGrid>
          </Flex>

          <Box
            position={"absolute"}
            bottom={1.5}
            left={"50%"}
            transform={{ x: "-50%" }}
            o={0.25}
          >
            向下滑动
          </Box>
        </RowMaxWidth>
      </Box>

      {/* Contact Modal */}
      <ModalContact
        state={contactModalOpen}
        close={() => setContactModalOpen(false)}
      />

     
    </>
  )
}


