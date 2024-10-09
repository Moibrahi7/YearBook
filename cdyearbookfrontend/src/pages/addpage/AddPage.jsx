import './AddPage.css'
import { useState } from 'react';
import data from "../../resources/yearEntries.json"
import { useParams } from "react-router-dom";

function findCohortById(cohort) {
    return data.find(co => co.cohort === cohort);
}

export default function AddPage() {

    let { cohort } = useParams()
    const coData = findCohortById(cohort)
    const [name, setName] = useState("");
    const [quote, setquote] = useState("");
    const [img, setImg] = useState("");

    let inStyle = {
        borderColor: ""
    }
    // const clearFields = () => {
    //     setName("");
    //     setquote("");
    // }

    return (
        <>
        <div className="add-form">
            <h1>Add Grad</h1>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <br/>
                    <input type="text" id ='name-field' className='form-control' style={inStyle} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>quote</label>
                    <br/>
                    <input type="text" id='quote-field' className='form-control' style={inStyle} onChange={(e) => setquote(e.target.value)}/>
                </div>
            </form>
            <button type="submit" className="btn" onClick={() => {
                if (!name || !quote) {
                    alert("Please fill out all fields");
                    return;
                }
                data.find(co => co.cohort === cohort).entries.push({name, quote, img: getImg(img), entryNum: data.find(co => co.cohort === cohort).entries.length + 1} 
                )}}>Submit</button>
            <br/>
        </div>
        </>
    )
}

function getImg (img) {
    if (img === "") {
        return ("nopic.png");
    }
    return img
}

function writeToFile(name, quote, img, entryNum) {
    // TODO: write data to file
    console.log(name, quote, img, entryNum)
    
}