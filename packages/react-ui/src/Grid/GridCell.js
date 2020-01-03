import React, { useContext } from "react";
import styled from "styled-components";
import { breakpoints, spacings } from "../theme";

import { GridContext } from "./Grid";

export const GridCell = props => {
  const columns = useContext(GridContext);
  return <ListItem {...props} columns={columns} />;
};

// The "-1" in width calculation fixes a redenring issue on IE11 causing tile
// supposed to stay on the same line to go to the next line
export const ListItem = styled.li`
  display: flex;
  flex-grow: 0;
  flex-shrink: 1;
  width: calc(100% / ${props => props.columns} - 2 * ${spacings.small} - 1px);
  margin: ${spacings.small};
  padding: 0;
  @media (max-width: ${breakpoints.desktop}) {
    width: calc(
      100% / ${props => Math.max(props.columns - 1, 0)} - 2 * ${spacings.small} -
        1px
    );
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: calc(
      100% / ${props => Math.max(props.columns - 2, 0)} - 2 * ${spacings.small} -
        1px
    );
  }
  @media (max-width: ${breakpoints.mobile}) {
    flex-shrink: 0;
    width: ${({ columns }) => (Math.max(columns - 2, 0) < 2 ? "80%" : "60%")};
    min-width: 23rem;
    &:first-of-type {
      margin-left: ${spacings.medium};
    }
    &:last-of-type:after {
      display: block;
      width: ${spacings.medium};
      height: 100%;
      background-color: transparent;
      content: "";
    }
  }
`;
