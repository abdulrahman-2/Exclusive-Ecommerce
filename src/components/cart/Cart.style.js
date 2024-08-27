import { styled } from "styled-components";

export const CartWrap = styled.div`
  position: relative; /* Ensure positioning for child elements */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .product {
    transition: box-shadow 0.3s ease-in-out;
  }

  &:hover .product {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .add {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    cursor: pointer;
    bottom: 0;
    left: 0;
    width: 100%;
    background: black;
    color: white;
    text-align: center;
    padding: 10px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover .add {
    opacity: 1;
  }
`;
