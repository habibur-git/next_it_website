import { blog_data } from '@/data/blog-data';
import BlogDetailsMain from '@/pages/blog/blog-details';
import { PageParamsProps } from '@/types/custom-d-t';
import React from 'react';
import PortfolioDetails from './PortfolioDetails';

export default async function BlogDetailsPage(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;

    return (
        <PortfolioDetails id={id as string} />
    );
}


