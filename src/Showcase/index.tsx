import { Cube3D } from "../components/Cube3D";
import { GameCase } from "../components/GameCase";

export function Showcase() {
  return (
    <div className="showcase-container">
      <h1>showcase</h1>

      <Cube3D />
      <GameCase />
    </div>
  );
}
