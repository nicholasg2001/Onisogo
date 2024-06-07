import { getWordColor } from "../../gamelogic/connections/utils";
import { Category } from "../../gamelogic/connections/types";

export default function ClearedCategory(props: { category: Category }) {
  const level = props.category.level;
  const bgColor = getWordColor(level);

  const concatItems = props.category.items.join(", ");

  return (
    <div
      className={`col-span-4 flex flex-col items-center rounded-md py-4 ${bgColor}`}
    >
      <h1 className="text-lg font-bold text-black md:text-lg">
        {props.category.category}
      </h1>
      <h2 className="mx-2 text-center text-sm text-black md:text-base">{concatItems}</h2>
    </div>
  );
}