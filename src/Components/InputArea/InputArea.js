import './InputArea.scss'

function InputArea ({value, onChange}) {
    return(
        <input 
            value={value}
            placeholder='Search'
            className='input'
            onChange={onChange}
        />
    );
}

export default InputArea;