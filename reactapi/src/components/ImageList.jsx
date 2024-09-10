import ImageItem from "./ImageItem";

function ImageList({images}) {
    return ( 
    <div className="images">
        {images.map((image,index)=>{
            return <ImageItem key={index} image={image}/>
        })}
    </div> 
    );
}

export default ImageList;