export class BalanceSummaryRecord {
  avl_bal: number;
  bal_type: string;
}

export class VendorSummaryRecord {
  id: number;
  vendor_name: string;
  amount: number;
  alias_id: number;
}

export class CategorySummaryRecord {
  id: number;
  category: string;
  amount: number;
}

export class ActivityFeedRecord {
  header: string;
  subheader: string;
  body: string;
}
export class NeymoUser {
  device_id: string;
  uuid: string;
  phone_number: string;
  model_name: string;
  os_platform: string;
  version: string;
  mcc: number; // mobileCountryCode
  mnce: number; // mobileNetworkCod
  country_code: number;
  google_user_token: string;
  user: string;
  user_id: number;
  auth_token: string;
}

export class ResultsRecord {
  reportName: string;
  count: number;
  next: string;
  previous: string;
  results: any[];
}

export const neymoHomePath = '/dashboard';
export const appTitle = 'neymo';
