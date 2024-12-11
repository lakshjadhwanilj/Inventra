import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getDashboardData = async (req: Request, res: Response): Promise<void> => {
    try {
        // Fetch top 15 popular products by stock quantity
        const popularProducts = await prisma.products.findMany({
            take: 15,
            orderBy: {
                stockQuantity: 'desc',
            },
        });
        // Fetch latest 5 sales summaries
        const salesSummary = await prisma.salesSummary.findMany({
            take: 5,
            orderBy: {
                date: 'desc',
            },
        });
        // Fetch latest 5 purchase summaries
        const purchaseSummary = await prisma.purchaseSummary.findMany({
            take: 5,
            orderBy: {
                date: 'desc',
            },
        });
        // Fetch latest 5 expense summaries
        const expenseSummary = await prisma.expenseSummary.findMany({
            take: 5,
            orderBy: {
                date: 'desc',
            },
        });
        // Fetch latest 5 expense by category summaries
        const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany({
            take: 5,
            orderBy: {
                date: 'desc',
            },
        });
        // Convert amount to string for expense by category summaries
        const expenseByCategorySummary = expenseByCategorySummaryRaw.map(
            (item) => ({
                ...item,
                amount: item.amount.toString()
            })
        );
        // Send the aggregated data as JSON response
        res.json({
            popularProducts,
            salesSummary,
            purchaseSummary,
            expenseSummary,
            expenseByCategorySummary,
        });
    } catch (error) {
        // Handle errors and send a 500 status code
        res.status(500).json({ message: 'Error retrieving dashboard metrics.' });
    }
};