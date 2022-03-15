import React, {useState} from 'react';
import {Routes, Route, Navigate, Link} from 'react-router-dom'
import './index.css'
import NoticeSystem from "./System";
import NoticeFans from "./Fans";
import NoticeLetter from "./Letter";
import NoticeLook from "./Look";
import NoticeAnswers from "./Answers";
import NoticeLikes from "./Likes";
import NoticeComments from "./Comments";
function Notice(props) {
    let menu=[
        {
            name:"系统通知",
            path:'/notice/system'
        },
        {
            name:"评论",
            path:'/notice/comments'
        },
        {
            name:'粉丝',
            path:'/notice/fans'
        },
        {
            name:"点赞",
            path:'/notice/likes'
        },
        {
            name:"@我",
            path:'/notice/look'
        },
        {
            name:'私信',
            path:'/notice/letter'
        },
        {
            name:"问答邀请",
            path:'/notice/questions'
        },
    ]
    let [notice,setNotice]=useState(menu[0].name)
    //切换设置选中
    function changeNotice(name) {
        setNotice(name)
    }
    return (
        <div id="notice">
            <div className="notice-header">
                <div className="notice-title">
                    消息中心
                </div>
                <ul className="notice-menu">
                    {
                        menu.map((item,index)=>{
                            return(
                                <li  className={notice===item.name?"notice-choose":"cursor"} onClick={()=>changeNotice(item.name)} key={index}>
                                    <Link to={item.path}>
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="Notice-body">
                <Routes>
                    <Route path="/system" element={<NoticeSystem/>}/>
                    <Route path="/fans" element={<NoticeFans/>}/>
                    <Route path="/look" element={<NoticeLook/>}/>
                    <Route path="/letter" element={<NoticeLetter/>}/>
                    <Route path="/questions" element={<NoticeAnswers/>}/>
                    <Route path="/likes" element={<NoticeLikes/>}/>
                    <Route path="/comments" element={<NoticeComments/>}/>
                    <Route path="*" element={<Navigate to='/notice/system'/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Notice;
