import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommandModule } from 'nestjs-command';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { SoapModule, SoapModuleOptions } from 'nestjs-soap';
import { BuyersSyncCommand } from './commands/buyersSync.command';
import { SellersSyncCommand } from './commands/sellersSync.command';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
    SoapModule.forRootAsync(
      {
        clientName: 'CRM_CLIENT',
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (
          configService: ConfigService,
        ): Promise<SoapModuleOptions> => ({
          clientName: 'CRM_CLIENT',
          uri: "http://192.168.15.13/Services/API/IPerson.svc?wsdl",
          auth: {
            type: 'basic',
            username: configService.get('CRM_USERNAME') || "",
            password: configService.get('CRM_PASSWORD') || "",
          },
        }),        
      },
    ),
    CommandModule
  ],
  controllers: [AppController],
  providers: [
    BuyersSyncCommand,
    SellersSyncCommand,
    AppService
  ],
})
export class AppModule {}
