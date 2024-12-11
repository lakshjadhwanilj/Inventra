import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getExpensesByCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        // Fetch expenses by category from the database
        const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany({
            orderBy: {
                date: 'desc',
            },
        });
        // Convert amount to string for each expense item
        const expenseByCategorySummary = expenseByCategorySummaryRaw.map(
            (item) => ({
                ...item,
                amount: item.amount.toString()
            })
        );
        // Send the response with the formatted expense data
        res.json(expenseByCategorySummary);
    } catch (error) {
        // Handle any errors that occur during the process
        res.status(500).json({ message: 'Error retrieving expenses by category.' });
    }
};