import dayjs from "dayjs";
import { registerAs } from "@nestjs/config";

// Utilities
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require("../../../../package.json");

// Types
import { IApiConfig } from "../types";

const nodeEnv = process.env.NODE_ENV || "development";

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") ?? [
  "http://localhost:3000",
];

const releaseDateEnv = process.env.RELEASE_DATE;
const releaseDate = releaseDateEnv
  ? dayjs(releaseDateEnv).format("YYYY-MMM-DD HH:mm")
  : undefined;

const appConfig: IApiConfig = {
  allowedOrigins,
  port: parseInt(process.env.PORT as string, 10) || 3001,
  production: nodeEnv === "production",
  releaseDate,
  releaseHash: process.env.IMAGE_TAG,
  version,
};

export default registerAs("app", () => ({ ...appConfig }));
