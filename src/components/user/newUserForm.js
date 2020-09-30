import React, { useState } from "react";


// //add import for storage
const NewUserForm = (props) => {
    const [image, setImage] = useState("");
    // const [imageAsUrl, setImageAsUrl] = useState('');
    const [loading, setLoading] = useState(false)


    // const handleChange = (e) => {
    //     if (e.target.files[0]) {
    //         setImage(e.target.files[0]);
    //     }
    // };
    // console.log(image)

    const handleUpload = async e => {
        let files = e.target.files
        let data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'showcaseApp')
        console.log(data)
        setLoading(true)
        let response = await fetch('https://api.cloudinary.com/v1_1/mreeds123/image/upload',
        {
            method: "POST",
            body: data
        })
        let file = await response.json()
        console.log(file)
        setImage(file.secure_url)
        setLoading(false)
    };




    return (
        <div>
            <form>
                <input type="file" onChange={handleUpload} />
                <input type="file" onChange={handleUpload} />
                <input type="file" onChange={handleUpload} />
                {
                    loading ? (
                        <h3>
                            Loading...
                        </h3>
                    ) : (
                            <img src={image} style={{ width: '300px' }} />
                        )
                }
            </form>
        </div>
    );
};
export default NewUserForm;
