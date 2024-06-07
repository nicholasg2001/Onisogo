export default function ControlButton(props: {
    text: string;
    onClick: () => void;
    unclickable?: boolean;
  }) {
    const click = props.unclickable ? "pointer-events-none" : "";
    const textColor = props.unclickable ? "border-stone-500" : "border-black dark:border-orange-50";
    const borderColor = props.unclickable ? "text-stone-500 " : "text-black dark:text-orange-50";
  
    return (
      <button
        className={`${borderColor} rounded-full border ${textColor} px-4 py-3 text-xl font-medium ${click}`}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    );
  }