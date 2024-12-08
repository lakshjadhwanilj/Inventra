import React, { FormEvent, useState } from 'react';
import { v4 } from 'uuid';
import Header from '@/components/header/header';

type ProductFormData = {
    name: string;
    price: number;
    stockQuantity: number;
    rating: number;
};

type CreateProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (formData: ProductFormData) => void;
};

export default function CreateProductModal({ isOpen, onClose, onCreate }: CreateProductModalProps) {
    const [formData, setFormData] = useState({
        productId: v4(),
        name: '',
        price: 0,
        stockQuantity: 0,
        rating: 0,
    });

    if (!isOpen) {
        return null;
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onCreate(formData);
        onClose();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'price' || name === 'stockQuantity' || name === 'rating'
                ? parseFloat(value)
                : value,
        });
    };

    const labelssStyles = 'block text-sm font-medium text-gray-700';
    const inputCssStyles = 'block w-full mb-2 p-2 border-2 border-gray-500 rounded-md ';

    return (
        <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20'>
            <div className='relative top-20 mx-auto p-5 w-96 shadow-lg border rounded-md bg-white'>
                <Header name='Create New Product' />
                <form onSubmit={handleSubmit} className='mt-5'>
                    {/* PRODUCT NAME */}
                    <label htmlFor='productName' className={labelssStyles}>
                        Product Name
                    </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Enter product name'
                        value={formData.name}
                        onChange={handleChange}
                        className={inputCssStyles}
                        required
                    />
                    
                    {/* PRICE */}
                    <label htmlFor='productPrice' className={labelssStyles}>
                        Product Price
                    </label>
                    <input
                        type='number'
                        id='price'
                        name='price'
                        placeholder='Enter product price'
                        value={formData.price}
                        onChange={handleChange}
                        className={inputCssStyles}
                        required
                    />

                    {/* STOCK QUANTITY */}
                    <label htmlFor='stockQuantity' className={labelssStyles}>
                        Stock Quantity
                    </label>
                    <input
                        type='number'
                        id='stockQuantity'
                        name='stockQuantity'
                        placeholder='Enter stock quantity'
                        value={formData.stockQuantity}
                        onChange={handleChange}
                        className={inputCssStyles}
                        required
                    />

                    {/* RATING */}
                    <label htmlFor='rating' className={labelssStyles}>
                        Rating
                    </label>
                    <input
                        type='number'
                        id='rating'
                        name='rating'
                        placeholder='Enter product rating'
                        value={formData.rating}
                        onChange={handleChange}
                        className={inputCssStyles}
                        required
                    />

                    {/* CREATE ACTIONS */}
                    <button type='submit' className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
                        Create
                    </button>
                    <button type='button' onClick={onClose} className='ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700'>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
}