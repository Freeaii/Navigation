import React, {useState} from 'react';
import './index.css'
function Settings(props) {
    let [setting,setSetting]=useState("个人信息")
    let menu=[
        {
            name:"个人信息"
        },
        {
            name:"隐私设置"
        },
        {
            name:'账号安全'
        },
        {
            name:"个人认证"
        },
        {
            name:"消息通知"
        },
        {
            name:'辅助功能'
        },
        {
            name:"API管理"
        },
    ]

    //切换设置选中
    function changeSetting(name) {
        setSetting(name)
    }
    return (
        <div id="navigation-setting">
            <div className="navigation-setting-header">
                <div className="navigation-setting-title">
                    个人设置
                </div>
                <ul className="navigation-setting-menu">
                    {
                        menu.map((item,index)=>{
                            return(
                                <li  className={setting===item.name?"navigation-li-choose":"cursor"} key={index} onClick={()=>changeSetting(item.name)}>
                                    <span>{item.name}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="navigation-setting-body">

            </div>
        </div>
    );
}

export default Settings;
