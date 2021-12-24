import { useState, useRef, useEffect,  } from "react"
import { useParams } from 'react-router';
import {connect} from "react-redux"
import Swal from 'sweetalert2'
import Editing from '../assets/editing.png'
import Delete from '../assets/delete.png'
const Comment = (props) => {
    const [modifyComment, setModifyComment] = useState(false)
    const inputHandler = useRef()
    let { id } = useParams();
    useEffect(() => {
        setModifyComment(false)
    }, [props.updateComment])
    useEffect(()=>{
        if(props.token){
            if(props._id==null){
                window.location.reload()
            }
        }
    },[])

    const confirmDeletion = () => {
        Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        props.delete(props.itineraryId, props.newComment._id, props.token)
          Swal.fire(
            'Deleted!',
            'Your comment has been deleted.',
            'success'
          )
        }
      })
    }
    const img=props.newComment.userId._id ?props.newComment.userId.urlImage:props.dataComment.urlImage
    const user = props.newComment.user==props._id && props.token
    const text=props.newComment.userId._id ?props.newComment.userId.name:props.dataComment.name
    console.log(props.newComment.user)
    console.log(props._id)
    const comment = <div className="textArea">
                        <div>
                            {!modifyComment 
                            ? <p>{props.newComment.comment}</p>
                            :<>
                                <input type="text" defaultValue={props.newComment.comment} ref={inputHandler}/>
                                <img src="/assets/check.svg" alt="send" onClick={()=>props.edit(props.newComment._id, inputHandler.current.value, props.token)}/>
                            </>
                            }
                        </div>
                         
                    </div>

    const renderComment = user ? comment : <p>{props.newComment.comment}</p> 
    console.log(props.newComment)
    
    return (
        <>
        <div className="textArea">
            <div className="textArea"> 
            <div className="profilePic" style={{backgroundImage:`url("${img}")` }}> </div>
            <div>
                <h6>{text}</h6>
                
                {!modifyComment 
                            ? <p>{props.newComment.comment}</p>
                            :<>
                                <input type="text" defaultValue={props.newComment.comment} ref={inputHandler}/>
                                <img src="/assets/check.svg" alt="send" onClick={()=>props.edit(props.newComment._id, inputHandler.current.value, props.token)}/>
                            </>
                            }
                {props.newComment.user===props._id ? <img className="pencil" src={Editing} alt="pencil" onClick={()=>setModifyComment(!modifyComment)} /> :null}
                {props.newComment.user===props._id ? <img className="pencil" src={Delete} alt="trash" onClick={confirmDeletion}/> :null}
            </div>
            </div> 
            </div>  
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        token:state.authReducer.token,
        _id: state.authReducer._id
    }
}

export default connect(mapStateToProps)(Comment)