import 'isomorphic-fetch'; // for testing
const BASE_URL = 'http://localhost:8081/'

export function makeRegisterRequest({username,name,password}){
	let options = {};

	options.method = 'POST';

	options.body = {username,name,password};

	return fetchJsonApi('register',null,options);
}

export function makeLoginRequest({username,password}){
	let options = {};

	options.method = 'POST';

	options.body = {username,password};

	return fetchJsonApi('authenticate',null,options);
}

export function fetchJsonApi(endpoint,token = null,options = {}){
	let defaultConfig = {};
	//By Default
	defaultConfig.method = 'GET'; 

	defaultConfig.headers = {
		'Accept' : 'application/json',
		'Content-Type' : 'application/json'
	};		

	let config = Object.assign({},defaultConfig,options);


	if(config.body){
		config.body = JSON.stringify(config.body);
	}

	if(token !== null){
		config.headers = Object.assign({},config.headers,{'Authorization' : token});
	}

	return fetch(BASE_URL + endpoint,config)
			.then(res => res.json())
}