export const videoToBlob = async (videoElement: HTMLVideoElement) => {
    const canvas = document.createElement('canvas');

    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;

    const ctx = canvas.getContext('2d');

    if (!ctx) {
        throw new Error('Could not get canvas context.');
    }

    ctx.drawImage(videoElement, 0, 0);

    return new Promise<Blob>((resolve, reject) => {
        canvas.toBlob(blob => {
            if (!blob) {
                reject(new Error('Could not capture image blob.'));
                return;
            }
            resolve(blob);
        }, 'image/jpeg');
    });
}