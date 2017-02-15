// Greeter.js
// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = "!!!SsssQQQ!";
//     return greet;
// };

// var config = require('./config.json');
//
// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = config.greetText;
//     return greet;
// };

//Greeter,js
import React, {Component} from 'react'
import config from './config.json';
import './main.less';
import Button from 'antd/lib/button';
import Radio from 'antd/lib/radio';
import Icon from 'antd/lib/icon';
import  Row from 'antd/lib/row';
import  Col from 'antd/lib/col';
import  Upload from 'antd/lib/upload';
import  Switch from 'antd/lib/switch';
import  TimePicker from 'antd/lib/time-picker';
import  BackTop from 'antd/lib/back-top';
import  Popconfirm from 'antd/lib/Popconfirm';
import  message from 'antd/lib/message';


import 'antd/dist/antd.css';
import  Tabs  from 'antd/lib/tabs';
class Greeter extends Component{
    render() {
        function onChange(checked) {
            console.log(`switch to ${checked}`);
            if(checked){
                console.log("1");
            }else {
                console.log("0");
            }
        };
        function onChanget(time, timeString) {
            console.log(time, timeString);
        };
        const props = {
            name: 'file',
            action: '/upload.do',
            headers: {
                authorization: 'authorization-text',
            },
            onChange2(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
        const TabPane = Tabs.TabPane;

        function callback(key) {
            console.log(key);
        };
        function confirm() {
            message.success('Click on Yes');
        }

        function cancel() {
            message.error('Click on No');
        }
        return (
         <div>
             <Switch defaultChecked={false} onChange={onChange} />
             <Switch checkedChildren={'开'} unCheckedChildren={'关'} />
             <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} />
             <Row>
                 <Col span={4} className="v">首页</Col>
                 <Col span={4}>导航</Col>
                 <Col span={4} className="v">数据</Col>
                 <Col span={4}>属性</Col>
                 <Col span={4} className="v">英文</Col>
                 <Col span={4}>语文</Col>
             </Row>
             <div>
                 <TimePicker onChange={onChanget} />
             </div>
             <div>
                 <Upload {...props}>
                     <Button>
                         <Icon type="upload" /> Click to Upload
                     </Button>
                 </Upload>
             </div>
             <div>
                 <BackTop />
                 Scroll down to see the bottom-right
                 <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
                 button.
             </div>
             <div>
                 <Tabs defaultActiveKey="1" onChange={callback}>
                     <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">Content of Tab Pane 1</TabPane>
                     <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                     <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                     <TabPane tab="Tab 4" key="4">Content of Tab Pane 4</TabPane>
                 </Tabs>
             </div>
             <div>
                 <Popconfirm title="Are you sure delete this task?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
                     <Button type="primary">Delete</Button>
                 </Popconfirm>
             </div>
         </div>
        )
    }
}

export default Greeter;