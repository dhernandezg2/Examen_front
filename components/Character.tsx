import { FunctionalComponent } from "preact/src/index.d.ts";
import { _State } from "../routes/character/[character].tsx";


type Props = {
  data: _State;
};

const ComponenteCharacter: FunctionalComponent<Props> = (props) => {
    return (
        <div class="card">
            <img src={props.data.characters.image} alt={props.data.characters.name} />
             <h3>{props.data.characters.name}</h3>
            <p>House: {props.data.characters.house}</p>
        </div>
    );
}
export default ComponenteCharacter;