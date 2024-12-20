'use client';

import Header from '@/components/header/header';
import { useGetUsersQuery } from '@/state/api';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

// Define columns for the DataGrid
const columns: GridColDef[] = [
    { field: 'userId', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
];

export default function Users() {
    // Fetch users data using custom hook
    const { data: users, isError, isLoading } = useGetUsersQuery();

    if (isLoading) {
        // Show loading state
        return <div className='py-4'>Loading...</div>;
    }

    if (isError || !users) {
        // Show error state
        return <div className='text-center text-red-500 py-4'>Failed to fetch users.</div>;
    }

    return (
        <div className='flex flex-col'>
            <Header name='Users' />
            <DataGrid 
                rows={users}
                columns={columns}
                getRowId={(row) => row.userId}
                checkboxSelection
                className='bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700'
            />
        </div>
    );
}