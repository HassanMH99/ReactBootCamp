import React from "react"
import './App.css'
function Form(){
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", comments: "",age: ""}
    )
    
    console.log(formData.comments)
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })

    }
    function handleSubmit(event){
        event.preventDefault()
        console.log(formData);
    }
    return <form id="Form" action="" onSubmit={handleSubmit}>
       <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
             <select name="age"  onChange={handleChange} value={formData.age}>
                <option value="young">0-17</option>
                <option value="teneger">18-60</option>
                <option value="adults">60+</option>
                
            </select >
            
             <textarea 
             
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
            <button type="submit">Submit</button>
    </form>
}
export default Form;