import { ComponentStory, ComponentMeta } from "@storybook/react";

import Select from "./Select";

export default {
  title: "Components/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  menuOptions: [
    {
      categoryName: "firstPerson",
      children: [
        {
          label: "Hopper",
          value: "fp1",
        },
        {
          label: "Holberton",
          value: "fp2",
        },
      ],
    },
    {
      categoryName: "secondPerson",
      children: [
        {
          label: "Anotelli",
          value: "sp1",
        },
        {
          label: "Bartik",
          value: "sp2",
        },
        {
          label: "Teitelbaum",
          value: "sp3",
        },
      ],
    },
  ],
  onChange: () => {},
  searchable: false,
  searchPlaceHolder: "Search Here !!",
  dropDownlabel: "My Dropdown !!",
};

export const Searchable = Template.bind({});
Searchable.args = {
  menuOptions: [
    {
      categoryName: "firstPerson",
      children: [
        {
          label: "Hopper",
          value: "fp1",
        },
        {
          label: "Holberton",
          value: "fp2",
        },
      ],
    },
    {
      categoryName: "secondPerson",
      children: [
        {
          label: "Anotelli",
          value: "sp1",
        },
        {
          label: "Bartik",
          value: "sp2",
        },
        {
          label: "Teitelbaum",
          value: "sp3",
        },
      ],
    },
  ],
  onChange: () => {},
  searchable: true,
  dropDownPlaceholder: "Your options",
  searchPlaceHolder: "Search Here !!",
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  menuOptions: [
    {
      categoryName: "firstPerson",
      children: [
        {
          label: "Hopper",
          value: "fp1",
        },
        {
          label: "Holberton",
          value: "fp2",
        },
      ],
    },
    {
      categoryName: "secondPerson",
      children: [
        {
          label: "Anotelli",
          value: "sp1",
        },
        {
          label: "Bartik",
          value: "sp2",
          additionalInfo:
          "Grace Hopper was an American computer scientist and US Navy admiral.",
        },
        {
          label: "Teitelbaum",
          value: "sp3",
        },
      ],
    },
  ],
  onChange: () => {},
  searchable: false,
  selected: {
    value: "fp2",
  },
  searchPlaceHolder: "Search Here !!",
};

export const AdditionalInfo = Template.bind({});
AdditionalInfo.args = {
  menuOptions: [
    {
      categoryName: "firstPerson",
      children: [
        {
          label: "Hopper",
          value: "fp1",
          additionalInfo:
            "Grace Hopper was an American computer scientist and US Navy admiral.",
        },
        {
          label: "Holberton",
          value: "fp2",
          additionalInfo:
            "Frances Elizabeth Holberton was one of the first computer programmer",
        },
      ],
    },
    {
      categoryName: "secondPerson",
      children: [
        {
          label: "Teitelbaum",
          value: "sp1",
          additionalInfo:
            "Ruth Teitelbaum was one of the first computer programmer",
        },
      ],
    },
  ],
  onChange: () => {},
  searchable: false,
  dropDownPlaceholder: "Additional search options",
  searchPlaceHolder: "Search Here !!",
};

export const DefaultOpen = Template.bind({});
DefaultOpen.args = {
  menuOptions: [
    {
      categoryName: "firstPerson",
      children: [
        {
          label: "Hopper",
          value: "fp1",
        },
        {
          label: "Holberton",
          value: "fp2",
        },
      ],
    },
    {
      categoryName: "secondPerson",
      children: [
        {
          label: "Anotelli",
          value: "sp1",
        },
        {
          label: "Bartik",
          value: "sp2",
        },
        {
          label: "Teitelbaum",
          value: "sp3",
        },
      ],
    },
  ],
  onChange: () => {},
  searchable: false,
  isMenuOpen: true,
};
