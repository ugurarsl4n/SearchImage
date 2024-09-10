import '../App.css'
function ImageItem({image}){
    return ( 
        <div >
            <img src={image.urls.small} className='altimages' alt="" />
        </div>
     );
}

export default ImageItem;