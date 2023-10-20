import { CreateRequest } from './RequestTemplate.js';
import http from 'k6/http';

export default function(){
	
	var body = CreateRequest(`PlayNGoCasino`,[`playnGoGoldVolcano`],[`PlaynGoCasino_Bet_L:1_C:10_D:0.1_CUR:EUR`,`PlaynGoCasino_Bet_L:1_C:10_D:0.02_CUR:ARS`, `PlaynGoCasino_Bet_L:1_C:10_D:0.01_CUR:PLN`, `PlaynGoCasino_Bet_L:1_C:10_D:0.02_CUR:NZD`]);
    var params = { headers: { 'Content-Type': 'application/json' } };
    var res = http.post(`https://awards-host-area-gaming-qa.apps2.igaming-test.euc1.betsson.tech/api/v1/PlayNGoCasino/11/FreeSpin/CreateFreeSpin`, JSON.stringify(body), params);
    if (res.status !== 200) 
	{
    console.warn(`PlayNGoCasino Provider create receive: ${JSON.stringify(res)}`);
   	}
    if(res.status == 'OK')
	{
		console.log(`request success`);
	}
}


