import React, { useState, useEffect} from 'react';
import { GetRequest } from '../services/Api';

function Main() {

    const [writers, setwriters] = useState([])  
    const [books, setbooks] = useState([])  
    const [BookName, setBookName] = useState("")  
    const [WriterID, setWriterID] = useState(0)  
    const [Pages, setPages] = useState(0)  
    const [Price, setPrice] = useState(0)  
    
    const [WriterName, setWriterName] = useState("")  
    // const [WriterLastName, setWriterLastName] = useState("")  
    useEffect(() => {
        GetAllWriters()
        GetAllBooks()
    }, []);

    const GetAllWriters = async()=>{
        let writers =  await GetRequest('GetAllWriters')
        setwriters(writers)
        console.log("Writers : " , writers)
    }
    const GetAllBooks = async()=>{
        let books =  await GetRequest('GetAllBooks')
        setbooks(books)
        console.log("Books : " , books)
    }
    const onSubmitBook = async()=>{
        
        console.log(BookName , WriterID , Pages , Price)
        if(BookName == "" || WriterID == 0 || Pages <= 0 || Price <= 0){
            alert("פרטים שגויים")
            return;
        }
        
        let res = await GetRequest(`InsertBook?BookName=${BookName}&WriterID=${WriterID}&Pages=${Pages}&Price=${Price}`)
        setBookName("")
        setWriterID(0);
        setPages(0);
        setPrice(0);
        GetAllBooks()
        console.log("RESULT : " , res)
    }
    const onSubmitWriter = async()=>{
        console.log(WriterName)
        if(WriterName == ""){
            alert("נא למלא את כל הפרטים")
            return;
        }
        let res = await GetRequest(`InsertWriter?WriterName=${WriterName}`)
        setWriterName("")
        // GetAllBooks()
        console.log("RESULT : " , res)
    }
    const DeleteTask = async(BookId)=>{
    let deleteTask =  await GetRequest(`DeleteBook?BookID=${BookId}`)
    console.log("DELETE : " , deleteTask)
    GetAllBooks()
    }
    const FindWriter = (writerId)=>{
            let writer = writers.find(writer=>
                writer.WriterID == writerId
            )
    let u = writer.WriterName
    return u
    }
return (
    <div> 
        <h1> Book Store </h1>
        <img src="photo.jpg"/>
    <div className='row p-5'>
        <div className='col-6'>
        <form>
        <div className="form-group">
        <h3> Enter Book </h3>
        <select className="form-control" onChange={(e)=>setWriterID(e.target.value)}>
                        <option value="0"> Choose Writer  </option>
                        { 
                        writers.map(writer=> 
                            <option key={writer.WriterID} value={writer.WriterID}> {writer.WriterName} </option>
                        ) 
                        }
                    </select>
            <input type="text" className="form-control m-2" onChange={(e)=>setBookName(e.target.value)} placeholder="Book Name"/>
            <input type="text" className="form-control m-2" onChange={(e)=>setPrice(e.target.value)} placeholder="Book Price"/>
            <input type="text" className="form-control m-2" onChange={(e)=>setPages(e.target.value)} placeholder="Pages"/>
        </div>
            <button type="submit" className="btn btn-primary" onClick={()=>onSubmitBook()}>Submit Book</button>
        </form>
        </div>
        <div className='col-6'>
        <form>
        <div className="form-group">
        <h3> Enter Writer </h3>
            <input type="text" className="form-control m-2" onChange={(e)=>setWriterName(e.target.value)} placeholder="Writer Full Name"/>
        </div>
            <button type="submit" className="btn btn-primary" onClick={()=>onSubmitWriter()}>Submit Writer</button>
        </form>
        </div>
</div>
<div>
        <table className="table">
        <thead>
            <tr>
                <th scope="col">Book Name</th>
                <th scope="col">Writer</th>
                <th scope="col">Pages</th>
                <th scope="col">Price</th>
                <th scope="col">Remove</th>
            </tr>
        </thead>
        <tbody>
        {
        books.map(book=> 
            <tr key={book.BookID}>
                <th scope="row">{book.BookName}</th>
                <td>{FindWriter(book.WriterID)}</td>
                <td>{book.Pages}</td>
                <td>{book.Price}</td>
                <td><button type="submit" className="btn btn-primary" onClick={()=>DeleteTask(book.BookID)}>Delete</button></td>
            </tr>
        ) 
        }
        </tbody>
        </table>
    </div>
</div>
)
}

export default Main