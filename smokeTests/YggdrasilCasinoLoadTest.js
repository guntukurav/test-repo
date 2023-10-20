import { CreateRequest } from './RequestTemplate.js';
import http from 'k6/http';

export default function(){
	
	var body = CreateRequest(`YggdrasilCasino`,[`Yggdrasil10xRewind`],[`yggdrasilCasinoBet_-1:1386106_0_EUR`,`yggdrasilCasinoBet_-1:1386196_0_GEL`]);
    var params = { headers: { 'Content-Type': 'application/json' } };
    var res = http.post(`https://awards-host-area-gaming-qa.apps2.igaming-test.euc1.betsson.tech/api/v1/YggdrasilCasino/11/FreeSpin/CreateFreeSpin`, JSON.stringify(body), params);
    if (res.status !== 200) 
	{
    console.warn(`YggdrasilCasinoProvider create receive: ${JSON.stringify(res)}`);
   	}
    if(res.status == 'OK')
	{
		console.log(`request success`);
	}
}


