import React from "react"
import { Box, color, Flex } from "./Style"
import { AnimatePresence, motion } from "framer-motion"

export default ({ toggle, close, children }) => {
  return (
    <AnimatePresence>
      {toggle && (
        <Flex
          z={100}
          aic
          jcc
          position={"fixed"}
          top={0}
          right={0}
          bottom={0}
          left={0}
        >
          <motion.div
            initial={{ y: "2em", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "2em", opacity: 0 }}
            style={{ zIndex: 10 }}
          >
            {children}
          </motion.div>

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
}
