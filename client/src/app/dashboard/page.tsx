'use client';

import ExpenseSummary from '@/components/expensesummary/expensesummary'
import PopularProducts from '@/components/popularproducts/popularproducts';
import PurchaseSummary from '@/components/purchasesummary/purchasesummary';
import SalesSummary from '@/components/salessummary/salessummary'

export default function Dashboard() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows'>
			<PopularProducts />
			<SalesSummary />
			<PurchaseSummary />
			<ExpenseSummary />
			<div className='md:row-span-1 xl:row-span-2 bg-gray-500'></div>
			<div className='md:row-span-1 xl:row-span-2 bg-gray-500'></div>
			<div className='md:row-span-1 xl:row-span-2 bg-gray-500'></div>
		</div>
	);
}