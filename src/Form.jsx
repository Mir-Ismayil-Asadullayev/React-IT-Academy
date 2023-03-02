import React, { useState } from 'react';
import './Form.css'

function Form() {
    const data = new FormData();
    const [info, setinfo] = useState(data);
    const handleInfo = (e) => {
        switch (e.target.name) {
            case "name":
                info.append('name', e.target.value);
                break;
            case "surname":
                info.append('surname', e.target.value);
                break;
            case "email":
                info.append('email', e.target.value);
                break;
            case "phone":
                info.append('phone', e.target.value);
                break;
            case "comment":
                info.append('comment', e.target.value);
                break;
            default:
                break;
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setinfo(info);
        console.log(info);
        alert("Карточка зарегистрирована!");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" required={true} onChange={handleInfo} />
            <label htmlFor="surname">Surname:</label>
            <input type="text" name="surname" required={true} onChange={handleInfo} />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" required={true} onChange={handleInfo} />
            <label htmlFor="phone">Phone:</label>
            <input type="number" placeholder="+" name="phone" required={true} onChange={handleInfo} />
            <label htmlFor="textarea">Comment:</label>
            <textarea name="comment" cols="30" rows="10" placeholder="Please type your comment..." required={true} onChange={handleInfo}></textarea>
            <button type='submit'>Post</button>
        </form>
    )
}

export default Form;
