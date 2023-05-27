import axios from "axios";
const baseUrl = "http://localhost:3001";

const getAllNotes = (setNote) =>{
    axios
    .get(baseUrl)
    .then(({data}) =>{
        console.log(data, "<--- Data from API")
        setNote(data)
    })
    .catch((err) =>{
        console.log(err, "<---- Error with fetching getAllNotes");
    })

    // .then({data}) =>{
    //     console.log(data, "<--- Data from API")
    //     setNote(data)
    // };
}

export {getAllNotes};