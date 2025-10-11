import { Chip } from "@heroui/chip";
import { IconVideoCameraDuotone } from "@/components/Icons";
import React, { useMemo } from "react";

const CameraStatus: React.FC<{ status: string }> = ({status}) => {
    const statusInfo: {
        color: "success" | "danger" | "default" | "primary" | "warning" | "secondary" | undefined,
        text: string
    } = useMemo(() => {
        switch (status) {
            case 'active':
                return {color: 'success', text: 'Camera Active'};
            case 'inactive':
                return {color: 'danger', text: 'Camera Inactive'};
            case 'loading':
                return {color: 'default', text: 'Loading Camera'};
            case 'idle':
                return {color: 'primary', text: 'Camera Idle'};
            default:
                return {color: 'warning', text: 'Camera Status Unknown'};
        }
    }, [status]);

    return (
        <Chip
            variant='shadow'
            color={statusInfo.color}
            size='sm'
            startContent={<IconVideoCameraDuotone className='w-4 h-4 mx-2' />}
        >
            {statusInfo.text}
        </Chip>
    )
};

export default CameraStatus;