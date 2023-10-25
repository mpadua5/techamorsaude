import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const DefaultPort: number = 3000 
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix('/api/v1')
  
  const config = new DocumentBuilder()
    .setTitle('techamorsaudeAPI')
    .setDescription('API para fins de testes e estudos')
    .setVersion('1.0')
    .addTag('techamorsaude')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/v1/swagger', app, document);

  await app.listen(DefaultPort);
  console.log(`*** Running in port: ${DefaultPort} ***`)
}
bootstrap();
