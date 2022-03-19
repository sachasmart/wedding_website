import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";

// Utilities
import { AppService } from "../services";

// Types
import { IApiInfo } from "../types";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /** API information */
  @Get("/")
  getInfo(): IApiInfo {
    return this.appService.getInfo();
  }

  /** Health check route */
  @Get("/healthcheck")
  @HttpCode(HttpStatus.NO_CONTENT)
  getHealthCheck(): void {
    return;
  }
}
