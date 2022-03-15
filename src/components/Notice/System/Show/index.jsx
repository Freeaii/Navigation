import React from 'react';
import './index.css'
function CommunitySystemShow(props) {
    return (
        <ul id="notice-system-show">
            {
                props.massages.map((item,index)=>{
                    return (
                        <li className="notice-system-old" key={index}>
                            <img src="http://localhost/static/avatars/poison.png" alt=""/>
                            <div className="notice-system-info">
                                <div className="notice-system-username">
                                    Poison
                                </div>
                                <div className="notice-system-note">
                                    亲爱的作者您好，欢迎加入iFree，您是我们平台的第99999名用户，测试阶段我也不知道要说什么，所以想到什么就说什么，现在我说完了！
                                </div>
                                <div className="notice-system-time">
                                    2021-12-22 17:11
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default CommunitySystemShow;
