export type Buyer = {
    "Id": number,
    "Guid": string,
    "Code": string,
    "Title": string,
    "FirstName": string,
    "Name": string,
    "FatherName": string,
    "NationalCode": string | null,
    "CertNo": string | null,
    "CertDate": string | null,
    "EconomyCode": string | null,
    "Job": string | null,
    "ManagerName": string | null,
    "Type": 0 | 1,
    "ClassificationType": number,
    "PriceListCode": string | null,
    "PriceListDescription": string | null,
    "Deactivated": string | false,
    "PayMethod": number,
    "Discount": number,
    "Credit": number,
    "CashPaymentDiscount": number,
    "CardNo": string | null,
    "Email": string | null,
    "Site": string | null,
    "Mobile": string | null,
    "Phone": string | null,
    "Fax": string | null,
    "Address": string | null,
    "PostalCode": string | null,
    "HasSeller": number | null | boolean,
    "RowNumber": number | null | boolean,
}


export type Seller = {
    "Guid": string,
      "Code": string,
      "Title": string,
      "FirstName": string,
      "Name": string,
      "FatherName": string,
      "NationalCode": string,
      "CertNo": string,
      "CertDate": string,
      "EconomyCode": string,
      "Job": string,
      "ManagerName": string,
      "Type": 0 | 1,
      "PayMethod": number,
      "Email": string,
      "Site": string,
      "Mobile": string,
      "Phone": string,
      "Fax": string,
      "Address": string,
      "PostalCode": string,
      "HasBuyer": 0 | 1 | boolean
}

export type Guid = string

export type IPerson = {
    CrmObjectTypeName?: string,
    CrmObjectTypeCode: "person",
    RefId?: string,
    Emails?: string[],
    Website?: string,
    NationalCode?: string,
    Balance?: number,
    SourceType?: string,

    IdentityType: "حقیقی" | "حقوقی",

    FirstName?: string,
    LastName: string,

    BirthDate?: Date,
    Gender?: "زن" | "مرد",

    ExtendedProperties?: BaseCrmObjectExtendedPropertyInfo[],

    CustomerNumber?: string,

    CustomerDate?: Date,
    OtherUsername?: string,
    SaleUsername?: string,
    SupportUsername?: string,
    ColorName?: string,
    Categories: Categories[],
    
    PhoneContacts?: IdentityContactPhone[],
    AddressContacts?: IdentityContactAddress[],
    Tags?: string[],
    AreasOfInterest?: string,
    Children?: string,
    CreditType?: string,
    Degree?: string,

    Employees?: EmployeeInfo[],
    FacebookUsername?: string,
    Hobbies?: string,
    MannerType?: string,
    PaymentStatusType?: string,
    PersonPrefix?: string,
    PrefferedContactType?: string,
    Spouse?: string,
    Classification?: string,
    DontEmail?: boolean,
    DontFax?: boolean,
    DontPhoneCall?: boolean,
    DontSms?: boolean,
    DontSocialSms?: boolean,

    CreateDate: Date,
    ModifyDate: Date,

    CrmObjectTypeId?: Guid,
    CrmObjectTypeIndex?: number,

    ParentCrmObjectId?: Guid,
    ProcessStateIndex?: number,
    Stage?: string,
    StageId?: Guid,

    // Categories: { 
    //   CategoryInfo: { Key: "siteclients" },
    // },
    // PhoneContacts: {
    //   IdentityContactPhone: {
    //     PhoneNumber: string,
    //     PhoneType: "موبایل",
    //     IsDefault: true,
    //   },
    // },
}


export type Categories = {
    Id: Guid,
    IdentityId?: Guid,
    IsDeleted?: boolean,
    Key?: string,
    Name?: string,
    Type?: string,
}


export type BaseCrmObjectExtendedPropertyInfo = {
    Name: string,
    Value?: string,
    UserKey?: string,
}


export type IdentityContactPhone = {
    Id: Guid,
    RefId?: string,
    PhoneNumber: string,
    PhoneType?: "موبایل" | "تلفن" | "فکس" | "تلفکس",
    Extension?: string,
    IsDefault?: boolean,
    IsDeleted?: boolean,
}




export type EmployeeInfo = {
    Department?: string,
    Id?: Guid,
    JobType: string,
    Office?: string,
    OrganizationId?: Guid,
    PersonId?: Guid,
    Profession: string,
    PhoneType?: "موبایل" | "تلفن" | "فکس" | "تلفکس",
    Extension?: string,
    IsDefault?: boolean,
    IsDeleted?: boolean,
}



export type IdentityContactAddress = {
    Id?: Guid,
    Country?: string,
    State?: string,
    City?: string,
    AreaCode?: string,
    AddressType?: string,
    ZipCode?: string,
    ZipBox?: string,
    Address?: string,
    Profession: string,
    PhoneType?: "موبایل" | "تلفن" | "فکس" | "تلفکس",
    Extension?: string,
    IsDefault?: boolean,
    IsDeleted?: boolean,
    RefId?: string,
}



export type SaveCrmObjectResult = {
    CrmId?: Guid,
    Message?: string,
    Success?: boolean,
}








export type ProductInfo = {
    Brand?: string,
    BuyAble?: boolean,
    Code?: string,
    CommisionType: string,
    Commision?: number,
    Description?: string,
    GroupId: Guid,
    GroupName: string,
    Id?: Guid,
    Inventory?: boolean,
    IsActiveOrderPoint?: boolean,
    IsCommission?: boolean,
    MadeIn?: string,
    Name: string,
    PriceListInfo?: PriceListInfo[],
    ProductUnitType?: string,
    RefId?: string,
    Sellable?: boolean,
    Taxable?: boolean,
    TechInfo?: boolean,
    Toolable?: boolean,
    UnitBuyPrice?: number,
    UnitPrice?: number,
}




export type PriceListInfo = {
    InvoiceType?: string,
    Name?: string,
    PriceListProductInfo?: PriceListProductInfo[],
}



export type PriceListProductInfo = {
    Amount?: number,
    ProductId?: Guid,
    PricingType?: string,
    ProductCode?: string,
}