interface OverlayProps {
  isVisible: boolean;
  onClick: () => void;
}

function Overlay({ isVisible, onClick }: OverlayProps) {
  return isVisible && <div className="overlay" onClick={onClick} />;
}

export default Overlay;
