import { LogLevel } from "@/libs/logger";

export interface Config {
  logLevel: keyof typeof LogLevel;
}

export const config = {
  logLevel:
    (process.env.NEXT_PUBLIC_LOG_LEVEL as keyof typeof LogLevel) ||
    LogLevel.ALL,
} satisfies Config;
