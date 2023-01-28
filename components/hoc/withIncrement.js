import React from 'react'

export const withIncrement = (OriginalComponent) => {
  
  class updatedComponent extends React.Component {
      state={count: 0}
      increment = ()=>{
          this.setState(prevState=>{
              return {count: prevState.count + 1}
          })
      }
      componentDidMount(){

      }
      render(){
          return (
              <OriginalComponent count={this.state.count} increment={this.increment} />
          )
      }
  }
  return updatedComponent

}

export default withIncrement;