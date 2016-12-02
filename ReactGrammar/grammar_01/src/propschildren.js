'use strict';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class NodeList extends Component{
    render(){
     return(
      <ul>
        {
        //遍历this.props.children节点
        React.Children.map(this.props.children,function(child){
            return (<li>{child}</li>);
            })
        }
     </ul>
    );
}
}

ReactDOM.render(
<NodeList>
    <span>hello</span>
    <span>world</span>
</NodeList>,
document.getElementById('app')
);

// 传入了一组dom节点，在this.props.children这个属性中可获取到，
// 然后用React.Children.map方法遍历即可。