import React from "react"
import { css } from "@emotion/core"

const Avatar = () => {
  return (
    <img
      css={css`
        display: inline-block;
        margin-left: 0.5rem;
        width: clamp(2rem, 1rem + 4vw, 4.5rem);
        height: clamp(2rem, 1rem + 4vw, 4.5rem);
        border-radius: 50%;
        @media (max-width: 900px) {
          display: none;
        }
      `}
      src={"./images/me.jpg"}
    />
  )
}

export default Avatar
