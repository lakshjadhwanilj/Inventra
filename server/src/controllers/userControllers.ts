import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

// Initializing PrismaClient
const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        // Fetching all users from the database
        const users = await prisma.users.findMany(); 
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users.' });
    }
}
