export class SetCustomerEmail {
  static readonly type = '[INVOICE] Set Customer Email';
  constructor(public payload: string) {
  }
}
