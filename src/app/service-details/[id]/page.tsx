import { PageParamsProps } from "@/types/custom-d-t";
import ServiceDetails from "./ServiceDetails";

export default async function ServiceDetailsPage(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;

    return (
        <ServiceDetails id={id as string} />
    );
}