import React, { useState, useEffect } from "react"
import axios from "axios"
import queryString from "query-string"
import SEO from "../../components/SEO"
import Layout, {
  apiURL,
  innerPadding,
  RowMaxWidth,
  globalGap,
  ResponsiveGrid,
} from "../../components/Layout"

import { Box, color, radius, Flex, Icon, shadow } from "../../components/Style"
import { Link } from "gatsby"
import { dateFormatter } from "../../components/BlogSummary"

import AppLink from "../../components/AppLink"
import Footer from "../../components/Footer"
import Service from "../../components/Service"
import Header from "../../components/Header"
import { quote } from "../../components/Feedback"

export default () => {
  const [data, setData] = useState()
  const [pageNumber, setPageNumber] = useState(1)

  const numPerPage = 10

  useEffect(() => {
    let parameter = queryString.parse(window.location.search)

    if (parameter["page"]) {
      setPageNumber(Number(parameter["page"]))
    }

    return () => {}
  }, [])

  useEffect(() => {
    let ignore = false

    async function fetchData() {
      const result = await axios(apiURL + "/ezessayblogs")
      if (!ignore) setData(result.data)
    }

    fetchData()

    return () => {
      ignore = true
    }
  }, [])

  return (
    <Layout>
      <SEO title="留学写作指导" />

      <Header />

      <RowMaxWidth>
        <Box scale={2} mt={0.75} mb={0.75} pb={1.5} bb={color.divider}>
          <Icon source={quote} fill={color.divider} />
          <Box w={[null, "75%"]} mt={0.5} paragraph o={0.5}>
            我们坚信知识可以改变这个世界，
            我们也坚信在学习知识的道路上需要引导跟帮助，
            这也就是为什么我们会创建这个平台来服务于社会,通过连接彼此，分享知识。
          </Box>
        </Box>

        <Box>
          <ResponsiveGrid column={[1, 2]}>
            {data &&
              (data.length > 0 ? (
                data
                  .slice(
                    pageNumber * numPerPage - numPerPage,
                    pageNumber * numPerPage
                  )
                  .map((item, i) => <BlogItem key={i} i={i} data={item} />)
              ) : (
                <Box bg={color.blockBG} p={innerPadding.md} r={radius.lg}>
                  暂无信息
                </Box>
              ))}
          </ResponsiveGrid>

          <Flex aic gap={0.75} mt={3}>
            {data ? (
              data.length > numPerPage &&
              Array(Math.ceil(data.length / numPerPage))
                .fill()
                .map((item, i) => (
                  <Flex key={i} aic gap={0.75}>
                    <Box
                      display={
                        i + 1 === pageNumber + 4 ||
                        (i + 1 === 2 && pageNumber > 4)
                          ? null
                          : "none"
                      }
                      color={color.gray}
                    >
                      …
                    </Box>

                    <Link to={"/blog?page=" + (i + 1)}>
                      <Box
                        display={
                          i + 1 === 1 ||
                          i + 1 === pageNumber ||
                          i + 1 === data.length ||
                          (pageNumber - 3 < i + 1 && i + 1 < pageNumber + 3)
                            ? null
                            : "none"
                        }
                        cursor={"pointer"}
                        px={0.75}
                        py={0.5}
                        r={radius.sm}
                        bg={{
                          normal: i + 1 === pageNumber ? color.ezessay : null,
                          hover: i + 1 === pageNumber ? null : color.divider,
                        }}
                        color={i + 1 === pageNumber ? color.white : null}
                        onClick={() => {
                          setPageNumber(i + 1)
                        }}
                      >
                        {i + 1}
                      </Box>
                    </Link>
                  </Flex>
                ))
            ) : (
              <Box o={0.25}>加载中 …</Box>
            )}
          </Flex>
        </Box>
      </RowMaxWidth>

      <Service />

      <AppLink />

      <Footer />
    </Layout>
  )
}

const BlogItem = ({ data }) => (
  <Link to={"/blog/post/?id=" + data.id}>
    <Box p={globalGap} s={shadow.lg} r={radius.lg} paragraph>
      <Box scale={1} weight={"bold"}>
        {data.title}
      </Box>
      <Box o={0.75} my={0.5}>
        {data.description}
      </Box>
      <Box o={0.5}>{dateFormatter(data.time)}</Box>
    </Box>
  </Link>
)
