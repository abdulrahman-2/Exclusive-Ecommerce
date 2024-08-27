import styled from "styled-components";

export const HeaderWrap = styled.div`
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0px;
    background-color: black;
    opacity: 0.2;
  }
  .links {
    li {
      position: relative;

      &::before {
        content: "";
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: -2px;
        left: 0;
        background-color: black;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.3s ease-in-out;
      }

      &:hover::before {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
`;
