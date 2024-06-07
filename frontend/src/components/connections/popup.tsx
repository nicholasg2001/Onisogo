
type PopupProps = {
  show: boolean;
  message: string;
};

function Popup(props: PopupProps) {
  if (!props.show) {
    return null;
  } else {
    return (
      <div className="absolute inset-x-0 -top-20 mx-auto max-w-max rounded-lg bg-black px-3 py-2 text-center text-white">
        {props.message}
      </div>
    );
  }
}

export default Popup;