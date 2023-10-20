import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  //http.get('https://awards-host-area-gaming-qa.apps2.igaming-test.euc1.betsson.tech/api/v1/Relax/FreeSpinConfiguration/11');
  //http.get('https://awards-host-area-gaming-qa.apps2.igaming-test.euc1.betsson.tech/api/v1/PragmaticPlay/FreeSpinConfiguration/11');
  http.get('http://localhost:8080/api/v1/YggdrasilCasino/FreeSpinConfiguration/11');
  http.get('http://localhost:8080/api/v1/PlanyNGoCasino/FreeSpinConfiguration/11');
  //http.get('https://awards-host-area-gaming-qa.apps2.igaming-test.euc1.betsson.tech/api/v1/PlaynGoCasino/FreeSpinConfiguration/11');
  //http.get('https://awards-host-area-gaming-qa.apps2.igaming-test.euc1.betsson.tech/api/v1/EvolutionCasino/FreeSpinConfiguration/11') ;
  //http.get('https://awards-host-area-gaming-qa.apps2.igaming-test.euc1.betsson.tech/api/v1/PushGamingCasino/FreeSpinConfiguration/11') ;
  //http.get('https://awards-host-area-gaming-qa.apps2.igaming-test.euc1.betsson.tech/api/v1/QuickspinDirect/FreeSpinConfiguration/11') ;
  sleep(1);
}

