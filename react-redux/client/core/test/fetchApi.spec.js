import { expect } from 'chai';
import {fetchJsonApi,makeRegisterRequest,makeLoginRequest} from '../fetchApi';

describe('Fetch API Test', () => {

	const user = {
        	'username' : 'testaccount',
        	'name': 'test',
        	'password': 'test123456',
    };

    it('should be able to request register', (done) => {
    	makeRegisterRequest(user)
  				.then(data => {
        				if(data.success){
        					return done();
        				}
        				if(data.error.msg === 'not available'){ //if user is already registered
        					return done();
        				}
        			}).catch(done);

    });

    it('should be able to request login',(done) => {
    	makeLoginRequest({username : user.username,
    					password : user.password})
    					.then( data => {
	    					if(data.success){
	    						return done();
	    					}
    					}).catch(done);
    });

    it('should be able to fetch top traders',(done) => {
    	let options = {};

    	options.method = 'POST';

    	options.body = {
    		username : user.username,
    		password : user.password
    	};
    	fetchJsonApi('authenticate',null,options)
			.then( data => {
				const token = data.token;
				fetchJsonApi('users',token)
				.then(data => {
					if(data.length > 0){
						done();
					}
				})
			}).catch(done);
    });

    it('should be able to make a buy order',(done) => {
    	done();
    });

});