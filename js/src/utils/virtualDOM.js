export function createVirtualDOM(type, props = {}, children) {
	if(!Array.isArray(children)){
		children = [children];
	}
	//prevent undefined child
	children = children.filter(c => c !== undefined && c !== null);

	return { type, props, children };
}

export function createElement(node){
	if(typeof node === "string"){
		return document.createTextNode(node);
	}

	const parentElement = document.createElement(node.type);

	setProps(parentElement,node.props);

	addEventListeners(parentElement,node.props);
	
	node.children
		.map(createElement)
		.forEach(parentElement.appendChild.bind(parentElement));
		
	return parentElement;
}

function setProps(target, props){
	Object.keys(props).forEach(name => {
		setProp(target,name,props[name]);
	});
}

function setProp(target,name,value){
	if(isCustomProp(name)){
		return;
	}else if(name === "className"){
		target.setAttribute("class",value);
	}else if(typeof value === "boolean"){
		setBooleanProp(target,name,value);
	}
	else{
		target.setAttribute(name,value);
	}
}

function isCustomProp(name){
	return isEventProp(name);
}

function isEventProp(name) {
  return /^on/.test(name);
}

function addEventListeners(target,props){
  Object.keys(props).forEach(name => {
    if (isEventProp(name)) {
      target.addEventListener(
        extractEventName(name),
        props[name]
      );
    }
  });
}

function extractEventName(name) {
  return name.slice(2).toLowerCase();
}

function setBooleanProp(target, name,value){
	if(value){
		target.setAttribute(name,value);
		target[name] = true;
	}else {
		target[name] = false;
	}
}

