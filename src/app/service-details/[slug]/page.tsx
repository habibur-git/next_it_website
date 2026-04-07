import ServiceDetails from "./ServiceDetails";

export interface ServiceDetailsPageProps {
    params: Promise<{ slug: string }>;
}

export default async function ServiceDetailsPage(props: ServiceDetailsPageProps) {
    const resolvedParams = await props.params;
    const { slug = "" } = resolvedParams;

    return (
        <ServiceDetails slug={slug} />
    );
}