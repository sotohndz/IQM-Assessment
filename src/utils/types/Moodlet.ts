export type MoodletVariant =
  | "primary"
  | "active"
  | "inactive"
  | "secondary"
  | "planning"
  | "blue"
  | "released"
  | "green"
  | "ok"
  | "red"
  | "stop"
  | "block"
  | "yellow"
  | "warning"
  | "placeholder"
  | "disabled";

export type MoodletOption =
  | "letter"
  | "icon"
  | "ellipsis"
  | "word"
  | "icon-right"
  | "icon-left";

export interface MoodletColor {
  background: string;
  border: string;
  text: string;
}

export interface MoodletColorGroup {
  readonly: MoodletColor;
  default: MoodletColor;
  hover: MoodletColor;
}

export type MoodletColors = Record<MoodletVariant, MoodletColorGroup>;

export interface MoodletItem {
  variant: MoodletVariant;
  readonly: boolean;
  option: MoodletOption;
  label: string;
}

export interface MoodletRow {
  title: string;
  items: MoodletItem[] | string[];
}
