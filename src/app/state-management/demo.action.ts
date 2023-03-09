export class SetCustomerEmail {
  static readonly type = '[INVOICE] Set Customer Email';
  constructor(public payload: string) {
  }
}

export class GetInvoice {
  static readonly type = '[INVOICE] Get Customer Invoice From the Server';
}
