import React from "react"
import { Link } from "gatsby"
import {
  LinkBox,
  innerPadding,
  Tag,
  apiURL,
  MobileFlexAlignItemsStretch,
} from "./Layout"
import { Box, color, Flex, radius } from "./Style"

export default ({ data }) => {
  return (
    <LinkBox>
      <Link to={"/casedetail?id=" + data.id}>
        <Box p={innerPadding.md}>
          <MobileFlexAlignItemsStretch
            aic
            jcsb
            responsive
            gap={innerPadding.md}
          >
            <Box flex={2}>
              <Box color={color.gray} mb={1}>
                申请学校
              </Box>
              <Box scale={1}>{data.school}</Box>
            </Box>

            <Box flex={1}>
              <Box color={color.gray} mb={1}>
                导师
              </Box>

              {data && data.tutor.avatar && (
                <Flex aic scale={1}>
                  <Box
                    r={radius.pill}
                    bgi={apiURL + data.tutor.avatar.url}
                    bgc={color.gray6}
                    overflow={"hidden"}
                    w={1.2}
                    h={1.2}
                    mr={0.5}
                    flex={"none"}
                  />
                  <Box>{data.tutor.name}</Box>
                </Flex>
              )}
            </Box>
          </MobileFlexAlignItemsStretch>

          <Flex gap={0.5} mt={innerPadding.md}>
            {data.relatedmajors &&
              data.relatedmajors.map((item, i) => (
                <Tag key={i} bg={color.green} color={color.white}>
                  {item.major_name}
                </Tag>
              ))}
          </Flex>
        </Box>
      </Link>
    </LinkBox>
  )
}