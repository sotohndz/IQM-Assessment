import { FSCMoodlet } from "../components";
import { colorChipList } from "../utils/constants";

export default function FSCSection() {
  return (
    <div className="flex flex-col gap-2">
      {colorChipList.map((chips, index) => (
        <div key={`fsc-${index}`} className="flex gap-2">
          {chips.map(({ id, label, status }) => (
            <FSCMoodlet
              key={`fsc-moodlet-${id}`}
              label={label}
              status={status}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
