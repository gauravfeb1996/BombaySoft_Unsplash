import { useState, useEffect } from 'react';
import SearchBar from '../../Components/SeachBar/SearchBar';
import CustomPagination from '../../Components/Pagination/Pagination';
import GalleryArea from './components/GalleryArea';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { getImagesRequest } from '../../store/actions/getImages';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';


function Main({requestGetImages, images, history, location, totalResults, totalPages}) {

    const [selectedPage, setSelectedPageNo] = useState(1);
    const [query, setSearchQuery] = useState('');

    const updatePageURL = (page, key) => {
        let urlData=queryString.stringify({
            page: page,
            q: key? key: undefined,
        });
        history.push({
            search: urlData
        });
    }

    useEffect(() => {
        let urlValue = queryString.parse(location.search);
        let pageNo = urlValue.page? urlValue.page: 1;
        let key = urlValue.q? urlValue.q: '';
        setSelectedPageNo(pageNo);
        setSearchQuery(key);
        requestGetImages(pageNo, key);
        updatePageURL(pageNo, key);
    },[]);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    }

    const handleSearch = () => {
        updatePageURL(selectedPage, query);
        requestGetImages(selectedPage, query);
    }

    const handlePageClick = (data) => {
        setSelectedPageNo(data.selected+1);
        updatePageURL(data.selected+1, query);
        requestGetImages(data.selected+1, query);
    }

    return(
        <div>
            <SearchBar 
                value={query}
                handleInputChange={handleInputChange}
                handleSearch={handleSearch}
            />
            <Container>
                <GalleryArea 
                    images={images}
                />
                <Row>
                    <Col xs={12}>
                        <CustomPagination 
                            totalPages={totalPages}
                            selectedPage={selectedPage}
                            handlePageClick={handlePageClick}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const mapStateToProps = state => ({
    images: state.imagesStore.images,
    totalPages: state.imagesStore.totalPages,
    totalResults: state.imagesStore.totalImages,
});

const mapDispatchToProps = dispatch => ({
    requestGetImages: (pageNo, key) => dispatch(getImagesRequest(pageNo, key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));