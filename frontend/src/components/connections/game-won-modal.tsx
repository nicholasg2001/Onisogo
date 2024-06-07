import { Word } from "../../gamelogic/connections/types";
import ControlButton from "./control-button";
import GuessHistory from "./guess-history";
import GameModal from "./game-modal";

type GameWonModalProps = {
  isOpen: boolean;
  onClose: () => void;
  guessHistory: Word[][];
  perfection: string;
};

export default function GameWonModal(props: GameWonModalProps) {
  return (
    <GameModal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="flex flex-col items-center justify-center px-12">
        <h1 className="my-4 ml-4 text-4xl font-black text-black">
          {props.perfection}
        </h1>
        <hr className="mb-2 w-full md:mb-4"></hr>
        <h2 className="mb-8 text-black">{"You've won the game!"}</h2>
        <GuessHistory guessHistory={props.guessHistory} />
        <ControlButton text="Exit" onClick={props.onClose} />
      </div>
    </GameModal>
  );
}