import React from "react"
import { Flex, Box, color, SVG, Line,radius,shadow } from "./Style"
import {
  ConstraintMaxWidth,
  Paragraph,
  blockAttrs,
  SectionMargin,
  FractionGrid,
  globalDesktopGap,
  globalPhoneGap,
  globalGap,
} from "./Layout"
import introVideo from "../images/introVideo.png"

export default () => (
  <SectionMargin>
    <ConstraintMaxWidth>
      <FractionGrid column={[1, 2]} mt={[2.5, 5]}>
      <VideoIntro />
        <Box>
          <Box scale={3} mt={0.25} mb={1.25}>
            为什么<span style={{ color: color.green }}>选择</span>EzEssay
          </Box>

          <Flex column gap={globalGap}>
            <Paragraph
              type={1}
              title="强大的英语母语写手团队 "
              paragraph="我们拥有570位各类科目的写作专家，只需您提交写作需求，上传相关材料，就有金牌团队为您竭诚服务。专业专职写作，十年写作功底，精笔细琢，值得托付。"
            />
            <Line color={color.gray5} />
            <Paragraph
              type={1}
              title="24小时全天候服务，按时交付文章"
              paragraph="5分钟平均客服响应时间，一对一贴心服务。论文写作全过程皆可把控，实时修改，实时变动，99%准时送达您任何科目的文章。"
            />
            <Line color={color.gray5} />
            <Paragraph
              type={1}
              title="100%保证原创，提供免费抄袭检测"
              paragraph="内置抄袭检测系统，提交文章时附带完整的检测报告。14天免费无限制修改。诚信为天，高度负责，绝不拖稿，唯快不破，及时交稿，好评不断。"
            />
          </Flex>
        </Box>
      </FractionGrid>
    </ConstraintMaxWidth>

    <SectionMargin>
      <ConstraintMaxWidth
        by={blockAttrs.lineColor}
        py={[globalPhoneGap * 1.5, globalDesktopGap * 1.5]}
      >
        <FractionGrid column={[2, 4]}>
          <NumProveWithIcon icon={num1} num="5年" label="品牌历史" />
          <NumProveWithIcon icon={num2} num="570名" label="各科写手团队" />
          <NumProveWithIcon icon={num3} num="13000次" label="服务人数" />
          <NumProveWithIcon icon={num4} num="99%" label="满意程度" />
        </FractionGrid>
      </ConstraintMaxWidth>
    </SectionMargin>
  </SectionMargin>
)
export const VideoIntro = () => (
  <Flex aic jcc my={5}>
    <Box
      position={"relative"}
      bgi={introVideo}
      r={radius.lg}
      s={shadow.xl}
      w={"66%"}
      pb={"37%"}
    >
      <Box position={"absolute"} left={1} bottom={1}>
        <Flex aic>
          <SVG svg={playButton} scale={[3, 2]} mr={0.3} />
          <Box color={color.white}>观看简介</Box>
        </Flex>
      </Box>
      <Box
        z={-1}
        position={"absolute"}
        bg={color.ezessay}
        r={radius.lg}
        w={12}
        h={6}
        left={-4}
        top={-4}
      />
      <Box
        z={-1}
        position={"absolute"}
        bg={color.green}
        r={radius.lg}
        w={12}
        h={6}
        right={-4}
        bottom={-4}
      />
    </Box>
  </Flex>
)
export const NumProveWithIcon = props => {
  return (
    <Flex gap={0.5} responsive>
      <SVG svg={props.icon} scale={2} />
      <NumProve num={props.num} label={props.label} />
    </Flex>
  )
}

export const NumProve = props => {
  return (
    <Box>
      <Box scale={props.type ? props.type : 2} mb={0.35} weight={300}>
        {props.num}
      </Box>
      <Box color={color.gray}>{props.label}</Box>
    </Box>
  )
}

const num1 = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M29.3333 14.7734V16C29.3317 18.8753 28.4007 21.6729 26.6791 23.9758C24.9576 26.2787 22.5377 27.9633 19.7805 28.7786C17.0232 29.5938 14.0763 29.4959 11.3793 28.4995C8.68224 27.503 6.37954 25.6615 4.81461 23.2494C3.24969 20.8374 2.50639 17.9841 2.69557 15.1151C2.88475 12.2461 3.99627 9.51512 5.86437 7.32945C7.73247 5.14378 10.257 3.62053 13.0616 2.98688C15.8661 2.35324 18.8004 2.64314 21.4267 3.81336"
      stroke="#8E8E93"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29.3333 5.33337L16 18.68L12 14.68"
      stroke="#8E8E93"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const num2 = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63616 23.3638 2.66663 16 2.66663C8.63619 2.66663 2.66666 8.63616 2.66666 16C2.66666 23.3638 8.63619 29.3333 16 29.3333Z"
      stroke="#8E8E93"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.66666 16H29.3333"
      stroke="#8E8E93"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 2.66663C19.335 6.31776 21.2303 11.056 21.3333 16C21.2303 20.9439 19.335 25.6822 16 29.3333C12.6649 25.6822 10.7697 20.9439 10.6667 16C10.7697 11.056 12.6649 6.31776 16 2.66663V2.66663Z"
      stroke="#8E8E93"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const num3 = () => (
  <svg
    width="33"
    height="32"
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M22.9968 28V25.3333C22.9968 23.9188 22.4349 22.5623 21.4347 21.5621C20.4345 20.5619 19.0779 20 17.6635 20H6.99679C5.5823 20 4.22574 20.5619 3.22555 21.5621C2.22536 22.5623 1.66345 23.9188 1.66345 25.3333V28"
        stroke="#8E8E93"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3302 14.6667C15.2757 14.6667 17.6635 12.2789 17.6635 9.33333C17.6635 6.38781 15.2757 4 12.3302 4C9.38464 4 6.99683 6.38781 6.99683 9.33333C6.99683 12.2789 9.38464 14.6667 12.3302 14.6667Z"
        stroke="#8E8E93"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.9968 28V25.3333C30.9959 24.1516 30.6026 23.0037 29.8786 22.0698C29.1547 21.1358 28.141 20.4688 26.9968 20.1733"
        stroke="#8E8E93"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.6635 4.17334C22.8107 4.46707 23.8275 5.13427 24.5536 6.06975C25.2798 7.00523 25.6739 8.15578 25.6739 9.34001C25.6739 10.5242 25.2798 11.6748 24.5536 12.6103C23.8275 13.5457 22.8107 14.2129 21.6635 14.5067"
        stroke="#8E8E93"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="32"
          height="32"
          fill="white"
          transform="translate(0.330139)"
        />
      </clipPath>
    </defs>
  </svg>
)

const num4 = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63616 23.3638 2.66663 16 2.66663C8.63616 2.66663 2.66663 8.63616 2.66663 16C2.66663 23.3638 8.63616 29.3333 16 29.3333Z"
      stroke="#8E8E93"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.6666 18.6666C10.6666 18.6666 12.6666 21.3333 16 21.3333C19.3333 21.3333 21.3333 18.6666 21.3333 18.6666"
      stroke="#8E8E93"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12H12.015"
      stroke="#8E8E93"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 12H20.015"
      stroke="#8E8E93"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export const playButton = () => (
  <svg
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6123 32.9019C25.3496 32.9019 32.6123 25.6548 32.6123 16.9019C32.6123 8.1646 25.3339 0.901855 16.5966 0.901855C7.84368 0.901855 0.612305 8.1646 0.612305 16.9019C0.612305 25.6548 7.85936 32.9019 16.6123 32.9019ZM13.7417 22.9568C13.0201 23.396 12.2045 23.0509 12.2045 22.2979V11.5058C12.2045 10.7842 13.0672 10.4705 13.7417 10.8626L22.5574 16.0862C23.2005 16.4626 23.2162 17.3568 22.5574 17.7489L13.7417 22.9568Z"
      fill="white"
      fillOpacity="0.9"
    />
  </svg>
)
