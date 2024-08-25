import { useEffect, useState } from "react";

function UploadImage() {
    const [show, setShow] = useState(false)
    const [image, setImage] = useState()

    useEffect(() => {
        return () =>
            image && URL.revokeObjectURL(image.preview)
    }, [image])

    const handleReviewImage = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setImage(file)
    }

    return (
        <div className="container w-full m-auto py-10">
            <div className="w-full m-auto">
                <button
                    className="border border-red-500 bg-black text-white w-20 h-10"
                    onClick={() => setShow(!show)}
                >
                    Toggle
                </button>
            </div>
            {show && (
                <div className="w-full m-auto my-5">
                    <h1 className="text-2xl text-red-500">Upload Image</h1>
                    <div className="w-6/12 m-auto">
                        <input
                            type="file"
                            onChange={handleReviewImage}
                            className="border border-green-200 bg-gray-400 text-white"
                        />
                    </div>
                    {image && (
                        <div className="w-6/12 m-auto">
                            <img src={image.preview} alt="Éo có hình j nha" />
                        </div>
                    )}
                </div>

            )}
        </div >
    )
}
export default UploadImage;