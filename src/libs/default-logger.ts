import { config } from "@/config/logs";
import { createLogger } from "@/libs/logger";

export const logger = createLogger({ level: config.logLevel });
