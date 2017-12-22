import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const balanceSummary = [
      { acClass: 'Bank', balance: 3000000 },
      { acClass: 'Card', balance: 120000 },
      { acClass: 'Wallet', balance: 33000 },
    ]
    const vendorSummary = [
      { id: 1, categoryName: 'food & drinks', vendorName: 'ABC Restaurant', amount: 9500 },
      { id: 2, categoryName: 'entertainment', vendorName: 'Sathyam Theatre',  amount: 5000 },
      { id: 3, categoryName: 'groceries', vendorName: 'Murugan Stores',  amount: 2000 },
    ]
    const categorySummary = [
      { id: 1, categoryName: 'Shopping', amount: 34000 },
      { id: 2, categoryName: 'Entertainment', amount: 10000 },
      { id: 3, categoryName: 'Travel', amount: 6700 },
    ]
     const activityFeed = [
      { title: 'ActivityFeed 1', summary: 'This is activity Feed 1. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ...' },
      { title: 'ActivityFeed 2', summary: 'This is activity Feed 2. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ...' },
      { title: 'ActivityFeed 3', summary: 'This is activity Feed 3. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ...' },
      { title: 'ActivityFeed 4', summary: 'This is activity Feed 4. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ...' },
      { title: 'ActivityFeed 5', summary: 'This is activity Feed 5. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ...' },
    ];

    return { balanceSummary, vendorSummary, categorySummary, activityFeed };
  }
}
