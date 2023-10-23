import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { IPerson } from './types';
import { Client } from 'nestjs-soap';
import {soap} from 'strong-soap'
@Injectable()
export class AppService {

  constructor(
    private readonly httpService: HttpService,
    // @Inject('MY_SOAP_CLIENT') private readonly crmSoap: Client
    ) {}


  home(): string {
    return 'CrmSync v1.0';
  }

  // ========================================================================================> Click
  async getBuyersFromCLICK(pageNumber: number) {
    const params = {
      userGuid: process.env.CLICK_USER_GUID,
      pageNumber,
      step: 100,
    }
    const { data } = await firstValueFrom(
      this.httpService.get(`${process.env.CLICK_BASE_URL}/Buyer/List`, { params }).pipe(
        catchError((error: AxiosError) => {
          throw error;          
        })
      )
    );
    return data
  }

  async getSellersFromCLICK(pageNumber: number) {
    const params = {
      userGuid: process.env.CLICK_USER_GUID,
      pageNumber,
      step: 100,
    }
    const { data } = await firstValueFrom(
      this.httpService.get(`${process.env.CLICK_BASE_URL}/Seller/List`, { params }).pipe(
        catchError((error: AxiosError) => {
          throw error;          
        })
      )
    );
    return data
  }

  async getSellInvoiceFromCLICK() {
    const params = {
      userGuid: process.env.CLICK_USER_GUID,
      // pageNumber,
      // step,
    }
    const { data } = await firstValueFrom(
      this.httpService.get(`${process.env.CLICK_BASE_URL}/Buyer/List`, { params }).pipe(
        catchError((error: AxiosError) => {
          throw error;          
        })
      )
    );
    return data
  }
  // ========================================================================================> Click

  async savePersonToCRM(person: IPerson) {
    // Enter the field with the username and password that has the necessary permission to find the person.

    const params = {
      username: process.env.CRM_USERNAME,
      password: process.env.CRM_PASSWORD,
      person,
    }
    // return await this.crmSoap.SavePerson(params);
  }

}



