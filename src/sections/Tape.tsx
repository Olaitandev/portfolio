import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Responsive",
  "Built to Scale",
  "Clean Code",
  "Fast by Default",
  "No Bloat",
  "Ships on Time",
  "Type-Safe",
  "Obsessed with Performance",
  "Readable Code",
  "Mobile First",
  "Dark Mode Ready",
  "Delightful UX",
  "Fast",
  "Accessible",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="-mx-1 bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word, index) => (
                  <div key={index} className="inline-flex items-center gap-4">
                    <span className="text-sm font-extrabold text-gray-900 uppercase">
                      {word}
                    </span>
                    <StarIcon className="text-gray-900 size-6 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
