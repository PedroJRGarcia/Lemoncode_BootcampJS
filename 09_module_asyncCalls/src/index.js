import "./styles.css";
import { createCharacterRow } from "./utils";
import { getCharacters } from "./data-business";

getCharacters().then(users => {
    const nodes = [];
    for (let user of users) {
    const node = createCharacterRow(user);
    nodes.push(node);
    }
    for (let node of nodes) {
    document.getElementById("root").append(node);
    }
});
