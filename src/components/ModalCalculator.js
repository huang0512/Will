import React, { useState, useEffect } from "react"
import ModalFrame, { ModalBox } from "./ModalFrame"
import { Box, color, radius, shadow, Flex } from "./Style"
import Axios from "axios"
import { rgba } from "polished"

export default ({ state, close }) => {
  const [serviceType, setServiceType] = useState("custom")
  const [duration, setDuration] = useState(7)
  const [lineSpacing, setLineSpacing] = useState(1)
  const [pages, setPages] = useState(1)
  const [result, setResult] = useState(0)

  const [rates, setRates] = useState()

  useEffect(() => {
    let ignore = false

    async function fetchData() {
      const result = await Axios("https://api.ratesapi.io/api/latest?base=USD")
      if (!ignore) setRates(result.data)
    }

    fetchData()

    return () => {
      ignore = true
    }
  }, [])

  useEffect(() => {
    setResult(
      (serviceType === "custom"
        ? duration === 0.5
          ? 65
          : duration === 1
          ? 45
          : duration === 2
          ? 35
          : duration === 3
          ? 28
          : duration === 4
          ? 27
          : duration === 5
          ? 26
          : duration === 6
          ? 25
          : duration === 7
          ? 24
          : duration === 8
          ? 23
          : null
        : serviceType === "editing"
        ? duration === 0.5
          ? 25
          : duration === 1
          ? 21
          : duration === 2
          ? 18
          : duration === 3
          ? 13
          : duration === 4
          ? 13
          : duration === 5
          ? 13
          : duration === 6
          ? 13
          : duration === 7
          ? 13
          : duration === 8
          ? 13
          : null
        : serviceType === "resume"
        ? duration === 0.5
          ? 350
          : duration === 1
          ? 340
          : duration === 2
          ? 330
          : duration === 3
          ? 330
          : duration === 4
          ? 330
          : duration === 5
          ? 330
          : duration === 6
          ? 330
          : duration === 7
          ? 330
          : duration === 8
          ? 330
          : null
        : null) *
        lineSpacing *
        pages
    )
  }, [serviceType, duration, lineSpacing, pages])

  return (
    <ModalFrame state={state} close={close}>
      <ModalBox>
        <Box scale={1} weight={"bold"} paragraph>
          预估价格
        </Box>
        <Box
          bg={color.black}
          color={color.white}
          my={1}
          p={1}
          r={radius.md}
          s={shadow.md}
          paragraph
        >
          <Box scale={-1} o={0.5}>
            美元
          </Box>
          <Box scale={2} weight={"bold"}>
            <Box as="span" mr={0.125}>
              $
            </Box>
            {result}
            <Box scale={1} as="span" o={0.25}>
              .00
            </Box>
          </Box>

          <Flex
            gap={1.5}
            scale={-1}
            mt={0.75}
            pt={0.75}
            bt={rgba("white", 0.1)}
          >
            <Box flex={1}>
              <Box o={0.5}>英镑</Box>€{" "}
              {rates ? (result * rates.rates.GBP).toFixed(0) : "..."}
              <Box as="span" display={["none", null]} o={0.25}>
                .00
              </Box>
            </Box>
            <Box flex={1}>
              <Box o={0.5}>加元</Box>${" "}
              {rates ? (result * rates.rates.CAD).toFixed(0) : "..."}
              <Box as="span" display={["none", null]} o={0.25}>
                .00
              </Box>
            </Box>
            <Box flex={1}>
              <Box o={0.5}>澳元</Box>${" "}
              {rates ? (result * rates.rates.AUD).toFixed(0) : "..."}
              <Box as="span" display={["none", null]} o={0.25}>
                .00
              </Box>
            </Box>
            <Box flex={1}>
              <Box o={0.5}>港币</Box>${" "}
              {rates ? (result * rates.rates.HKD).toFixed(0) : "..."}
              <Box as="span" display={["none", null]} o={0.25}>
                .00
              </Box>
            </Box>
          </Flex>
        </Box>

        <Flex aic py={1} gap={0.5} bb={color.divider}>
          <label htmlFor="type">请选择服务类型</label>
          <select
            id="type"
            value={serviceType}
            onChange={e => setServiceType(e.target.value)}
            onBlur={e => setServiceType(e.target.value)}
          >
            <option value="custom">定制写作</option>
            <option value="editing">文章修改</option>
            <option value="resume">简历润色</option>
          </select>
        </Flex>

        <Flex aic py={1} gap={0.5} bb={color.divider}>
          <label htmlFor="duration">交付时间</label>
          <select
            id="duration"
            value={duration}
            onChange={e => setDuration(Number(e.target.value))}
            onBlur={e => setDuration(Number(e.target.value))}
          >
            <option value="0.5">12 Hours</option>
            <option value="1">1 Day</option>
            <option value="2">2 Days</option>
            <option value="3">3 Days</option>
            <option value="4">4 Days</option>
            <option value="5">5 Days</option>
            <option value="6">6 Days</option>
            <option value="7">7 Days</option>
            <option value="8">8+ Days</option>
          </select>
        </Flex>

        <Flex aic py={1} gap={0.5} bb={color.divider}>
          <label htmlFor="lineSpacing">行间距</label>
          <select
            id="lineSpacing"
            value={lineSpacing}
            onChange={e => setLineSpacing(Number(e.target.value))}
            onBlur={e => setLineSpacing(Number(e.target.value))}
          >
            <option value="2">Single</option>
            <option value="1">Double</option>
          </select>
        </Flex>

        <Flex aic py={1} gap={0.5} bb={color.divider}>
          <label htmlFor="pages">文章页数</label>
          <select
            id="pages"
            value={pages}
            onChange={e => setPages(Number(e.target.value))}
            onBlur={e => setPages(Number(e.target.value))}
          >
            <option value="1">1 Page</option>
            <option value="2">2 Pages</option>
            <option value="3">3 Pages</option>
            <option value="4">4 Pages</option>
            <option value="5">5 Pages</option>
            <option value="6">6 Pages</option>
            <option value="7">7 Pages</option>
            <option value="8">8 Pages</option>
            <option value="9">9 Pages</option>
            <option value="10">10 Pages</option>
            <option value="11">11 Pages</option>
            <option value="12">12 Pages</option>
            <option value="13">13 Pages</option>
            <option value="14">14 Pages</option>
            <option value="15">15 Pages</option>
          </select>
        </Flex>
      </ModalBox>
    </ModalFrame>
  )
}
