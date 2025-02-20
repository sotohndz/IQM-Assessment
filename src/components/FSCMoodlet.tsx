import { useState } from "react";
import { FSCMoodletStatus } from "../utils/types";
import {
  chipColors,
  REQUIRED_STATUS_BACKGROUND_COLOR,
  REQUIRED_STATUS_BORDER_COLOR,
  REQUIRED_STATUS_TEXT_COLOR,
} from "../utils/constants";

interface FSCMoodletProps {
  label: string;
  status: FSCMoodletStatus;
}

export default function FSCMoodlet({
  label,
  status: initialStatus,
}: FSCMoodletProps) {
  const [status, setStatus] = useState<FSCMoodletStatus>(initialStatus);

  const bgColor = `bg-[${
    chipColors[status].background || REQUIRED_STATUS_BACKGROUND_COLOR
  }]`;
  const borderColor = `border-[${
    chipColors[status].border || REQUIRED_STATUS_BORDER_COLOR
  }]`;
  const textColor = `text-[${
    chipColors[status].text || REQUIRED_STATUS_TEXT_COLOR
  }]`;
  const className = `font-bold ${textColor} ${bgColor} cursor-pointer border ${borderColor} uppercase rounded-full px-2 h-[26px]`;

  console.log("#bgColor", bgColor);

  const handleLeftClick = () => {
    if (status === "required" || status === "completed") {
      setStatus("current");
    } else if (status === "current") {
      setStatus("completed");
    }
  };

  const handleRightClick = () => {
    if (status === "required") {
      setStatus("notRequired");
    } else if (status === "notRequired" || status === "completed") {
      setStatus("required");
    }
  };

  return (
    <div
      className={className}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
    >
      {label}
    </div>
  );
}
