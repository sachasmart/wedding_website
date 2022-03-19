import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

// Utilities
import { appConfig } from "./config";
import { AppController } from "./controllers";
import { AppService } from "./services";

@Module({
  imports: [
    // Configuration
    // https://docs.nestjs.com/techniques/configuration
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [appConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
