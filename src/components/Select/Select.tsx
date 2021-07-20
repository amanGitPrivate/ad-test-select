import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import DetailedMenuItem from "./DetailedMenuItem";
import {
  StyledWrapper,
  StlyedHeaderTitle,
  StyledDropdownButton,
  StyledArrow,
  StyledOption,
  StyledOptions,
  StyledTitleText,
  SelectedIcon,
  StyledSelectImages,
  StyledInputSearch,
  SelectGroup,
  StyledLabel,
  StyledDropDownPlaceholder,
  StyledNoOption,
} from "./Select.styled";

import ArrowUp from "../../assets/chevron-down.svg";
import ArrowDown from "../../assets/chevron-down.svg";
import Check from "../../assets/check-light.svg";
import {
  isNavigationKey,
  getNavigationAction,
  NAVIGATION,
} from "../../helpers/keyboard";

import { SelectProps, Selected, ListChildren, AdditionalInfoChilren } from "./Select.interface";
import { theme } from "../../theme";

const StyledGlobal = createGlobalStyle`
  body {
    font-family: -apple-sysyem, Roboto, "Segoe UI", Arial, sans-serif;
  }
`;

const Select = ({
  isMenuOpen = false,
  menuOptions,
  selected,
  searchable,
  searchPlaceHolder,
  renderOption,
  onChange,
  dropDownlabel,
  dropDownPlaceholder,
}: SelectProps) => {
  const [menuOpen, toggleMenu] = useState(isMenuOpen);
  const [selectedItem, setSelectedItem] = useState(selected);
  const [keyword, updateKeyWord] = useState("");
  const [navigatedOptionIndex, updateNavigationOptionIndex] = useState(-1);
  const [navigatedOption, updateNavigationOption] = useState<ListChildren>({
    value: "",
    label: "",
  });

  const textRef = useRef<HTMLInputElement | null>(null);
  const node = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (selected) {
      selectOption(selected);
    }
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e: any) => {
    if (node.current) {
      if (node.current.contains(e.target)) {
        return;
      }
    }
    updateKeyWord(""); // outside click
    toggleMenu(false); // outside click
  };

  const selectOption = (item: Selected) => {
    let selectedItem: any = [];
    for (let i = 0; i < menuOptions.length; i++) {
      selectedItem = menuOptions[i].children.filter(
        (child) => child.value === item.value
      );
      if (selectedItem) {
        break;
      }
    }
    if (selectedItem.length) {
      setSelectedItem(selectedItem[0]);
    }
  };

  const selectItem = (item: ListChildren) => {
    setSelectedItem(item);
    onChange(item);
    toggleMenu(false);
    updateNavigationOptionIndex(-1);
    updateNavigationOption({
      value: "",
      label: "",
    });
    updateKeyWord("");
  };

  const filterList = (e: ChangeEvent<HTMLInputElement>) => {
    updateKeyWord(e.target.value.toLowerCase());
  };

  const renderListOption = (option: ListChildren) => {
    if (renderOption && option) {
      return renderOption(option);
    }
    if (option.additionalInfo) {
      return <DetailedMenuItem option={option as AdditionalInfoChilren} />;
    }
    return <span>{option.label}</span>;
  };

  const listItems = () => {
    let tempList = [...menuOptions];
    const selectedItemValue = selectedItem?.value;

    if (tempList.length) {
      return tempList.map((item) => (
        <SelectGroup key={item.categoryName}>
          {item.children.map((child) => (
            <StyledOption
              key={child.label}
              navigated={navigatedOption.value === child.value}
              selected={child.value === selectedItemValue}
              hidden={
                !child.label.toLowerCase().includes(keyword.toLowerCase())
              }
              onClick={() => selectItem(child)}
            >
              <SelectedIcon selected={child.value === selectedItemValue}>
                {<StyledSelectImages src={Check} />}
              </SelectedIcon>
              {renderListOption(child)}
            </StyledOption>
          ))}
        </SelectGroup>
      ));
    }
    return <StyledNoOption>No Options avialable</StyledNoOption>;
  };

  const handleNavigation = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.defaultPrevented || !isNavigationKey(event.key)) {
      return;
    }
    event.preventDefault();
    const navigationAction = getNavigationAction(event.key) || "";

    let menuLength = 0;
    let menuCollection = [];
    for (let i = 0; i < menuOptions.length; i++) {
      menuLength += menuOptions[i].children.length;
      menuCollection.push(...menuOptions[i].children);
    }
    const optionCount = menuOptions ? menuLength || 1 : 0;

    if (optionCount < 1) {
      return;
    }

    switch (navigationAction) {
      case NAVIGATION.CLOSE: {
        toggleMenu(false);
        break;
      }
      case NAVIGATION.SELECT: {
        selectItem(navigatedOption);
        break;
      }

      case NAVIGATION.UP:
      case NAVIGATION.DOWN: {
        let nextIndex =
          navigatedOptionIndex + (navigationAction === NAVIGATION.UP ? -1 : 1);
        nextIndex = nextIndex < 0 ? optionCount - 1 : nextIndex;
        nextIndex = nextIndex >= optionCount ? 0 : nextIndex;
        updateNavigationOptionIndex(nextIndex);
        updateNavigationOption(menuCollection[nextIndex]);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledLabel>{dropDownlabel}</StyledLabel>
      <StyledWrapper ref={node} onKeyDown={handleNavigation} tabIndex={0}>
        <StyledDropdownButton onClick={() => toggleMenu(true)}>
          <StlyedHeaderTitle>
            <StyledTitleText>
              {selectedItem ? (
                selectedItem.label
              ) : (
                <StyledDropDownPlaceholder>
                  {dropDownPlaceholder}
                </StyledDropDownPlaceholder>
              )}
            </StyledTitleText>
          </StlyedHeaderTitle>
          {menuOpen ? (
            <StyledArrow>{<StyledSelectImages src={ArrowUp} />}</StyledArrow>
          ) : (
            <StyledArrow down>
              {<StyledSelectImages src={ArrowDown} />}
            </StyledArrow>
          )}
        </StyledDropdownButton>
        {menuOpen && (
          <div>
            {searchable && (
              <StyledInputSearch
                ref={textRef}
                placeholder={searchPlaceHolder}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => filterList(e)}
              />
            )}
            <StyledOptions tabIndex={0}>{listItems()}</StyledOptions>
          </div>
        )}
      </StyledWrapper>
      <StyledGlobal />
    </ThemeProvider>
  );
};

export default Select;
