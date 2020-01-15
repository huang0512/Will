import React, { useState } from "react"
import { motion } from "framer-motion"
import { Box, Flex, radius } from "./Style"
import {
  SectionHeading,
  RowMaxWidth,
  RowMargin,
  globalPhoneGap,
  globalDesktopGap,
} from "./Layout"

export default () => {
  const [openNumber, setOpenNumber] = useState(0)
  return (
    <RowMargin>
      <RowMaxWidth>
        <SectionHeading>用户答疑</SectionHeading>
        <Flex jcc>
          <Box w={[null, "50%"]}>
            {faqData.map((item, i) => (
              <FAQ
                item={item}
                key={i}
                number={i}
                openNumber={openNumber}
                setOpenNumber={setOpenNumber}
              />
            ))}
          </Box>
        </Flex>
      </RowMaxWidth>
    </RowMargin>
  )
}

const FAQ = ({ item, number, openNumber, setOpenNumber }) => (
  <Box
    cursor={number === openNumber ? null : "pointer"}
    p={1.5}
    my={[globalPhoneGap, globalDesktopGap / 2]}
    onClick={() => setOpenNumber(number)}
    r={radius.lg}
    bg={{
      hover: number === openNumber ? null : "hsl(235, 50%, 98%)",
      normal: number === openNumber ? "hsl(235, 50%, 98%)" : null,
    }}
    overflow={"hidden"}
    scale={1}
  >
    <Flex jcsb weight={"bold"}>
      <Box>{item.question}</Box>
      <Box>{number === openNumber ? null : "+"}</Box>
    </Flex>

    <motion.div
      animate={{
        height: number === openNumber ? "auto" : 0,
        opacity: number === openNumber ? 1 : 0,
      }}
      transition={{ duration: 0.3, type: "tween" }}
    >
      <Box paragraph pt={1} o={0.75}>
        {item.answer}
      </Box>
    </motion.div>
  </Box>
)

const faqData = [
  {
    question: "什么是 EzEssay",
    answer:
      "EzEssay旨在帮助客户创造个性化的Essay以及其他写作相关的英文代写机构。2016年在洛杉矶成立以来，我们的团队拥有270名写作专家，时刻 准备好为客户提供最高品质的写作服务。目前EzEssay拥有近200名英语母语雇员，每一位写作老师在入职前都经过严格的面试与培训，确保写作质量，同时我们提供了24小时不间断客服服务，提高了服务体验与效率。",
  },
  {
    question: "你们提供哪些服务？",
    answer:
      "EzEssay旨在帮助客户定制个性化、高品质的英文写作Essay，270余名写作专家实时在线，为留学生们提供值得信赖的教育服务。其中包括各种科目的论文作业定制代写服务，以及简历润色、语法修改等。",
  },
  {
    question: "你们跟其他的代写机构有什么区别？",
    answer:
      "我们有完善的写作，编辑和修改系统，能确保每一份订单在提交前的完整性和准确性。最关键的，你可以与写作老师实时交流。",
  },
  {
    question: "什么是定制写作？",
    answer:
      "定制写作是针对essay类型的写作订单而言的，我们会把您所有的需求，个人观点以及备注都考虑到，会根据您的想法和要求出一份完整的essay供您参阅。",
  },
  {
    question: "使用你们的网站安全嘛？",
    answer:
      "我们与PayPal合作，每一份订单严格保密，所有的信息都有严格密保，不会透露给第三方机构。",
  },
  {
    question: "如果我对你们的代写服务不满意，该怎么办？",
    answer:
      "为了提高满意度，我们可以进一步修改以满足您的需求和要求。您可以选择或更改指定的写手和专业老师。我们的客服会提供满意的服务。如果您不满意我们的写作和修改服务，我们会退款并会随时提供帮助。",
  },
  {
    question: "你们的全额退款制度是如何进行？",
    answer:
      "我们深知不是每一次服务体验都完美得无可挑剔。我们会尽最大努力满足您的需求，提供定制写作。 如果出现类似问题，例如定制写作完全不对，您可以提交退款申请。我们的首要任务是为您提供定制写作服务，但如果没有全部实现，我们将针对性地考虑每种情况，如果我们没有提供最佳协助，我们将全额退款。",
  },
]
