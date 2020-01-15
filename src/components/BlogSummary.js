import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "gatsby"
import {
  RowMaxWidth,
  Heading,
  ResponsiveGrid,
  RowPadding,
  apiURL,
} from "./Layout"
import { Box, color, DarkBox } from "./Style"
import { rgba } from "polished"

export default () => {
  const [data, setData] = useState()

  useEffect(() => {
    let ignore = false

    async function fetchData() {
      const result = await axios(
        apiURL + "/ezessayblogs?_sort=time:ASC&_limit=5"
      )
      if (!ignore) setData(result.data)
    }

    fetchData()

    return () => {
      ignore = true
    }
  }, [])

  return (
    <Box bg={color.ezessay} color={color.white}>
      <RowPadding>
        <RowMaxWidth>
          <ResponsiveGrid column={[1, 2]}>
            <Box>
              <Heading>
                <Box mb={0.75}>EzEssay 写作干货</Box>
              </Heading>
              <Box paragraph w={[null, "75%"]} o={0.75}>
                我们坚信知识可以改变这个世界，
                我们也坚信在学习知识的道路上需要引导跟帮助，
                这也就是为什么我们会创建这个平台来服务于社会,通过连接彼此，分享知识。
              </Box>
            </Box>

            <DarkBox>
              {data &&
                data.map((item, i) => <BlogLink data={item} i={i} key={i} />)}
              <Box mt={1.5}>
                <Link to={"/blog/"}>更多资讯</Link>
              </Box>
            </DarkBox>
          </ResponsiveGrid>
        </RowMaxWidth>
      </RowPadding>
    </Box>
  )
}

const BlogLink = ({ data, i }) => {
  return (
    <Link to={"/blog/post/?id=" + data.id}>
      <Box
        bt={i === 0 ? rgba("white", 0.15) : null}
        bb={rgba("white", 0.15)}
        py={1.5}
        paragraph
      >
        <Box weight={"bold"}>{data.title}</Box>
        <Box o={0.75} my={0.5}>
          {data.description}
        </Box>
        <Box o={0.5}>{dateFormatter(data.time)}</Box>
      </Box>
    </Link>
  )
}

export function dateFormatter(date) {
  if (date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear()

    if (month.length < 2) month = "0" + month
    if (day.length < 2) day = "0" + day

    return [year, month, day].join(" / ")
  } else {
    return null
  }
}
