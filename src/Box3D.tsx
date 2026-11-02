import "./3d-box.css";

export function Box3D() {
  return (
    <div className="scene">
      <div className="cube">
        <div className="face first">
          <span>1</span>
        </div>

        <div className="face second">
          <span>2</span>
        </div>

        <div className="face third">
          <span>3</span>
        </div>

        <div className="face fourth">
          <span>4</span>
        </div>

        <div className="face fifth">
          <span>5</span>
        </div>

        <div className="face sixth">
          <span>6</span>
        </div>
      </div>
    </div>
  );
}
