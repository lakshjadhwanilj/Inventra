'use client';

import Header from '@/components/header/header';
import { useGetProductsQuery } from '@/state/api';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

// Define columns for the data grid
const columns: GridColDef[] = [
    { field: 'productId', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Product Name', width: 200 },
    { 
        field: 'price', 
        headerName: 'Price', 
        width: 110, 
        type: 'number', 
        valueGetter: (value, row) => `$${row.price}` // Format price with a dollar sign
    },
    { 
        field: 'rating', 
        headerName: 'Rating', 
        width: 110, 
        type: 'number', 
        valueGetter: (value, row) => row.rating ? row.rating : 'N/A' // Show 'N/A' if rating is not available
    },
    { field: 'stockQuantity', headerName: 'Stock Quantity', width: 150, type: 'number' }
];

export default function Inventory() {
    const { data: products, isError, isLoading } = useGetProductsQuery(); // Fetch products data

    if (isLoading) {
        return <div className='py-4'>Loading...</div>; // Show loading state
    }

    if (isError || !products) {
        return <div className='text-center text-red-500 py-4'>Failed to fetch products.</div>; // Show error state
    }

    return (
        <div className='flex flex-col'>
            <Header name='Inventory' /> 
            <DataGrid 
                rows={products} 
                columns={columns} 
                getRowId={(row) => row.productId}
                checkboxSelection
                className='bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700'
            />
        </div>
    );
}