import './Image.scss';
import LazyLoad from 'react-lazyload';

function CustomImage({image}) {
    return (
        <LazyLoad>
            <img 
                className='image'
                src={image.urls.full}
                alt={image.alt_description} 
            />
        </LazyLoad>
    );
}

export default CustomImage;