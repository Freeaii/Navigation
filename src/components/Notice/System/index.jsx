import React from 'react';
import './index.css'
import CommunitySystemShow from "./Show";
function NoticeSystem(props) {
    let massages={
        news:[
            {},
            {},
            {},
        ],
        old:[
            {},
            {},
            {},
            {},
            {},
            {},
        ]
    }
    return (
        <div id="notice-system">
            <div className="notice-system-new">
                {
                    massages.news?`新增${massages.news.length}条系统通知`:"暂无新增系统消息"
                }
            </div>
            <CommunitySystemShow massages={massages.news}/>
            <div className="notice-system-divider">
                <span className="notice-system-line"/>
                <p className="notice-system-remind">以下是历史消息</p>
                <span className="notice-system-line"/>
            </div>
            <CommunitySystemShow massages={massages.old}/>
            <div className="notice-system-nomore">
                没有更多了
            </div>
        </div>
    );
}

export default NoticeSystem;
