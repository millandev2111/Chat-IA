import { MLCEngineWorkerHandler, MLCEngine } from "https://esm.run/@mlc-ai/web-llm";

const engine = new MLCEngine();
const handler = new MLCEngineWorkerHandler(engine);

self.onmessage = msg => {
  handler.onmessage(msg);
};
