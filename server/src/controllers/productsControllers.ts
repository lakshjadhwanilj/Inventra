import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

export const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        // Get search query from request
        const search = req.query.search?.toString();
        // Fetch products from database with search filter
        const products = await prisma.products.findMany({
            where: {
                name: {
                    contains: search,
                },
            },
        });
        // Send products as response
        res.json(products);
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: 'Error retrieving products.' });
    }
};

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        // Destructure product details from request body
        const {productId, name, price, rating, stockQuantity} = req.body;
        // Create new product in database
        const product = await prisma.products.create({
            data: {
                productId,
                name,
                price,
                rating,
                stockQuantity,
            },
        });
        // Send created product as response
        res.status(201).json(product);
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: 'Error creating product.' });
    }
};