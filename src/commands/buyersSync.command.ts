import { Command, Positional, Option } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { Buyer } from 'src/types';


@Injectable()
export class BuyersSyncCommand {
  constructor(private readonly appService: AppService) {}

  @Command({
    command: 'sync:buyers',
    describe: 'sync buyers',
  })
  async action() {
    console.log("Start syncing");
    let items = []
    let p = 1
    do {
      console.log("Page:", p);
      const result = await this.appService.getBuyersFromCLICK(p)
      items = result["Data"] as Buyer[]
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        // await this.appService.savePersonToCRM({
        //   FirstName: "نام کاربر",
        //   LastName: "نام خانوادگی کاربر",
        //   CrmObjectTypeCode: 'person',
        //   IdentityType: "حقیقی",
        //   CreateDate: new Date(),
        //   ModifyDate: new Date(),
        //   Categories: []
        // })
      }
      p++
    } while (items.length > 0);
    console.log("Finish syncing");
  }
}