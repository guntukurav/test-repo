import { uuidv4 } from 'https://jslib.k6.io/k6-utils/1.4.0/index.js';

export function CreateRequest(providerName, games, BetLevelIds){
	var requestJson = {
		ProviderName : providerName,
		Games : games,
		BetLevelIds : BetLevelIds,
		Rounds : 10,
		ExpirationType : "Relative",
		ExpirationSpan : "10.00:00:00",
		//need to pass the unique rewardId each time
		RewardId : uuidv4()
	}
 return requestJson;
 }