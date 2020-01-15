import React from "react"
import { Box, color, Flex, radius, shadow } from "./Style"
import { AnimatePresence, motion } from "framer-motion"
import { globalGap, innerPadding } from "./Layout"

export default ({ state, close, children }) => (
  <AnimatePresence>
    {state && (
      <Flex
        z={999}
        aic
        jcc
        position={"fixed"}
        top={0}
        right={0}
        bottom={0}
        left={0}
      >
        <Box z={99} flex={[1, null]}>
          <motion.div
            initial={{ y: "2em", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "2em", opacity: 0 }}
          >
            {children}
          </motion.div>
        </Box>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Box
            bg={color.black}
            o={0.5}
            position={"absolute"}
            top={0}
            right={0}
            bottom={0}
            left={0}
            onClick={close}
          />
        </motion.div>
      </Flex>
    )}
  </AnimatePresence>
)

export const ModalBox = ({ children }) => (
  <Box
    m={globalGap}
    p={innerPadding.md}
    w={["null", 28]}
    r={radius.lg}
    s={shadow.lg}
    bg={color.white}
  >
    {children}
  </Box>
)
