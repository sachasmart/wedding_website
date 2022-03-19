import { Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";

// Utilities
import { appConfig as _appConfig } from "../config";

// Types
import { IApiInfo } from "../types";

@Injectable()
export class AppService {
  constructor(
    @Inject(_appConfig.KEY)
    private readonly appConfig: ConfigType<typeof _appConfig>,
  ) {}

  /**
   * Simple API information
   *
   * @returns API information
   */
  getInfo(): IApiInfo {
    const { releaseDate, releaseHash, version } = this.appConfig;

    return {
      releaseDate,
      releaseHash,
      version,
    };
  }
}
