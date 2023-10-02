import "./style.css";
import giraffe from "./giraffe.jpg";

console.log("hello111");

const div = document.createElement("div");
const img = document.createElement("img");
img.src = giraffe;
div.append(img);
document.body.append(div);
