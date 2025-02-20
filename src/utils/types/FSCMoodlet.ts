export type FSCMoodletStatus =
  | "notRequired"
  | "required"
  | "current"
  | "completed";

export interface FSCMoodletItem {
  id: string;
  label: string;
  status: FSCMoodletStatus;
}

export interface FSCMoodlet {
  title: string;
  items: FSCMoodletItem[];
}
