import { Word } from "../../gamelogic/connections/types";
import ControlButton from "./control-button";
import GuessHistory from "./guess-history";
import GameModal from "./game-modal";

type GameLostModalProps = {
  isOpen: boolean;
  onClose: () => void;
  guessHistory: Word[][];
};

export default function GameLostModal(props: GameLostModalProps) {
  return (
    <GameModal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="flex flex-col items-center justify-center px-12">
        <h1 className="my-4 ml-4 text-3xl font-black text-black">
          {"Next time!"}
        </h1>
        <hr className="mb-2 w-full md:mb-4"></hr>
        <GuessHistory guessHistory={props.guessHistory} />
        <ControlButton text="Exit" onClick={props.onClose} />
      </div>
    </GameModal>
  );
}