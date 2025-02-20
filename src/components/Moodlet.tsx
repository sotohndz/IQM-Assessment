import React from "react";

import { MOODLET_COLORS } from "../utils/constants";
import { MoodletOption, MoodletVariant } from "../utils/types";

interface MoodletProps {
  variant: MoodletVariant;
  readonly?: boolean;
  option?: MoodletOption;
  label?: string;
  icon?: React.ComponentType;
}

export default function Moodlet({
  variant,
  readonly = false,
  option = "letter",
  label = "",
  icon: Icon,
}: MoodletProps) {
  const colorGroup = MOODLET_COLORS[variant];
  const normalColors = colorGroup[readonly ? "readonly" : "default"];
  const hoverColors = colorGroup.hover;

  const bgColor = `bg-[${normalColors.background}]`;
  const borderColor = `border-[${normalColors.border}]`;
  const textColor = `text-[${normalColors.text}]`;

  const hoverBgColor = `hover:bg-[${hoverColors.background}]`;
  const hoverBorderColor = `hover:border-[${hoverColors.border}]`;
  const hoverTextColor = `hover:text-[${hoverColors.text}]`;

  const className = `font-bold cursor-pointer uppercase rounded-full px-2 h-[26px] border ${bgColor} ${borderColor} ${textColor} ${hoverBgColor} ${hoverBorderColor} ${hoverTextColor}`;

  const renderContent = () => {
    switch (option) {
      case "letter":
      case "word":
        return <>{label}</>;
      case "ellipsis":
      case "icon":
        return Icon ? <Icon /> : null;
      case "icon-left":
        return (
          <div className="flex gap-1">
            {Icon ? <Icon /> : null}
            <>{label}</>
          </div>
        );
      case "icon-right":
        return (
          <div className="flex gap-1">
            <>{label}</>
            {Icon ? <Icon /> : null}
          </div>
        );
      default:
        return null;
    }
  };

  return <div className={className}>{renderContent()}</div>;
}
