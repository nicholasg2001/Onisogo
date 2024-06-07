import { Word } from "../../gamelogic/connections/types";
import { getWordColor } from "../../gamelogic/connections/utils";

type GuessHistoryProps = {
  guessHistory: Word[][];
};

export default function GuessHistory(props: GuessHistoryProps) {
  return (
    <div className="mb-12 grid grid-cols-4 gap-y-1">
      {props.guessHistory.map((guesses) =>
        guesses.map((word, index) => (
          <div
            key={index}
            className={`size-12 rounded-md ${getWordColor(word.level)}`}
          ></div>
        ))
      )}
    </div>
  );
}