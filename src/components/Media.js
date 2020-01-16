import React from "react"
import {
  SectionMargin,
  ConstraintMaxWidth,
  SectionTitle,
  FractionGrid,
  blockAttrs,
} from "./Layout"
import { Box, radius } from "./Style"

import mediaZhihu from "../images/mediaZhihu.png"
import mediaSina from "../images/mediaSina.png"
import media36kr from "../images/media36kr.png"
import mediaMedium from "../images/mediaMedium.png"

export default () => (
  <SectionMargin>
    <ConstraintMaxWidth bt={blockAttrs.lineColor}>
      <SectionTitle small>媒体报道</SectionTitle>
      <FractionGrid column={[2, 4]}>
        <MediaItem logo={mediaZhihu} link={null} />
        <MediaItem logo={mediaSina} link={null} />
        <MediaItem logo={media36kr} link={null} />
        <MediaItem logo={mediaMedium} link={null} />
      </FractionGrid>
    </ConstraintMaxWidth>
  </SectionMargin>
)

const MediaItem = props => {
  return (
    <Box>
      <Box bgi={props.logo} bgs={"60%"} h={4} r={radius.lg} />
    </Box>
  )
}
