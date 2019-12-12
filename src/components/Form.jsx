import React, {useState} from 'react';

export const Form = ({handleSubmitForm}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleChangeName = (e) => {
        setName(e.target.value); 
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value); 
    }

    const handleClicBuy = (e) => {
        e.preventDefault();
        handleSubmitForm({name, email })
    }

    return (
        <form action="">
            <div className="Form-Row">
                <label className="Form-Label" htmlFor="name">Name</label>
                <input 
                    className="Form-InputText"
                    type="text" 
                    value={name}
                    name="name"
                    onChange= {handleChangeName} />
            </div>
            <div className="Form-Row">
                <label className="Form-Label" htmlFor="email">Email</label>
                <input 
                    className="Form-InputText"
                    type="text" 
                    value={email} 
                    name="email"
                    onChange= {handleChangeEmail}
                    />
            </div>
            <div>
                <button 
                    className="Movie-ByTiket" 
                    disabled = {!name && !email}
                    onClick={handleClicBuy}
                >Купить</button>
            </div>
        </form>
    )
}