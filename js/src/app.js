import {createElement} from "./utils/virtualDOM";
import store from "./configStore";

//components
import App from "./components/App";

//listen to the change of store"s state
store.subscribe(render);

render();

function render(){

	const root = document.getElementById("root");
	
	root.innerHTML = ""; //reset the view to re-render all components. Not efficient :(

	root.appendChild(createElement(App()));
}

