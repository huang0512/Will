import React from "react"
import {
  ResponsiveGrid,
  RowMaxWidth,
  globalPhoneGap,
  globalDesktopGap,
} from "./Layout"
import { Box, color } from "./Style"

export default () => (
  <RowMaxWidth>
    <Box
      py={[globalPhoneGap * 1.25, globalDesktopGap * 1.25]}
      by={color.divider}
    >
      <ResponsiveGrid column={[2, 4]}>
        {highlightData.map((item, i) => (
          <Box key={i} align={"center"} paragraph>
            <Box scale={2} mb={0.25}>
              {item.heading}
            </Box>
            <Box o={0.5}>{item.detail}</Box>
          </Box>
        ))}
      </ResponsiveGrid>
    </Box>
  </RowMaxWidth>
)

const highlightData = [
  { heading: "14 天", detail: "免费无限制修改" },
  { heading: "100%", detail: "原创写作，绝无抄袭" },
  { heading: "12小时", detail: "处理紧急写作" },
  { heading: "24/7", detail: "全球在线客服" },
]
