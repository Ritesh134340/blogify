import React from 'react'

const 
Loading = () => {
  return (
    <div style={{position:"fixed",top:"0",left:"0",height:"100vh",width:"100%",backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:"1000",height:"100vh",width:"100vw"}}>
       <img style={{display:'block',width:"50px",height:"50px"}} src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="loader"/>
    </div>
  )
}

export default Loading