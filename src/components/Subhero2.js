import React from "react"
import Header from "./Header"

import { Box, color } from "./Style"
import { ConstraintMaxWidth } from "./Layout"

export default props => (
  <Box position={"relative"}>
    <Header white />

    <ConstraintMaxWidth>
      <Box scale={4} pt={3} pb={0.75} color={color.white} weight={300}>
        {props.title}
      </Box>
    </ConstraintMaxWidth>

    <Box
      z={-1}
      bg={color.black}
      o={0.5}
      position={"absolute"}
      top={0}
      right={0}
      bottom={0}
      left={0}
    />

    <Box
      z={-2}
      bgi={props.bgi}
      bgc={color.black}
      position={"absolute"}
      top={0}
      right={0}
      bottom={0}
      left={0}
    />
  </Box>
)
