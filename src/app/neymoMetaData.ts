export class BalanceSummaryRecord {
  acClass: string;
  balance: number;
}

export class VendorSummaryRecord {
  id: number;
  categoryName: string;
  vendorName: string;
  amount: number;
}

export class CategorySummaryRecord {
  id: number;
  categoryName: string;
  amount: number;
}

export class ActivityFeedRecord {
  title: string;
  summary: string;
}
