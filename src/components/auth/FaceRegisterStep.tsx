import React, { type FC, useState } from "react";
import { Button } from "@heroui/react";
import { Alert } from "@heroui/alert";
import { $regCurrStep, $regData } from "@/lib/states";
import { ArrowLeftIcon } from "@heroui/shared-icons";
import CameraPreview from "@/components/CameraPreview";
import { videoToBlob } from "@/lib/videoToBlob.ts";
import { useStore } from "@nanostores/react";

const FaceRegisterStep: FC = () => {
    const [loading, setLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState<{
        color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined;
        description: string;
    } | null>(null);

    const regData = useStore($regData);

    const handleRegister = () => {
        const videoElement = document.querySelector('video');
        if (!videoElement) {
            setAlertMessage({color: "danger", description: "Camera not found"});
            return;
        }

        setLoading(true);
        setAlertMessage({color: "default", description: "Processing..."});

        videoToBlob(videoElement).then(blob => {
            const storeIdFromUrl = new URLSearchParams(window.location.search).get('storeId')!;
            const formData = new FormData();

            formData.append('image', blob, 'image.png');
            formData.append('storeId', storeIdFromUrl);
            formData.append('firstname', regData.firstname);
            formData.append('lastname', regData.lastname);
            formData.append('email', regData.email);
            formData.append('position', regData.position);
            formData.append('departmentId', regData.departmentId);
            formData.append('timeLogged', new Date().toISOString());

            fetch("/api/auth/register", {
                method: 'POST',
                body: formData,
            }).catch((err) => {
                console.error("Error in checking attendance: ", err);
                setAlertMessage({
                    color: "danger",
                    description: err.message ?? "An error occurred, please try again",
                });
            }).finally(() => setLoading(false));
        }).catch((err: Error) => {
            setAlertMessage({color: "danger", description: err.message ?? "Could not capture image. Please try refreshing the page."});
        }).finally(() => setLoading(false));
    };

    return (
        <div className='flex flex-col gap-4'>
            <CameraPreview setAlertMessage={setAlertMessage} />

            {alertMessage && (
                <Alert
                    color={alertMessage.color}
                    variant='faded'
                    title={alertMessage.description}
                />
            )}

            <div className='flex gap-2'>
                <Button
                    color='default'
                    variant='bordered'
                    onPress={() => $regCurrStep.set(0)}
                    startContent={<ArrowLeftIcon />}
                    className='flex-1'
                    isDisabled={loading}
                >
                    Back
                </Button>
                <Button
                    color='primary'
                    onPress={handleRegister}
                    className='flex-1'
                    isLoading={loading}
                >
                    Register Face
                </Button>
            </div>
        </div>
    );
};

export default FaceRegisterStep;

