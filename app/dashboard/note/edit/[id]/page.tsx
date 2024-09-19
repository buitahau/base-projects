'use client';

import Breadcrumb from "@/components/ui/dashboard/Breadcrumb/Breadcrumb";
import { useSearchParams } from "next/navigation";

const EditNote = ({ params }: { params: { id: string} }) => {
    const searchParams = useSearchParams();
    const colorValue = searchParams.get('color') ?? "red";
    return (
        <>
        <Breadcrumb pageName="Notes" />
        <h3>Edit note with {params.id} and color {colorValue}</h3>
        </>
    );
}

export default EditNote;