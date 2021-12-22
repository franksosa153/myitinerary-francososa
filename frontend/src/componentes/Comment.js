import { useState, useRef, useEffect } from "react"
import {connect} from "react-redux"
import Swal from 'sweetalert2'

const Comment = (props) => {
    const [modifyComment, setModifyComment] = useState(false)
    const inputHandler = useRef()
    
    useEffect(() => {
        setModifyComment(false)
    }, [props.updateComment])

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
    console.log(props.newComment.userId)
    console.log(props.userId)
    console.log(props._id)

    const user = props.userId==props._id ||props.newComment.userId._id === props._id
    console.log(props.newComment.userId)
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
                        <img src="/assets/pencil.svg" alt="pencil" onClick={()=>setModifyComment(!modifyComment)} />
                        <img src="/assets/trash.svg" alt="trash" onClick={confirmDeletion}/>  
                    </div>

    const renderComment = user ? comment : <p>{props.newComment.comment}</p> 
    
    return (
        <>
            <div className="textArea"> 
            <div className="profilePic" style={{backgroundImage:`url("${props.newComment.userId.urlImage}")` }}> </div>
            <div>
                <h6>{props.newComment.userId.name}</h6>
                {renderComment}  
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