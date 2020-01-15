import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Helmet } from "react-helmet"

import "./clear.css"

import { GlobalStyle, phone, desktop, Box, color } from "./Style"

export default ({ children }) => {
  return (
    <GlobalStyle>
      {children}
      
      <Helmet>
        <script>
          {`
          window.intercomSettings = { app_id: "pam5f7fk"};
        `}
        </script>

        <script>
          {`
          (function() {
            var w = window;
            var ic = w.Intercom;
            if (typeof ic === "function") {
              ic("reattach_activator");
              ic("update", w.intercomSettings);
            } else {
              var d = document;
              var i = function() {
                i.c(arguments);
              };
              i.q = [];
              i.c = function(args) {
                i.q.push(args);
              };
              w.Intercom = i;
              var l = function() {
                var s = d.createElement("script");
                s.type = "text/javascript";
                s.async = true;
                s.src = "https://widget.intercom.io/widget/pam5f7fk";
                var x = d.getElementsByTagName("script")[0];
                x.parentNode.insertBefore(s, x);
              };
              if (w.attachEvent) {
                w.attachEvent("onload", l);
              } else {
                w.addEventListener("load", l, false);
              }
            }
          })();
        `}
        </script>
      </Helmet>
    </GlobalStyle>
  )
}

// Setting

export const apiURL = "https://api-1.ezstudy.co:8443"

export const maxRowWidth = 1200
export const globalPhoneGap = 1.5
export const globalDesktopGap = 3
export const globalGap = [globalPhoneGap, globalDesktopGap]
export const innerPadding = {
  sm: [1, 1.25],
  md: [1.5, 1.875],
  lg: [2, 2.5],
  xl: [2.5, 3.125],
}

export const RowMargin = styled(Box)`
  ${phone`
    margin-top:${globalPhoneGap * 2}em;
    margin-bottom:${globalPhoneGap * 2}em;
  `}
  ${desktop`
    margin-top:${globalDesktopGap * 2}em;
    margin-bottom:${globalDesktopGap * 2}em;
  `}
`

export const RowPadding = styled(Box)`
  ${phone`
    padding-top:${globalPhoneGap * 2}em;
    padding-bottom:${globalPhoneGap * 2}em;
  `}
  ${desktop`
    padding-top:${globalDesktopGap * 2}em;
    padding-bottom:${globalDesktopGap * 2}em;
  `}
`

export const RowMaxWidth = styled(Box)`
  @media (max-width: ${maxRowWidth}px) {
    margin-left: ${globalPhoneGap}em;
    margin-right: ${globalPhoneGap}em;
  }
  @media (min-width: ${maxRowWidth}px) {
    max-width: ${maxRowWidth}px;
    margin: 0 auto;
  }
`

export const ResponsiveGrid = styled(Box)`
  ${phone`
    display: grid;
    gap: ${globalPhoneGap}em;
    grid-template-columns: repeat(${p =>
      p.column && p.column[0] ? p.column[0] : p.column}, 1fr);
  `}
  ${desktop`
    display: grid;
    gap: ${globalDesktopGap}em;
    grid-template-columns: repeat(auto-fill, minmax(calc((${maxRowWidth}px - (${p =>
      p.column &&
      ((p.column[1] ? p.column[1] : p.column) - 1 + 2) *
      globalDesktopGap}em)) / ${p =>
        p.column && (p.column[1] ? p.column[1] : p.column)}), 1fr));
  `}
`

ResponsiveGrid.propTypes = {
  column: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
}

export const Heading = styled(Box).attrs(p => ({
  scale: 2,
  weight: "bold",
}))`
  span {
    color: ${color.ezessay};
  }
`

export const SectionHeading = styled(Box).attrs(p => ({
  scale: 3,
  align: "center",
  mb: 1.5,
}))``

export const Img = styled(Box)`
  img {
    height: 1em;
    width: auto;
  }
`

// Iconn

export const plus = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.75 1C8.75 0.585786 8.41421 0.25 8 0.25C7.58579 0.25 7.25 0.585786 7.25 1V7.25H1C0.585786 7.25 0.25 7.58579 0.25 8C0.25 8.41421 0.585786 8.75 1 8.75H7.25V15C7.25 15.4142 7.58579 15.75 8 15.75C8.41421 15.75 8.75 15.4142 8.75 15V8.75H15C15.4142 8.75 15.75 8.41421 15.75 8C15.75 7.58579 15.4142 7.25 15 7.25H8.75V1Z"
    />
  </svg>
)

export const minus = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.25 8C0.25 7.58579 0.585786 7.25 1 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H1C0.585786 8.75 0.25 8.41421 0.25 8Z"
    />
  </svg>
)
