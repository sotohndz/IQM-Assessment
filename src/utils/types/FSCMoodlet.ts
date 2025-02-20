export type FSCMoodletStatus =
  | "notRequired"
  | "required"
  | "current"
  | "completed";

export interface ColorChipItem {
  id: string;
  label: string;
  status: FSCMoodletStatus;
}
