import { AdditionalInfoChilren } from "./Select.interface";
import { StyledAdditonalInfoOption } from "./Select.styled";

const DetailedMenuItem = ({ option }: { option: AdditionalInfoChilren }) => (
  <div key={option.label}>
    <div>{option.label}</div>
    <StyledAdditonalInfoOption>
      {option.additionalInfo}
    </StyledAdditonalInfoOption>
  </div>
);

export default DetailedMenuItem;
