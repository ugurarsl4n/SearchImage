import './App.css'
import { useState } from 'react'

function SearchHeader({search}) 
 {
    const [value, setValue] = useState("")
    const handleFormSubmit = (event)=>{
        event.preventDefault();
        search(value);
    }
    const updatedValue = (e)=>{
        setValue(e.target.value)
    }
    return (  
        <div className='header'>
            <form onSubmit={handleFormSubmit}>
                <label>Aramak istediğiniz ögeyi giriniz
                </label>
                <input 
                type="text"
                placeholder='Öge giriniz...' 
                value ={value} 
                onChange={updatedValue}
                />
            </form>
        </div>
    );
}
export default SearchHeader;
