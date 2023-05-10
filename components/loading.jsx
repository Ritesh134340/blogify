import React from 'react'
import styles from  "@/styles/loading.module.css"

const 
Loading = () => {
  return (
    <div>
    <div className="fixed left-0 top-0 h-[100vh] w-[100%] flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-[11]">
    <div className={styles.lds}></div>
    </div>
   
    </div>
 

  )
}




export default Loading