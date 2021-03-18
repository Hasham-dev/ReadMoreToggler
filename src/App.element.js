import styled from "styled-components";

export const Para = styled.p`
  padding: 20px;
  display: -webkit-box;
  -webkit-box-orient: ${(props) => (props.collapse ? "vertical" : "")};
  -webkit-line-clamp: ${(props) => (props.collapse ? 2 : "")};
  overflow: ${(props) => (props.collapse ? "hidden" : "")};
  font-weight: 600;
  background-image: ${(props) =>
    props.collapse ? "linear-gradient(to top, #f8f4f400, #232121f2);" : ""};
  -webkit-background-clip: ${(props) => (props.collapse ? "text" : "")};
  -webkit-text-fill-color: ${(props) => (props.collapse ? "transparent" : "")};
`;
