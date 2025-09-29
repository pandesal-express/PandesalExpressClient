import CameraPreview from "@/components/CameraPreview";
import { Alert } from "@heroui/alert";
import { useState } from "react";
import { Button } from "@heroui/react";
import { IconLineLogin, IconLineLogout } from "@/components/Icons";

const CameraComponent = ({serverError}: { serverError?: string }) => {
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

        const canvas = document.createElement('canvas');
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            setAlertInfo({color: "danger", description: "Could not get canvas context."});
            return;
        }
        ctx.drawImage(videoElement, 0, 0);

        setLoading(true);
        setAlertInfo({color: "default", description: "Processing..."});

        const storeIdFromUrl = new URLSearchParams(window.location.search).get('storeId');

        canvas.toBlob((blob) => {
            if (!blob) {
                setAlertInfo({color: "danger", description: "Could not capture image, Please try refereshing the page."});
                setLoading(false);
                return;
            }

            const formData = new FormData();
            formData.append('image', blob, 'image.png');
            formData.append('isCheckIn', isCheckIn ? 'true' : 'false');

            if (storeIdFromUrl) {
                formData.append('storeId', storeIdFromUrl);
            }

            console.log("FormData to be sent to Astro API route:");
            for (const [key, value] of formData.entries()) {
                console.log(key, value);
            }

            fetch("/api/check-attendance", {
                method: 'POST',
                body: formData,
            }).then(async (response) => {
                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({message: `HTTP error! Status: ${response.status}`}));
                    throw new Error(errorData.message ?? "An error occurred, please try again");
                }

                console.log("Response from Astro API route:", response);

                window.location.href = `/stores/${storeIdFromUrl}`;
            }).catch((err) => {
                console.error("Error in checking attendance: ", err);
                setAlertInfo({
                    color: "danger",
                    description: err.message ?? "An error occurred, please try again",
                });
            }).finally(() => setLoading(false));

        }, 'image/png');
    };

    return (
        <>
            <p className='text-body font-body text-subtext-color mb-7'>
                Please look at the camera and click check in/out to record your attendance
            </p>

            <div className='space-y-7'>
                <CameraPreview setAlertMessage={setAlertInfo} />
                <Alert
                    color={serverError ? 'danger' : alertInfo.color}
                    description={serverError ?? alertInfo.description}
                />

                <div className='flex w-full items-center justify-center gap-4'>
                    <Button
                        variant='solid'
                        color='primary'
                        startContent={<IconLineLogin />}
                        onPress={(_) => handleSubmitAttendance()}
                        isDisabled={loading || serverError != undefined}
                    >
                        Check In
                    </Button>
                    <Button
                        variant='solid'
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

export default CameraComponent;
