import { Mastra } from "@mastra/core/mastra";
import { LibSQLStore } from "@mastra/libsql";
import { weatherAgent } from "./agents";
import { ConsoleLogger, LogLevel } from "@mastra/core/logger";
import { registerCopilotKit } from "@ag-ui/mastra/copilotkit";

const LOG_LEVEL = (process.env.LOG_LEVEL as LogLevel) || "info";

export const mastra = new Mastra({
  agents: {
    weatherAgent,
  },
  storage: new LibSQLStore({
    id: "mastra-storage",
    url: ":memory:",
  }),
  logger: new ConsoleLogger({
    level: LOG_LEVEL,
  }),
  bundler: {
    externals: ["@copilotkit/runtime"],
  },
  server: {
    port: 8080,
    host: '0.0.0.0',
    cors: {
      origin: "*",
      allowMethods: ["*"],
      allowHeaders: ["*"],
    },
    apiRoutes: [
      registerCopilotKit({
        path: '/copilotkit',
        resourceId: 'copilotkit-resource',
      })
    ]
  }
});
