import React from 'react'


const User =({...props})=>{
  return(
      <div>
          <p>My name is {props.name}</p>
          <p>And i am {props.age}</p>
          <style jsx>{`
          p{text-align: center}
          `}

          </style>
      </div>
  )
}


export default User;