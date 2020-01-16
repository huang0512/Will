import React, { useState, useEffect } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import {
  SectionTitle,
  ConstraintMaxWidth,
  FractionGrid,
  SectionMargin,
  Paragraph,
  innerPadding,
  globalGap,
  apiURL,
} from "../components/Layout"
import { Box, SVG, radius, shadow, Flex, color } from "../components/Style"
import Modal from "./Modal"

export default () => {
  const [data, setData] = useState()

  useEffect(() => {
    let ignore = false

    async function fetchData() {
      const result = await axios(apiURL + "/featuredcases")
      if (!ignore) setData(result.data)
    }

    fetchData()

    return () => {
      ignore = true
    }
  }, [])

  return (
    <SectionMargin>
      <ConstraintMaxWidth>
        <SectionTitle>精选案例</SectionTitle>

        <FractionGrid column={[2, 4]}>
          {data &&
            data.map((item, i) => <FeaturedCaseItem data={item} key={i} />)}
        </FractionGrid>
      </ConstraintMaxWidth>
    </SectionMargin>
  )
}

const FeaturedCaseItem = ({ data }) => {
  const [toggleVideo, setToggleVideo] = useState(false)

  return (
    <>
      <Modal toggle={toggleVideo} close={() => setToggleVideo(false)}>
        <Box bg={color.white} r={radius.lg} p={innerPadding.sm} m={globalGap}>
          <Box overflow={"hidden"} width="auto" r={radius.md}>
            <video
              poster=""
              autoPlay
              controls
              playsinline
              style={{ width: "auto", maxHeight: "480px", maxWidth: "100%" }}
            >
              <source src={apiURL + data.video_file.url} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </Box>
        </Box>
      </Modal>

      <Box>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
          <Box
            position={"relative"}
            bgi={apiURL + data.video_cover.url}
            w={"100%"}
            pb={"56%"}
            r={radius.lg}
            s={{ normal: shadow.lg, hover: shadow.xl }}
            cursor={"pointer"}
            style={{
              transition: "all 300ms",
            }}
            onClick={() => setToggleVideo(true)}
          >
            <Box position={"absolute"} left={1} bottom={1}>
              <Flex aic>
                <SVG svg={playButton} scale={2} mr={0.3} />
              </Flex>
            </Box>
          </Box>
        </motion.div>

        <Box mt={1} ml={[0.5, 0.75]}>
          <Paragraph
            type={0}
            title={data.name}
            paragraph={data.school + "・" + data.major}
          />
        </Box>
      </Box>
    </>
  )
}

// SVG

export const playButton = () => (
  <svg
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6123 32.9019C25.3496 32.9019 32.6123 25.6548 32.6123 16.9019C32.6123 8.1646 25.3339 0.901855 16.5966 0.901855C7.84368 0.901855 0.612305 8.1646 0.612305 16.9019C0.612305 25.6548 7.85936 32.9019 16.6123 32.9019ZM13.7417 22.9568C13.0201 23.396 12.2045 23.0509 12.2045 22.2979V11.5058C12.2045 10.7842 13.0672 10.4705 13.7417 10.8626L22.5574 16.0862C23.2005 16.4626 23.2162 17.3568 22.5574 17.7489L13.7417 22.9568Z"
      fill="white"
      fillOpacity="0.9"
    />
  </svg>
)
