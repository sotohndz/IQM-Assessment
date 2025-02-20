import { useState } from "react";

import Moodlet from "./Moodlet";
import { FSCMoodletStatus } from "../utils/types";

interface FSCMoodletProps {
  label: string;
  status: FSCMoodletStatus;
}

export default function FSCMoodlet({
  label,
  status: initialStatus,
}: FSCMoodletProps) {
  const [status, setStatus] = useState<FSCMoodletStatus>(initialStatus);

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

  const renderMoodlet = () => {
    switch (status) {
      case "notRequired":
        return (
          <Moodlet variant="disabled" option="letter" label={label} readonly />
        );
      case "required":
        return <Moodlet variant="inactive" option="letter" label={label} />;
      case "current":
        return <Moodlet variant="red" option="letter" label={label} />;
      case "completed":
        return <Moodlet variant="green" option="letter" label={label} />;
    }
  };

  return (
    <div onClick={handleLeftClick} onContextMenu={handleRightClick}>
      {renderMoodlet()}
    </div>
  );
}
