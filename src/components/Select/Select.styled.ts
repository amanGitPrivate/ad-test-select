import styled from "styled-components";

import { themeInterface } from "../../theme/index.d";

export const StyledWrapper = styled.div`
  ${({ theme: { spacing, colors } }) => `
  height: ${spacing(8)};
  min-width: ${spacing(40)};
  border: 1px solid ${colors[500]};
  border-radius: ${spacing(1)};
  &:focus {
    outline: none
  }
  `}
`;

export const StyledTitleText = styled.div`
  margin: ${(props) => `${props.theme.spacing(1)} ${props.theme.spacing(3)}`};
  margin-right: 30px;
  font-weight: 300;
`;

export const StlyedHeaderTitle = styled.div`
  font-weight: 300;
`;

export const StyledDropdownButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: transparent;
  cursor: pointer;
  height: 100%;
  width: 100%;
`;

export const StyledArrow = styled.span`
  margin-right: 8px;
  transform: ${(props: { down?: boolean }) =>
    props.down ? "rotate(0deg)" : "rotate(180deg)"};
  transition: transform 0.25s linear;
`;

export const StyledOption = styled.div`
  cursor: pointer;
  align-items: center;
  ${({
    theme: { spacing, colors },
    selected,
    hidden,
    navigated,
  }: {
    selected?: boolean;
    navigated?: boolean;
    theme: themeInterface;
    hidden: boolean;
  }) => `
    padding: ${spacing(1)} ${spacing(3)};
    background-color:  ${
      selected ? colors[100] : navigated ? colors[400] : "transparent"
    };
    &:hover {
      background-color: ${selected ? colors[200] : colors[400]};
    }
    color: ${selected ? colors[300] : "black"};
    margin: ${spacing(1)} 0};
    min-height: ${spacing(6)};
    max-height: ${spacing(15)};
    display: ${hidden ? "none" : "flex"}
  `}
`;

export const StyledAdditonalInfoOption = styled.div`
  ${({ theme: { size } }) => `
    font-size: ${size.small};
  `}
`;

export const StyledOptions = styled.div`
  overflow: auto;
  max-height: 215px;
  margin-top: 4px;
  z-index: 10;
  position: relative;
  ${({ theme: { spacing, colors, shadow } }) => `
    border: 1px solid ${colors[500]};
    border-radius: ${spacing(1)};
    box-shadow: ${shadow};
    background-color: ${colors[300]};
  `}
`;

export const SelectedIcon = styled.span`
  visibility: ${({ selected }: { selected?: boolean }) =>
    selected ? `visible` : `hidden`};
  margin: 0 12px 0 0;
`;

export const StyledSelectImages = styled.img`
  ${({ theme: { spacing } }) => `
    height:  ${spacing(4)};
    width:  ${spacing(4)};
  `}
`;

export const StyledInputSearch = styled.input`
  ${({ theme: { spacing, colors } }) => `
    border-radius: ${spacing(1)};
    &:focus {
      outline: none
    }
    width: 99%;
    margin-top: ${spacing(1)};
    height: ${spacing(10)};
    padding-left: ${spacing(3)};
    border: 1px solid ${colors[500]}
  `}
`;

export const SelectGroup = styled.div`
  border-bottom: ${({ theme: { colors } }) => `2px solid ${colors[500]}`};
`;

export const StyledLabel = styled.div`
  ${({ theme: { colors, spacing } }) => `
    color: ${colors[700]};
    margin-bottom: ${spacing(1.5)}
  `}
`;

export const StyledDropDownPlaceholder = styled.span`
  ${({ theme: { colors } }) => `
    color: ${colors[600]};
  `}
`;

export const StyledNoOption = styled.div`
  padding: ${({ theme: { spacing } }) => `${spacing(1)}`};
`;
