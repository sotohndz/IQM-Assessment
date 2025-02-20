import { FSCMoodlet } from "../types";

export const NOT_REQUIRED_STATUS_BACKGROUND_COLOR = "#E2DEED";
export const NOT_REQUIRED_STATUS_BORDER_COLOR = "#998DBF";
export const NOT_REQUIRED_STATUS_TEXT_COLOR = "#998DBF";
export const REQUIRED_STATUS_BACKGROUND_COLOR = "#998DBF";
export const REQUIRED_STATUS_BORDER_COLOR = "#998DBF";
export const REQUIRED_STATUS_TEXT_COLOR = "#FFFFFF";
export const CURRENT_STATUS_BACKGROUND_COLOR = "#D22D5C";
export const CURRENT_STATUS_BORDER_COLOR = "#D22D5C";
export const CURRENT_STATUS_TEXT_COLOR = "#FFFFFF";
export const COMPLETED_STATUS_BACKGROUND_COLOR = "#319B31";
export const COMPLETED_STATUS_BORDER_COLOR = "#319B31";
export const COMPLETED_STATUS_TEXT_COLOR = "#FFFFFF";

export const chipColors = {
  notRequired: {
    background: NOT_REQUIRED_STATUS_BACKGROUND_COLOR,
    border: NOT_REQUIRED_STATUS_BORDER_COLOR,
    text: NOT_REQUIRED_STATUS_TEXT_COLOR,
  },
  required: {
    background: REQUIRED_STATUS_BACKGROUND_COLOR,
    border: REQUIRED_STATUS_BORDER_COLOR,
    text: REQUIRED_STATUS_TEXT_COLOR,
  },
  current: {
    background: CURRENT_STATUS_BACKGROUND_COLOR,
    border: CURRENT_STATUS_BORDER_COLOR,
    text: CURRENT_STATUS_TEXT_COLOR,
  },
  completed: {
    background: COMPLETED_STATUS_BACKGROUND_COLOR,
    border: COMPLETED_STATUS_BORDER_COLOR,
    text: COMPLETED_STATUS_TEXT_COLOR,
  },
};

export const colorChipList: FSCMoodlet[] = [
  {
    title: "Letter version",
    items: [
      { id: "1", label: "F", status: "notRequired" },
      { id: "2", label: "S", status: "required" },
      { id: "3", label: "C", status: "current" },
    ],
  },
  {
    title: "Word version",
    items: [
      { id: "4", label: "Fuelling", status: "notRequired" },
      { id: "5", label: "Servicing", status: "required" },
      { id: "6", label: "Cleaning", status: "current" },
    ],
  },
];
