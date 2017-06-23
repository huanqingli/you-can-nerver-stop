import React from 'react'
import ReactDOM from 'react-dom'

class Container extends React.Component{
  constructor(props){
    super(props)
    this.state={data:props.data}
    this.click=this.click.bind(this)
  }
  click(n) {
    return function () {
      var newData = this.state.data
      newData[n]=[Math.random(),Math.random(),Math.random(),Math.random()]
      this.setState({data:newData})
      console.log(n)
    }.bind(this)
  }
  render(){
    // return<App data={this.state.data} click={this.click}/>
    return(<div style={this.props.style||{}}>{this.state.data.map((flag, index) => {
      if(flag[0]){
        return <Container data={flag} style={{width:'50%',height:'50%',display:'inline-block'}} key={index}/>
      } else{
        return flag<0.25? <img src="public/img/1.png" style={{verticalAlign: 'bottom',width:'50%',height:'50%'}} key={index} onClick={this.click(index)} alt=""/>:
          <img src="public/img/2.png" style={{verticalAlign: 'bottom',width:'50%',height:'50%'}} key={index} onClick={this.click(index)} alt=""/>
      }
    })}</div>)
  }
}

ReactDOM.render(<Container data={[Math.random(),Math.random(),Math.random(),Math.random()]} />, document.querySelector('.js-app'))