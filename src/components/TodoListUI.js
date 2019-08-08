import React from "react";

import { Input, Button, List } from "antd";
import "antd/dist/antd.css";
import "./TodoList.css";

/**
 * 使用无状态组件
 * 没有state等其他属性, 不需要使用component，
 * 减少消耗，由一个匿名函数或者箭头函数组成
 * 在UI组件中，能使用无状态组件，尽量使用无状态组件
 */
const TodoListUI = (props) => {
  return (
    <div>
      <div>
        <Input
          placeholder={
            props.inputValue ? props.inputValue : "input..."
          }
          className="antd-width"
          onChange={props.changeInputValue}
          value={props.inputValue}
        />
        <Button type="primary" onClick={props.addItem}>
          增加
        </Button>
      </div>
      <div>
        <List
          className="antd-list"
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => {
              return props.delItem(index)
            }}>
              {item.address}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}




// class TodoListUI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <div>
//         <div>
//           <Input
//             placeholder={
//               this.props.inputValue ? this.props.inputValue : "input..."
//             }
//             className="antd-width"
//             onChange={this.props.changeInputValue}
//             value={this.props.inputValue}
//           />
//           <Button type="primary" onClick={this.props.addItem}>
//             增加
//           </Button>
//         </div>
//         <div>
//           <List
//             className="antd-list"
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item, index) => (
//               <List.Item onClick={() => {
//                 return this.props.delItem(index)
//               }}>
//                 {item}
//               </List.Item>
//             )}
//           />
//         </div>
//       </div>
//     );
//   }
// }

export default TodoListUI;
