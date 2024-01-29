import React, {Component} from "react";
import Notion from "./Notion";

const reserveNotion = [
    {message : "일정 알림"},
    {message : "점심식사 시간입니다."},
    {message : "곧 회의 시작 시간입니다."},
    {message : "주간 보고 작성 시간입니다"},
    {message : "퇴근시간입니다. 수고하셨습니다."},
]

let timer;

class NotionList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications : [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(()=> {
            if (notifications.length < reserveNotion.length) {
                const index = notifications.length;
                notifications.push(reserveNotion[index]);
                this.setState({
                    notifications : notifications
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notion message = {notification.message} />
                })}
            </div>
        );
    }
}

export default NotionList;