import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import axios from "axios"
import {
  RowMaxWidth,
  SectionHeading,
  ResponsiveGrid,
  globalDesktopGap,
  globalPhoneGap,
  innerPadding,
  apiURL,
  RowPadding,
} from "./Layout"
import { color, Box, radius, Icon, Flex, shadow } from "./Style"
import { plus, minus } from "./Layout"

export default () => {
  const [open, setOpen] = useState(false)
  const ref = useRef()

  const [data, setData] = useState()

  useEffect(() => {
    let ignore = false

    async function fetchData() {
      const result = await axios(apiURL + "/Ezessayfeedbacks")
      if (!ignore) setData(result.data)
    }

    fetchData()

    return () => {
      ignore = true
    }
  }, [])

  return (
    <Box bg={color.ezessay} color={color.white} ref={ref}>
      <RowPadding>
        <RowMaxWidth by={color.transparent}>
          <SectionHeading>用户好评</SectionHeading>

          <motion.div
            animate={{ height: open ? "auto" : "24em" }}
            style={{ overflow: "hidden", position: "relative" }}
            transition={{ type: "tween" }}
          >
            <ResponsiveGrid column={[1, 3]}>
              {data &&
                data.map((feedback, i) => (
                  <FeedbackItem key={i} data={feedback} />
                ))}
            </ResponsiveGrid>

            {/* 遮罩 */}
            <motion.div
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ type: "tween" }}
            >
              <Box
                position={"absolute"}
                bottom={0}
                w={"100%"}
                h={5}
                bg={
                  "linear-gradient(0deg, hsl(232, 72%, 60%) 0%, hsl(232, 72%, 60%) 0%, rgba(245,244,245,0) 100%)"
                }
              />
            </motion.div>
          </motion.div>

          <Box
            position={open ? "sticky" : null}
            bottom={
              open ? [globalPhoneGap * 1.5, globalDesktopGap * 1.5] : null
            }
            mt={[globalPhoneGap * 1.5, globalDesktopGap * 1.5]}
            align={"center"}
          >
            <Flex
              display={"inline-flex"}
              aic
              bg={open ? color.white : color.black}
              r={radius.pill}
              s={open ? shadow.xl : null}
              color={open ? color.black : color.white}
              p={innerPadding.sm}
              cursor={"pointer"}
              onClick={() => {
                setOpen(!open)
                !open &&
                  window.scrollTo({
                    top: ref.current.offsetTop,
                    behavior: "smooth",
                  })
              }}
            >
              <Icon
                source={open ? minus : plus}
                fill={open ? color.black : color.white}
                mr={0.5}
              />
              {open ? "收起" : "更多"}
            </Flex>
          </Box>
        </RowMaxWidth>
      </RowPadding>
    </Box>
  )
}

const FeedbackItem = ({ data }) => {
  return (
    <Flex
      column
      jcsb
      bg={color.white}
      color={color.black}
      r={radius.lg}
      p={innerPadding.lg}
    >
      <Box>
        <Icon scale={1} source={quote} fill={color.divider} />
        <Box paragraph mt={1} mb={innerPadding.lg} o={0.75}>
          {data.content}
        </Box>
      </Box>

      <Flex paragraph jcfe aic>
        <Box r={radius.pill} overflow={"hidden"} w={2.5} mr={1}>
          <img
            src={apiURL + data.student_avatar.url}
            width="100%"
            height="auto"
            alt=""
          />
        </Box>
        <Box o={0.75}>{data.student_name}</Box>
      </Flex>
    </Flex>
  )
}

// Icon

export const quote = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.0439 4.42578L17.0143 8.48115C13.5222 13.25 11.7198 18.3943 11.6071 23.9141V31.5742H1.24341V25.0406C1.24341 21.2105 2.1446 17.418 3.94699 13.663C5.78692 9.90804 8.15255 6.82896 11.0439 4.42578ZM28.7861 4.42578L34.7565 8.48115C31.2644 13.25 29.462 18.3943 29.3494 23.9141V31.5742H18.9856V25.0406C18.9856 21.2105 19.8868 17.418 21.6892 13.663C23.5292 9.90804 25.8948 6.82896 28.7861 4.42578Z" />
  </svg>
)
