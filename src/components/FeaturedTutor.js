import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import {
  SectionTitle,
  ConstraintMaxWidth,
  LinkBox,
  FractionGrid,
  SectionMargin,
  Tag,
  innerPadding,
  globalGap,
  apiURL,
} from "../components/Layout"
import { Box, color, radius, Flex } from "../components/Style"
import { NumProve } from "./Whyez"

export default () => {
  const [data, setData] = useState()

  useEffect(() => {
    let ignore = false

    async function fetchData() {
      const result = await axios(apiURL + "/tutors?featured=ture")
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
        <SectionTitle>明星导师</SectionTitle>
        <FractionGrid column={[2, 4]}>
          {data &&
            data.map((teacher, i) => (
              <FeaturedTutorItem key={i} teacher={teacher}></FeaturedTutorItem>
            ))}
        </FractionGrid>
      </ConstraintMaxWidth>
    </SectionMargin>
  )
}

const FeaturedTutorItem = props => {
  const [hover, setHover] = useState(false)

  return (
    <LinkBox
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link to={"/tutordetail?id=" + props.teacher.id}>
        <Box
          position={"relative"}
          h={"100%"}
          align={"center"}
          p={innerPadding.md}
        >
          <Box
            display={[hover ? "none" : "inline-block", "inline-block"]}
            overflow={"hidden"}
            r={radius.pill}
            w={hover ? "40%" : "80%"}
            mt={[0, hover ? 0.75 : null]}
            mb={hover ? 0.5 : 0.75}
            pb={hover ? "40%" : "80%"}
            bgi={apiURL + props.teacher.avatar.url}
            bgc={color.gray6}
          />

          <Box>
            <Flex
              scale={1}
              mt={[0.35, null]}
              mb={0.35}
              gap={0.35}
              aic
              jcc
              responsive
              paragraph
            >
              <p>{props.teacher.name}</p>
              {props.teacher.foreigner && (
                <Tag
                  display={[hover ? "none" : null, null]}
                  bg={color.plumLight}
                  color={color.plum}
                >
                  外籍
                </Tag>
              )}
            </Flex>

            <Box
              color={color.gray}
              display={"inline-block"}
              paragraph
              responsive
            >
              <Box>
                {props.teacher.school ? props.teacher.school : "暂无院校信息"}
              </Box>
              <Tag bg={color.blockBG} mt={0.5}>
                {props.teacher.major ? props.teacher.major : "暂无专业信息"}
              </Tag>
            </Box>
          </Box>

          <Box
            position={"absolute"}
            bottom={0}
            left={0}
            right={0}
            align={"center"}
          >
            <AnimatePresence>
              {hover && (
                <motion.div
                  initial={{ y: "1em", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "1em", opacity: 0 }}
                >
                  <Flex
                    childFlex={1}
                    bg={color.white}
                    p={globalGap}
                    gap={globalGap}
                    responsive
                  >
                    <NumProve
                      type={1}
                      num={
                        props.teacher.services_count
                          ? props.teacher.services_count
                          : "-"
                      }
                      label="服务次数"
                    />
                    <NumProve
                      type={1}
                      num={props.teacher.rate ? props.teacher.rate + "%" : "-"}
                      label="好评率"
                    />
                  </Flex>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </Box>
      </Link>
    </LinkBox>
  )
}
