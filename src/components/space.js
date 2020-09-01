import styled from "@emotion/styled"

export default styled.div`
  width: 1px;
  visibility: hidden;
  ${({ x }) => {
    switch (x) {
      case undefined:
        return ``
      default:
        return `
          width: ${x}px;
          flex: 0 0 ${x}px;
          display: inline-block;
          height: 1px;
        `
    }
  }}
  ${({ y }) => {
    switch (y) {
      case undefined:
        return ``
      default:
        return `
          display: block;
          height: ${y}px;
        `
    }
  }}
`
