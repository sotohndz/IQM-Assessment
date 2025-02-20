import { FSCMoodlet } from "../components";
import { fscMoodletList } from "../utils/constants";

export default function FSCSection() {
  return (
    <div className="flex flex-col gap-2">
      {fscMoodletList.map(({ items, title }, index) => (
        <div key={`fsc-${index}`} className="flex flex-col gap-1">
          <p className="font-bold uppercase text-[#6E5CA3]">{title}</p>
          <div className="flex gap-2">
            {items.map(({ id, label, status }) => (
              <FSCMoodlet
                key={`fsc-moodlet-${id}`}
                label={label}
                status={status}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
