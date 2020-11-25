import './Button.scss';
import { Button } from 'react-bootstrap';

function ButtonCustom ({handleClick, label, disable}) {
    return(
        <Button 
            variant="outline-success"
            className="button"
            onClick={handleClick}
            disabled={disable}
        >
            {label}
        </Button>
    );
}

export default ButtonCustom;