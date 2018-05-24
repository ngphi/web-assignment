import {createVirtualDOM} from "../utils/virtualDOM";
import {connectToStore} from "../configStore";

//Components
import ContactCard from "./ContactCard";
import PopupEditor from "./PopupEditor";

const CardList = ({contactNode},store) => {

	const { editableId,
			collapsedSupIds,} = store.getState();

	const contact = contactNode.content;

	const isNotCollapsed = checkSupsNotCollapsed(collapsedSupIds,contact.id);

	let contactCard;

	if(editableId === contact.id){
		//FIX ME : need to clean this T.T
		const style = "position: relative;top:0%;left:0%;transform:none;display:inline-block";

		contactCard = PopupEditor({style,contact,isEditing: true});
	}else{
		contactCard = ContactCard({contact,isNotCollapsed});
	}

	let children = [];

	children.push(contactCard);

	if(contactNode.children.length > 0 && isNotCollapsed){

		const subordinates = contactNode.children.reduce((subList,childNode) => {

			const wrappedCardList = connectToStore(CardList);

			return [...subList,wrappedCardList({contactNode: childNode})];

		},[]);
		
		children.push(createVirtualDOM("ul",{},subordinates));
	}

	return createVirtualDOM("li",{},children);
};

function checkSupsNotCollapsed(collapsedSupIds,currentId){
	return collapsedSupIds.find(id => id === currentId) === undefined;
}


export default connectToStore(CardList);