import React, { useState, useEffect } from "react"
import axios from "axios"
import queryString from "query-string"
import { Link } from "gatsby"
import Header from "../components/Header"
import { color, Box, Flex, radius} from "../components/Style"
import Layout, {
  ConstraintMaxWidth,
  innerPadding,
  QuarterGrid,
  Tag,
  Breadcrumbs,
  globalGap,
  apiURL,
} from "../components/Layout"
import SEO from "../components/SEO"
import Service from "../components/Service"
import Footer from "../components/Footer"
import AppLink from "../components/AppLink"

export default () => {
  const [data, setData] = useState()

  useEffect(() => {
    let ignore = false

    let parameter = queryString.parse(window.location.search)

    async function fetchData() {
      const result = await axios(apiURL + "/cases/" + parameter["id"])
      if (!ignore) setData(result.data)
    }

    fetchData()

    return () => {
      ignore = true
    }
  }, [])

  return (
    <Layout>
      <SEO title="案例详情" />

      <Header onLight />
      
      <Breadcrumbs label="全部案例" link="/case" title="案例详情" />


      <Box bt={color.gray5} py={globalGap}>
        <ConstraintMaxWidth>
          <QuarterGrid>
            <Flex column gap={3}>
              <Box>
                <Box color={color.gray} mb={innerPadding.sm}>
                  学校
                </Box>
                <Box>{data && data.school}</Box>
              </Box>

              <Box>
                <Box color={color.gray} mb={innerPadding.sm}>
                  导师
                </Box>

                {data && (
                  <Link to={"/tutordetail?id=" + data.tutor.id}>
                    <Flex aic>
                      <Box
                        r={radius.pill}
                        bgi={apiURL + data.tutor.avatar.url}
                        bgc={color.gray6}
                        overflow={"hidden"}
                        w={1.5}
                        h={1.5}
                        mr={0.5}
                        flex={"none"}
                      />
                      <Box>{data && data.tutor.name}</Box>
                    </Flex>
                  </Link>
                )}
              </Box>

              <Box>
                <Box color={color.gray} mb={innerPadding.sm}>
                  专业
                </Box>

                <Box>
                  {data &&
                    data.relatedmajors.map((item, i) => (
                      <Tag
                        key={i}
                        mr={0.5}
                        mb={0.5}
                        bg={color.green}
                        color={color.white}
                      >
                        {item.major_name}
                      </Tag>
                    ))}
                </Box>
              </Box>
            </Flex>

            <Box>
              <Box color={color.gray} mb={innerPadding.sm}>
                申请文书
              </Box>
              <img
                src={data && apiURL + data.paper_img.url}
                width="100%"
                height="auto"
                alt=""
              />
            </Box>
          </QuarterGrid>
        </ConstraintMaxWidth>
      </Box>

      <Service />

      <AppLink />

      <Footer />
    </Layout>
  )
}
