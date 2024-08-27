import { styled } from "styled-components";

export const SidebarWrap = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: -40px;
    height: calc(100% + 40px);
    width: 1px;
    background-color: black;
    opacity: 0.2;
  }
`;
