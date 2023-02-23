import React, { useState } from 'react';
import './Form.css'

function Form() {
    const [info, setinfo] = useState({});
    const handleInfo = (e) => {
        switch (e.target.name) {
            case "fullname":
                info.fullname = e.target.value;
                break;
            case "passportID":
                info.passportID = e.target.value;
                break;
            case "gender":
                info.gender = e.target.value;
                break;
            case "age":
                info.age = e.target.value;
                break;
            case "email":
                info.email = e.target.value;
                break;
            case "phone":
                info.phone = e.target.value;
                break;
            case "textarea":
                info.textarea = e.target.value;
                break;
            default:
                break;
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        info.checkbox = e.target.childNodes[14].childNodes[1].checked;
        setinfo(info);
        console.log(info);
        alert("Карточка зарегистрирована!");
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Fullname:</label>
            <input type="text" name="fullname" required={true} onChange={handleInfo} />
            <label htmlFor="passportID">Passport ID:</label>
            <input type="text" name="passportID" placeholder="AZE" required={true} onChange={handleInfo} />
            <label htmlFor="gender">Gender:</label>
            <select name="gender" onChange={handleInfo}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <label htmlFor="age">Age:</label>
            <input type="number" min="1" max="120" name="age" onChange={handleInfo} />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" onChange={handleInfo} />
            <label htmlFor="phone">Phone:</label>
            <input type="number" placeholder="+" name="phone" onChange={handleInfo} />
            <label htmlFor="textarea">Symptoms description:</label>
            <textarea name="textarea" cols="30" rows="10" placeholder="Please type your symptoms..." onChange={handleInfo}></textarea>
            <label htmlFor="checkbox">Repeated reception:<input type="checkbox" name="checkbox" /></label>
            <button>Send</button>
        </form>
    )
}

export default Form;
