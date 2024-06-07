import { Word } from "../../gamelogic/connections/types";

type CellProps = {
  cellValue: Word;
  onClick: (word: Word) => void;
  animateGuess: boolean;
  animateWrongGuess: boolean;
};

export default function Cell(props: CellProps) {
  const bgColor = props.cellValue.selected ? "bg-slate-500 dark:bg-orange-50" : "bg-stone-200 dark:bg-neutral-600";
  const textColor = props.cellValue.selected ? "text-orange-100 dark:text-black" : "text-black dark:text-stone-100";

  const handleClick = () => {
    props.onClick(props.cellValue);
  };

  const guessAnimation = props.animateGuess ? "transform -translate-y-2" : "";
  const wrongGuessAnimation = props.animateWrongGuess
    ? "animate-horizontal-shake"
    : "";

  return (
    <button
      className={`${bgColor} break-all rounded-md px-1 py-6 transition ease-in-out ${guessAnimation} ${wrongGuessAnimation}`}
      onClick={handleClick}
    >
      <h2 className={`${textColor} text-center text-xs font-bold md:text-lg`}>
        {props.cellValue.word.toUpperCase()}
      </h2>
    </button>
  );
}