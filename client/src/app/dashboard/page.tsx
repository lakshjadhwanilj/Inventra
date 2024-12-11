'use client';

import ExpenseSummary from '@/components/expensesummary/expensesummary';
import PopularProducts from '@/components/popularproducts/popularproducts';
import PurchaseSummary from '@/components/purchasesummary/purchasesummary';
import SalesSummary from '@/components/salessummary/salessummary';
import StatsCard from '@/components/statscard/statscard';
import { CheckCircle, Package, Tag, TrendingDown, TrendingUp } from 'lucide-react';

// Dashboard component
export default function Dashboard() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows'>
			<PopularProducts />
			<SalesSummary />
			<PurchaseSummary />
			<ExpenseSummary />
			<StatsCard
				title='Customer & Expenses'
				primaryIcon={<Package className='text-blue-600 w-6 h-6' />}
				dateRange='22 - 29 October 2023'
				details={[
					{ title: 'Customer Growth', amount: '175.00', changePercentage: 131, IconComponent: TrendingUp },
					{ title: 'Expenses', amount: '10.00', changePercentage: -56, IconComponent: TrendingDown },
				]}
			/>
			<StatsCard
				title='Dues & Pending Orders'
				primaryIcon={<CheckCircle className='text-blue-600 w-6 h-6' />}
				dateRange='22 - 29 October 2023'
				details={[
					{ title: 'Dues', amount: '250.00', changePercentage: 131, IconComponent: TrendingUp },
					{ title: 'Pending Orders', amount: '147.00', changePercentage: -56, IconComponent: TrendingDown },
				]}
			/>
			<StatsCard
				title='Sales & Discount'
				primaryIcon={<Tag className='text-blue-600 w-6 h-6' />}
				dateRange='22 - 29 October 2023'
				details={[
					{ title: 'Sales', amount: '1000.00', changePercentage: 20, IconComponent: TrendingUp },
					{ title: 'Discount', amount: '200.00', changePercentage: -10, IconComponent: TrendingDown },
				]}
			/>
		</div>
	);
}