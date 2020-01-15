import React, { useState } from "react"
import { Box, Flex, color, Icon, radius, shadow } from "./Style"
import { RowMaxWidth, ResponsiveGrid, globalGap, innerPadding } from "./Layout"
import ModalFrame from "./ModalFrame"
import Header from "./Header"
import herobg from "../images/herobg.png"
import heroVideo from "../images/heroVideo.mp4"
import heroVideoCover from "../images/heroVideoCover.png"
import ModalContact from "./ModalContact"

export default () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(true)

  return (
    <>
      <Box
        position={"relative"}
        minHeight={[null, "95vh"]}
        bgc={color.ezessay}
        bgi={herobg}
      >
        <Header white />

        <RowMaxWidth>
          <Flex column jcc h={[null, "80vh"]} py={1.5}>
            <ResponsiveGrid column={[1, 2]}>
              <Flex color={color.white} column jcc mb={[1.5, null]}>
                <Box scale={2} paragraph>
                  最靠谱的留学论文代写
                </Box>
                <Box scale={3} mb={0.5} weight={"bold"} paragraph>
                  质量担保，准时送达！
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

              <Flex
                aic
                jcc
                bg={color.black}
                w={"100%"}
                position={"relative"}
                r={radius.lg}
                s={shadow.xl}
                onClick={() => setVideoModalOpen(true)}
                overflow={"hidden"}
                cursor={"pointer"}
              >
                <img
                  src={heroVideoCover}
                  width="100%"
                  height="auto"
                  alt=""
                ></img>
                <Box
                  position={"absolute"}
                  top={"50%"}
                  left={"50%"}
                  transform={{ x: "-50%", y: "-50%" }}
                >
                  <Icon scale={3} source={videoIcon} fill={color.white} />
                </Box>
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

      {/* Video Modal */}
      <ModalFrame state={videoModalOpen} close={() => setVideoModalOpen(false)}>
        <Box bg={color.white} r={radius.lg} p={innerPadding.sm} m={globalGap}>
          <Box overflow={"hidden"} width="auto" r={radius.md}>
            <video
              poster=""
              autoPlay
              controls
              playsinline
              style={{ width: "auto", maxHeight: "480px", maxWidth: "100%" }}
            >
              <source src={heroVideo} type="video/mp4" />
              <track kind="captions" />
              Your browser does not support HTML5 video.
            </video>
          </Box>
        </Box>
      </ModalFrame>
    </>
  )
}

export const videoIcon = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M32 60.5879C47.668 60.5879 60.5742 47.6816 60.5742 32.0137C60.5742 16.3457 47.6406 3.41211 32 3.41211C16.332 3.41211 3.42578 16.3457 3.42578 32.0137C3.42578 47.6816 16.332 60.5879 32 60.5879ZM27.0508 42.6504C25.793 43.3887 24.2891 42.7324 24.2891 41.3926V22.5801C24.2891 21.2676 25.8477 20.6387 27.0508 21.3496L42.6367 30.5098C43.7852 31.1934 43.7852 32.834 42.6367 33.5176L27.0508 42.6504Z" />
  </svg>
)
