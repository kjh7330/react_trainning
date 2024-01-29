import React from "react";
import Comment from "./Commnet";

const comments = [
    {name : "김주한", comment : "안녕하세요"},
    {name : "김혜지", comment : "오늘은 카톡하지마"},
    {name : "신재구", comment : "이충호 네 이놈!!"},
    {name : "김민주", comment : "충호야 그건 좀 아니지...;;"},
    {name : "김아름", comment : "즤엔장"},
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment)=> {
                return (
                    <Comment name = {comment.name} comment={comment.comment}/>
                )
            })}
        </div>
    )
}

export default CommentList;