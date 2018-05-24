function createStockSocket(){

	let onChangeListeners = [];

	let onRegisterListeners = [];

	const host = window.document.location.host.replace(/:.*/,'');

	const wsPort = ':8080';

	let ws = null;

	function start(){
		ws = new WebSocket(`ws://${host}${wsPort}`);

		ws.onmessage = (event) => {
			const data = JSON.parse(event.data);

			switch(data.type){
				case 'supported-codes' : return registerCode(data.value);
				case 'change' :	return emitStockChange(data); 
				default : //do nothing
			}
		}
	}

	function close(){
		if(ws !== null){
			onRegisterListeners = [];
			onChangeListeners = [];
			ws.close();
		}else{
			throw new Error("StockSocket has not openned yet !");
		}
	}

	function onRegister(listener){
		onRegisterListeners.push(listener);
		//unsubscribe
		return () => {
			const index = onRegisterListeners.indexOf(listener);
			onRegisterListeners.splice(index,1);
		}
	}

	function registerCode(codes){

		codes.forEach(code => {

			onRegisterListeners.forEach(listener => listener(code));

			ws.send(JSON.stringify({type: 'register',value : code}));

		})

	}
	
	function onChange(listener){
		onChangeListeners.push(listener);
		//unsubscribe
		return () => {
			const index = onChangeListeners.indexOf(listener);
			onChangeListeners.splice(index,1);
		}
	}

	function emitStockChange(data){
		onChangeListeners.forEach(listener => listener(data));
	}

	return {
		start,
		close,
		onChange,
		onRegister,
	}
}
//singleton
const stockSocket = createStockSocket();

export default stockSocket;