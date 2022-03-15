import React,{useState} from 'react';
import {Link} from "react-router-dom";
import './index.css';
function Menu(props) {
    let [selected,setSelected]=useState(window.location.pathname)
    let menu=[
        {
            name:'首页',
            iconfont:'&#xe6b8;',
            path:'/',
        },
        {
            name:'语言分类',
            iconfont:'&#xe600;',
            path:'/language',
            children:[]
        },
        {
            name:'知识解析',
            iconfont:'&#xe813;',
            path:'/knowledge',
            children:[]
        },
        {
            name:'前沿技术',
            iconfont:'&#xe627;',
            path:'/technology',
            children: []
        },
        {
            name:'学习分享',
            iconfont:'&#xe86e;',
            path:'/share',
            children: []
        },
        {
            name:'排行榜',
            iconfont:'&#xe8b3;',
            path:'/rank',
        }
    ]
    let settings=[
        {
            name:'消息',
            iconfont:'&#xe759;',
            path:'/notice',
        },
        {
            name:'设置',
            iconfont:'&#xe68f;',
            path:'/setting',
        },
    ]
    //修改选中
    function changeSelected(name) {
        setSelected(name)
    }
    return (
        <nav id="menu">
            <div className="logo">
                <Link to='/' target="_blank">iFree.</Link>
            </div>
            <div className="nav-menu">
                <ul className="menu-normal">
                    {
                        menu.map((item,index)=>{
                            return(
                                <Link to={item.path} key={index}>
                                    <li className={item.path===selected?"bg-white":""} onClick={()=>changeSelected(item.path)}>
                                        <div className="normal-l">
                                            <i className="iconfont" dangerouslySetInnerHTML={{__html:item.iconfont}}/>
                                            <span>{item.name}</span>
                                        </div>
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ul>
                <div className="menu-privacy">
                    <ul className="menu-setting">
                        {
                            settings.map((item,index)=>{
                                return(
                                   <Link to={item.path} key={index} >
                                       <li className={item.path===selected?"bg-white":""} onClick={()=>setSelected(item.path)}>
                                           <i className="iconfont" dangerouslySetInnerHTML={{__html:item.iconfont}}/>
                                           <span>{item.name}</span>
                                       </li>
                                   </Link>
                                )
                            })
                        }
                    </ul>
                    <div className="menu-user">
                        <div className="user-info">
                            <img src="http://localhost/static/avatars/poison.png" alt=""/>
                            <div className="user-name">
                                <span>Poison</span>
                                <span>1374977935@qq.com</span>
                            </div>
                        </div>
                        <div className="user-exit">
                            <i className="iconfont user-iconfont">&#xe64b;</i>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
