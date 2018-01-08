import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const balanceSummaryReport = [
      { bal_type: 'Bank', avl_bal: 3000000 },
      { bal_type: 'Card', avl_bal: 120000 },
      { bal_type: 'Wallet', avl_bal: 33000 },
    ];
    const vendorSummaryReport = [
      { id: 1, category: 'food & drinks', vendorName: 'ABC Restaurant', amount: 9500 },
      { id: 2, category: 'entertainment', vendorName: 'Sathyam Theatre',  amount: 5000 },
      { id: 3, category: 'groceries', vendorName: 'Murugan Stores',  amount: 2000 },
    ];
    const categorySummaryReport = [
      { id: 1, category: 'Shopping', amount: 34000 },
      { id: 2, category: 'Entertainment', amount: 10000 },
      { id: 3, category: 'Travel', amount: 6700 },
    ];
    const activityFeed = [
      { header: 'ActivityFeed 1', body: 'This is activity Feed 1. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ...' },
      { header: 'ActivityFeed 2', body: 'This is activity Feed 2. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ...' },
      { header: 'ActivityFeed 3', body: 'This is activity Feed 3. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ...' },
      { header: 'ActivityFeed 4', body: 'This is activity Feed 4. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ...' },
      { header: 'ActivityFeed 5', body: 'This is activity Feed 5. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ...' },
    ];
    const device = [];

    const balance_summary = {
      count: 1,
      next: '',
      previous: '',
      results: [
        {
          name: 'balance_summary',
          title: 'Balances',
          data: balanceSummaryReport,
        },
      ]
    };

    const expense_by_vendor = {
      count: 1,
      next: '',
      previous: '',
      results: [
        {
          name: 'vendor_summary',
          title: 'Vendor Summary',
          data: vendorSummaryReport,
        },
      ]
    };

    const expense_by_category = {
      count: 1,
      next: '',
      previous: '',
      results: [
        {
          name: 'category_summary',
          title: 'Category Summary',
          data: categorySummaryReport,
        },
      ]
    };

    const activity_feed = {
      count: 4,
      next: '',
      previous: '',
      results: activityFeed
    };

    return {
      balance_summary,
      expense_by_vendor,
      expense_by_category,
      activity_feed,
      device,
    };
  }
}
