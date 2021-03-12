import { useDropzone } from 'react-dropzone';

function useS3Upload({
  presignedUploadUrl,
  onUploadStart,
  onUploadReady,
  onError,
}) {
  async function handleDrop([pendingImage]) {
    // Let the caller know that a file has been selected and a fetch is beginning.
    onUploadStart();

    // Upload the image to our pre-signed URL.
    const response = await fetch(
      new Request(presignedUploadUrl, {
        method: 'PUT',
        body: pendingImage,
        headers: new Headers({
          'Content-Type': 'image/*',
        }),
      }),
    );
    if (response.status !== 200) {
      // The upload failed, so let's notify the caller.
      onError();
      return;
    }
    // Let the caller know that the upload is done, so that it can send the URL
    // to the backend again, persisting it to the database.
    onUploadReady();
  }

  return useDropzone({
    accept: 'image/*',
    disabled: typeof presignedUploadUrl !== 'string',
    handleDrop,
  });
}


function ImageUpload({
    children,
    presignedUploadUrl,
    // other props here
  }) {
    const { getRootProps, getInputProps } = useS3Upload({
      presignedUploadUrl,
      // callbacks here
    });
    
    return (
        <>
        <div>hihello</div>
      <div {...getRootProps()}>
        {children}
        <input {...getInputProps()} />
      </div>
      </>
    );
  }

  export default ImageUpload;