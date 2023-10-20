import { CreateRequest } from './RequestTemplate.js';
import http from 'k6/http';

export default function(){
	
	var body = CreateRequest(`PragmaticPlay`,[`pragmaticPlayGatesOfOlympus`],[`pragmaticplay_bet:2:0.03:EUR`,`pragmaticplay_bet:2:1.5:ARS`, `pragmaticplay_bet:1:0.02:CAD`, `pragmaticplay_bet:2:5.0:CLP`]);
    var params = { headers: { 'Content-Type': 'application/json' } };
    var res = http.post(`https://awards-host-area-gaming-qa.apps2.igaming-test.euc1.betsson.tech/api/v1/PragmaticPlay/11/FreeSpin/CreateFreeSpin`, JSON.stringify(body), params);
    if (res.status !== 200) 
	{
    console.warn(`PragmaticPlay Provider create receive: ${JSON.stringify(res)}`);
   	}
    if(res.status == 'OK')
	{
		console.log(`request success`);
	}
}


