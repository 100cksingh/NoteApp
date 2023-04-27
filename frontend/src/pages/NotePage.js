import React,{useState,useEffect} from 'react'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import {useParams,useNavigate  } from 'react-router-dom'

const NotePage = () => {
  const { noteId } = useParams();
  // let noteId=match.params.id;
  const navigate = useNavigate();
  let [note,setNote]=useState(null)

  useEffect(()=>{
    let getNote=async()=>{
      if(noteId==='new') return 
      let response=await fetch(`/api/notes/${noteId}/`)
      let data=await response.json();
      setNote(data)
  }
        getNote()
  }, [noteId])


  let createNote= async()=>{
    fetch(`/api/notes/create`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(note)
    })
  }

 let updateNote=async()=>{
    fetch(`/api/notes/${noteId}/`,{
      method:"PUT",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(note)
    })
  }


  let deleteNote=async()=>{
    fetch(`/api/notes/${noteId}/`,{
      method:"DELETE",
      headers:{
        'Content-Type':'application/json'
      }
    })
     //history.push('/') //fix this error
     navigate("/");
  }

  let handleSubmit = () => {
    console.log('NOTE:', note)
    if (noteId !== 'new' && note.body === '') {
        deleteNote()
    } else if (noteId !== 'new') {
        updateNote()
    } else if (noteId === 'new' && note.body !== null) {
        createNote()
    }
   navigate("/");
}


  //  let handleSubmit=()=>{
  //   // eslint-disable-next-line eqeqeq
  //   if(noteId!=='new' && note!=null){
  //     deleteNote()
  //   }else  if(noteId!=='new'){
  //     updateNote()
  //   // eslint-disable-next-line eqeqeq
  //   }else if(noteId =='new' && note!==null){
  //     createNote()
  //   }
  //  // history.push('/') //fix this bug
  //  navigate("/");
  // }

  
  let handleChange = (value) => {
    setNote(note => ({ ...note, 'body': value }))
    console.log('Handle Change:', note)
}

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit}/>
          </h3>
          {noteId!=='new' ?(
            <button onClick={deleteNote}>Delete</button>
          ):(
            <button onClick={handleSubmit}> Done</button>
          )}
      </div>
    <textarea onChange={(e) => { handleChange(e.target.value) }} value={note?.body}></textarea>
    </div>
  )
}

export default NotePage