import CameraPreview from "@/components/CameraPreview.tsx";
import { Alert } from "@heroui/alert";
import { useState } from "react";
import { Button } from "@heroui/react";
import { IconLineLogin, IconLineLogout } from "@/components/Icons.tsx";
import { videoToBlob } from "@/lib/videoToBlob.ts";

const LoginForm = ({serverError}: { serverError?: string }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [alertInfo, setAlertInfo] = useState<{
        color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined,
        description: string;
    }>({
        color: 'default',
        description: '',
    });

    const handleSubmitAttendance = (isCheckIn = true) => {
        const videoElement = document.querySelector('video');
        if (!videoElement) {
            setAlertInfo({color: "danger", description: "Camera not found"});
            return;
        }

        setLoading(true);
        setAlertInfo({color: "default", description: "Processing..."});

        videoToBlob(videoElement).then(blob => {
            const storeIdFromUrl = new URLSearchParams(window.location.search).get('storeId')!;
            const formData = new FormData();
            const endpoint = isCheckIn ? "/api/auth/login" : "/api/auth/logout";

            formData.append('image', blob, 'image.png');
            formData.append('store_id', storeIdFromUrl);

            fetch(endpoint, {
                method: 'POST',
                body: formData,
            }).catch((err) => {
                console.error("Error in checking attendance: ", err);
                setAlertInfo({
                    color: "danger",
                    description: err.message ?? "An error occurred, please try again",
                });
            }).finally(() => setLoading(false));
        }).catch((err: Error) => {
            setAlertInfo({color: "danger", description: err.message ?? "Could not capture image. Please try refreshing the page."});
        }).finally(() => setLoading(false));
    };

    return (
        <>
            <div className='space-y-5'>
                <CameraPreview setAlertMessage={setAlertInfo} />
                <Alert
                    color={serverError ? 'danger' : alertInfo.color}
                    title={serverError ?? alertInfo.description}
                />

                <p className='w-full text-center text-small'>
                    NOTE: Only one person should be in the frame at a time.
                </p>
                <div className='flex w-full items-center justify-center gap-4'>
                    <Button
                        variant='solid'
                        color='primary'
                        size='lg'
                        startContent={<IconLineLogin />}
                        onPress={(_) => handleSubmitAttendance()}
                        isDisabled={loading || serverError != undefined}
                    >
                        Check In
                    </Button>
                    <Button
                        variant='bordered'
                        size='lg'
                        startContent={<IconLineLogout />}
                        onPress={(_) => handleSubmitAttendance(false)}
                        isDisabled={loading || serverError != undefined}
                    >
                        Check Out
                    </Button>
                </div>
            </div>
        </>
    );
}

export default LoginForm;
