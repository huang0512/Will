import React from "react"
import { Box, color, radius, Flex, SVG, DarkBox } from "./Style"
import { ConstraintMaxWidth, SectionMargin } from "./Layout"
import { rgba } from "polished"

export default () => (
  <SectionMargin
    bg={color.gray5}
    color={color.black}
    py={[2.5, 4]}
    overflow={"hidden"}
  >
    <ConstraintMaxWidth>
      <Flex position={"relative"}>
        <Box>
          <Box scale={1}>加入我们，成为合伙人</Box>
          <Box
            paragraph
            my={2}
            w={["100%", "calc(50% - 1.5em)"]}
            maxWidth={"100%"}
            o={0.8}
          >
            EzEssay欢迎留学生小伙伴们加入我们的队伍中来，我们会提供各种实习机会：包括新媒体运营，校园大使，区域商务拓展等等。更有OPT跟推荐信提供，快来跟我们联系哟！
          </Box>
          <DarkBox>
            <a
              href="mailto:bd@ezstudy.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                display={"inline-block"}
                bg={{ normal: rgba("blue", 0.7), hover: rgba("blue", 0.4) }}
                r={radius.pill}
                p={1}
              >
                <Flex aic>
                  <SVG svg={mailIcon} fill={color.black} mr={1} />
                  bd@ezessay.com
                </Flex>
              </Box>
            </a>
          </DarkBox>
        </Box>
        <Box
          display={["none", null]}
          position={"absolute"}
          top={"50%"}
          right={0}
          transform={{ y: "-50%" }}
          o={0.4}
        >
          <SVG svg={mailIcon} fill={color.ezessay} scale={7} />
        </Box>
      </Flex>
    </ConstraintMaxWidth>
  </SectionMargin>
)

const mailIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.98547 3.73047C2.09392 3.46003 2.35976 3.26671 2.66678 3.26671H13.3334C13.6807 3.26671 13.9753 3.51403 14.049 3.84053L8.00526 8.07116L1.98547 3.73047ZM0.733466 3.9905C0.733384 3.99595 0.733377 4.00139 0.733443 4.00683V12C0.733443 13.0647 1.60207 13.9334 2.66678 13.9334H13.3334C14.3981 13.9334 15.2668 13.0647 15.2668 12V4.14782C15.2668 4.14259 15.2668 4.13736 15.2668 4.13212V4.00004C15.2668 2.93534 14.3981 2.06671 13.3334 2.06671H2.66678C1.60525 2.06671 0.738636 2.93016 0.733466 3.9905ZM14.0668 5.29289V12C14.0668 12.402 13.7354 12.7334 13.3334 12.7334H2.66678C2.26481 12.7334 1.93344 12.402 1.93344 12V5.17238L7.64918 9.29383C7.85623 9.44313 8.13507 9.44508 8.34419 9.2987L14.0668 5.29289Z"
    />
  </svg>
)
