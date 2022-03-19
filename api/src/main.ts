import dayjs from "dayjs";
import dayjsCustomParseFormat from "dayjs/plugin/customParseFormat";
import dayjsTimezone from "dayjs/plugin/timezone";
import dayjsUtc from "dayjs/plugin/utc";
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";

// Utilities
import { AppModule } from "@modules/app/app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  // Extend dayjs parsing
  dayjs.extend(dayjsCustomParseFormat);
  dayjs.extend(dayjsTimezone);
  dayjs.extend(dayjsUtc);

  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const config = new DocumentBuilder()
    .setTitle("Smart Contract API")
    .setDescription("Smart Contract API description")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("/apiInfo", app, document);

  app.enableCors({
    // Cache preflight response for 1 hour ('Access-Control-Max-Age' header)
    maxAge: 60 * 60,
    origin: configService.get<string[]>("app.allowedOrigins", ["*"]),
  });

  app.useGlobalPipes(
    // Globally transform payload objects to match their TypeScript definition
    // Source: https://docs.nestjs.com/techniques/validation#transform-payload-objects
    new ValidationPipe({
      // Prevent showing default error messages
      // dismissDefaultMessages: true,
      transform: true,
    }),
  );

  const port = configService.get<number>("app.port", 3001);

  await app.listen(port);

  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`);
}

bootstrap();
