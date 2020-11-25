import './SearchBar.scss';

import ButtonCustom from '../Button/Button';
import InputArea from '../InputArea/InputArea';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SearchBar({value, handleInputChange, handleSearch}) {
    return (
        <>
            <Row className='search-bar-wrapper'>
                <Col xs={12} sm={12} md={8} >
                    <InputArea 
                        value={value}
                        onChange={handleInputChange}
                    />
                </Col>
                <Col xs={12} sm={12} md={3} lg={1}>
                    <ButtonCustom 
                        handleClick={handleSearch}
                        label='SEARCH'
                        disable={value && value.length<3}
                    />
                </Col>
            </Row>
        </>
    );
}

export default SearchBar;