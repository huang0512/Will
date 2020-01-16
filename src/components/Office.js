import React from "react"
import {
  SectionMargin,
  ConstraintMaxWidth,
  SectionTitle,
  FractionGrid,
  Paragraph,
} from "./Layout"
import { Box, radius, color, SVG, Flex } from "./Style"

import officePhoto1 from "../images/officePhoto1.png"
import officePhoto2 from "../images/officePhoto2.png"
import officePhoto3 from "../images/officePhoto3.png"
import officePhoto4 from "../images/officePhoto4.png"

export default () => (
  <SectionMargin>
    <ConstraintMaxWidth>
      <SectionTitle>公司环境</SectionTitle>
      <FractionGrid column={[1, 2]}>
        {officeDataDemo.map((office, i) => (
          <OfficeItem key={i} data={office} />
        ))}
      </FractionGrid>
    </ConstraintMaxWidth>
  </SectionMargin>
)

const OfficeItem = props => {
  return (
    <Box>
      <Box
        bgi={props.data.officePhoto}
        bgc={color.gray6}
        pb={"33.3%"}
        r={radius.lg}
      />
      <Flex mt={1.5} mb={1}>
        <SVG
          scale={2}
          mx={0.75}
          svg={cityIcon}
          stroke={props.data.officeColor}
        />
        <Paragraph
          type={1}
          title={props.data.officeCityCN}
          paragraph={
            <>
              地址：{props.data.officeAddress}
              <br />
              联系：{props.data.officePhone}
            </>
          }
        />
      </Flex>
    </Box>
  )
}

// Data

const officeDataDemo = [
  {
    officePhoto: officePhoto3,
    officeCityCN: "广州",
    officeAddress: "广州市天河区体育西路维多利广场写字楼",
    officePhone: "help@ezstudy.co",
    officeColor: color.ezessay,
  },
  {
    officePhoto: officePhoto2,
    officeCityCN: "洛杉矶",
    officeAddress: "177 E Colorado Blvd, Pasadena, CA 91105, United States",
    officePhone: "help@ezessay.com",
    officeColor: color.purple,
  },
  
]

// SVG

const cityIcon = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.1972 66.1966V13.3294M49.1873 66.1966V20.5285M25.1972 13.3294L37.1923 9.41488M25.1972 13.3294V6.55504L37.1923 2.4892V9.41488M49.1873 20.5285H64.3367V51.9802C59.2669 61.9061 48.9435 68.7022 37.0329 68.7022C20.1108 68.7022 6.39282 54.9842 6.39282 38.0622C6.39282 28.6529 10.6341 20.2342 17.3093 14.6137M49.1873 20.5285V5.50036L37.1923 9.41488M31.9418 32.3458H41.6378M31.9418 42.0417H41.6378M31.9418 51.7377H41.6378"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
