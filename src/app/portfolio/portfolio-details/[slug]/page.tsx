import PortfolioDetails from './PortfolioDetails';

interface BlogDetailsPageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogDetailsPage(props: BlogDetailsPageProps) {
    const resolvedParams = await props.params;
    const { slug = "" } = resolvedParams;

    return (
        <PortfolioDetails slug={slug} />
    );
}


