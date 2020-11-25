import CustomImage from '../../../Components/Image/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GalleryArea({images}) {
    return (
        <>
            <Row>
                {images.map((image) => (
                    <Col xs={12} md={6} key={image.id}>
                        <CustomImage 
                            image={image}
                        />
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default GalleryArea;