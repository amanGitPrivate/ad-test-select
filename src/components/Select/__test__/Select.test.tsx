import { mount } from "enzyme";
import { ThemeProvider } from "styled-components";
import {
  StyledOptions,
  StyledDropdownButton,
  StyledTitleText,
  StyledOption,
} from "../Select.styled";

import Select from "../Select";
import { theme } from "../../../theme";

import "jsdom-global/register";

const props = {
  menuOptions: [
    {
      categoryName: "firstPerson",
      children: [
        {
          label: "Option 1",
          value: "fp1",
        },
        {
          label: "Option 2",
          value: "fp2",
          additionalInfo: "ImportantInfo here !!",
        },
        {
          label: "Option 3",
          value: "fp3",
        },
      ],
    },
    {
      categoryName: "secondPerson",
      children: [
        {
          label: "Option 1",
          value: "sp1",
        },
        {
          label: "Option 2",
          value: "sp2",
          additionalInfo: "ImportantInfo here !!",
        },
        {
          label: "Option 3",
          value: "sp3",
        },
      ],
    },
  ],
  onChange: () => {},
  searchable: false,
  searchPlaceHolder: "Search Here !!",
};

it("Should render with dropdown", () => {
  const select = mount(
    <ThemeProvider theme={theme}>
      <Select {...props} />
    </ThemeProvider>
  );
  expect(select).toMatchSnapshot();
});

it("Should render with dropdown open", () => {
  const select = mount(
    <ThemeProvider theme={theme}>
      <Select {...props} isMenuOpen={true} />
    </ThemeProvider>
  );
  expect(select.find(StyledOptions).exists()).toBe(true);
});

it("Should open dropdown on click", () => {
  const select = mount(
    <ThemeProvider theme={theme}>
      <Select {...props} />
    </ThemeProvider>
  );
  select.find(StyledDropdownButton).simulate("click");
  expect(select.find(StyledOptions).exists()).toBe(true);
});

it("Should select the correct item on click", () => {
  const select = mount(
    <ThemeProvider theme={theme}>
      <Select {...props} />
    </ThemeProvider>
  );
  select.find(StyledDropdownButton).simulate("click");
  select.find(StyledOption).at(0).simulate("click");
  expect(select.find(StyledTitleText).text().length).toBeGreaterThan(0);
});

it("Should select the sent option", () => {
  const select = mount(
    <ThemeProvider theme={theme}>
      <Select
        {...props}
        selected={{
          value: "fp2",
        }}
      />
    </ThemeProvider>
  );
  expect(select.find(StyledTitleText).text()).toEqual("Option 2");
});

it("Should render the extended menu with additional item using renderOption", () => {
  const select = mount(
    <ThemeProvider theme={theme}>
      <Select
        {...props}
        selected={{
          value: "fp2",
        }}
        renderOption={(option) => (
          <div key={option.label}>
            <div>{option.label}</div>
            <div>{option.additionalInfo}</div>
          </div>
        )}
      />
    </ThemeProvider>
  );
  select.find(StyledDropdownButton).simulate("click");
  expect(
    select.find(StyledOption).at(1).text().indexOf("ImportantInfo here !!")
  ).toBeGreaterThan(-1)
});

it("Should render the extended menu with additional item using list", () => {
  const select = mount(
    <ThemeProvider theme={theme}>
      <Select
        {...props}
        selected={{
          value: "fp2",
        }}
      />
    </ThemeProvider>
  );
  select.find(StyledDropdownButton).simulate("click");
  expect(
    select.find(StyledOption).at(1).text().indexOf("ImportantInfo here !!")
  ).toBeGreaterThan(-1)
});
