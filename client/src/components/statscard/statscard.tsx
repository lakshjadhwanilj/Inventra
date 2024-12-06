import React from 'react';
import { LucideIcon } from 'lucide-react';

type StatDetail = {
    title: string;
    amount: string;
    changePercentage: number;
    IconComponent: LucideIcon;
};

type StatsCardProps = {
    title: string;
    primaryIcon: JSX.Element;
    details: StatDetail[];
    dateRange: string;
};

export default function StatsCard({
    title,
    primaryIcon,
    details,
    dateRange
}: StatsCardProps) {
    const formatPercentage = (value: number) => {
        const sign = value >= 0 ? '+' : '-';
        return `${sign}${value.toFixed()}%`;
    };

    const getChangeColor = (value: number) => 
        value >= 0 ? 'text-green-500' : 'text-red-500';
    
    return (
        <div className='md:row-span-1 xl:row-span-2 bg-white col-span-1 shadow-md rounded-2xl flex flex-col justify-between'>
            {/* HEADER */}
            <div>
                <div className='flex justify-between items-center px-5 pt-4 pb-2'>
                    <h2 className='font-semibold text-lg text-gray-700'>{title}</h2>
                    <span className='text-xs text-gray-400'>{dateRange}</span>
                </div>
                <hr />
            </div>

            {/* BODY */}
            <div className='flex items-center justify-around gap-4 px-5'>
                <div className='rounded-full p-5 bg-blue-50 border-sky-300 border-[1px]'>
                    {primaryIcon}
                </div>
                <div className='flex-1'>
                    {details.map((detail, index) => (
                        <React.Fragment key={index}>
                            <div className='flex items-center justify-between my-4'>
                                <span className='text-gray-500'>{detail.title}</span>
                                <span className='font-bold text-gray-800'>{detail.amount}</span>
                                <div className='flex items-center'>
                                    <detail.IconComponent className={`w-4 h-4 mr-1 ${getChangeColor(detail.changePercentage)}`} />
                                    <span className={`font-medium ${getChangeColor(detail.changePercentage)}`}>
                                        {formatPercentage(detail.changePercentage)}
                                    </span>
                                </div>
                            </div>
                            {index < details.length - 1 && <hr />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}