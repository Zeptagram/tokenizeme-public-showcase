import { publicApiSummary } from "./services/publicApi.js";
import { describeSorobanFlow } from "./services/sorobanGateway.js";

function main(): void {
  console.log("TokenizeMe Public Showcase");
  console.log("==========================");
  console.log(publicApiSummary());
  console.log("");
  console.log(describeSorobanFlow());
}

main();

