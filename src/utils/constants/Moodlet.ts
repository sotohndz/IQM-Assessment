import { MoodletColors } from "../types";

export const PRIMARY_ACTIVE_COLORS = {
  readonly: {
    background: "#E2DEED",
    border: "#824DFF",
    text: "#824DFF",
  },
  default: {
    background: "#824DFF",
    border: "#824DFF",
    text: "#FFFFFF",
  },
  hover: {
    background: "#6D0EF1",
    border: "#6D0EF1",
    text: "#FFFFFF",
  },
};

export const INACTIVE_COLORS = {
  readonly: {
    background: "#D3CEE3",
    border: "#808080",
    text: "#808080",
  },
  default: {
    background: "#998DBF",
    border: "#998DBF",
    text: "#FFFFFF",
  },
  hover: {
    background: "#6E5CA3",
    border: "#6E5CA3",
    text: "#FFFFFF",
  },
};

export const SECONDARY_PLANNING_COLORS = {
  readonly: {
    background: "#CCFFE9",
    border: "#09A7AA",
    text: "#09A7AA",
  },
  default: {
    background: "#09A7AA",
    border: "#09A7AA",
    text: "#FFFFFF",
  },
  hover: {
    background: "#007780",
    border: "#007780",
    text: "#FFFFFF",
  },
};

export const BLUE_RELEASED_COLORS = {
  readonly: {
    background: "#B2E5FF",
    border: "#0B94D8",
    text: "#0B94D8",
  },
  default: {
    background: "#0B94D8",
    border: "#0B94D8",
    text: "#FFFFFF",
  },
  hover: {
    background: "#005580",
    border: "#005580",
    text: "#FFFFFF",
  },
};

export const GREEN_OK_COLORS = {
  readonly: {
    background: "#319B31",
    border: "#319B31",
    text: "#D6F6D6",
  },
  default: {
    background: "#319B31",
    border: "#319B31",
    text: "#FFFFFF",
  },
  hover: {
    background: "#247524",
    border: "#247524",
    text: "#FFFFFF",
  },
};

export const RED_STOP_BLOCK_COLORS = {
  readonly: {
    background: "#D22D5C",
    border: "#D22D5C",
    text: "#F6D6E4",
  },
  default: {
    background: "#D22D5C",
    border: "#D22D5C",
    text: "#FFFFFF",
  },
  hover: {
    background: "#A82443",
    border: "#A82443",
    text: "#FFFFFF",
  },
};

export const YELLOW_WARNING_COLORS = {
  readonly: {
    background: "#C39100",
    border: "#C39100",
    text: "#FEEFCF",
  },
  default: {
    background: "#FFD116",
    border: "#FFD116",
    text: "#2C2541",
  },
  hover: {
    background: "#C39100",
    border: "#C39100",
    text: "#2C2541",
  },
};

export const PLACEHOLDER_COLORS = {
  readonly: {
    background: "#BDB2FF",
    border: "#824DFF",
    text: "#824DFF",
  },
  default: {
    background: "#FFFFFF",
    border: "#FFFFFF",
    text: "#FFFFFF",
  },
  hover: {
    background: "#FFFFFF",
    border: "#FFFFFF",
    text: "#FFFFFF",
  },
};

export const DISABLED_COLORS = {
  readonly: {
    background: "#E2DEED",
    border: "#998DBF",
    text: "#998DBF",
  },
  default: {
    background: "#FFFFFF",
    border: "#FFFFFF",
    text: "#FFFFFF",
  },
  hover: {
    background: "#FFFFFF",
    border: "#FFFFFF",
    text: "#FFFFFF",
  },
};

export const MOODLET_COLORS: MoodletColors = {
  primary: PRIMARY_ACTIVE_COLORS,
  active: PRIMARY_ACTIVE_COLORS,
  inactive: INACTIVE_COLORS,
  secondary: SECONDARY_PLANNING_COLORS,
  planning: SECONDARY_PLANNING_COLORS,
  blue: BLUE_RELEASED_COLORS,
  released: BLUE_RELEASED_COLORS,
  green: GREEN_OK_COLORS,
  ok: GREEN_OK_COLORS,
  red: RED_STOP_BLOCK_COLORS,
  stop: RED_STOP_BLOCK_COLORS,
  block: RED_STOP_BLOCK_COLORS,
  yellow: YELLOW_WARNING_COLORS,
  warning: YELLOW_WARNING_COLORS,
  placeholder: PLACEHOLDER_COLORS,
  disabled: DISABLED_COLORS,
};
