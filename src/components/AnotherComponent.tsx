import React from 'react'

interface IAnotherComponent{
    name: string;
    age: number | string;
    course_key: string;
}

const AnotherComponent = ({ name, age, course_key }: IAnotherComponent) => {
  return (
    <div>
        <h1>From another component</h1>
        <h2>{ `My name is : ${name}` }</h2>
    </div>
  )
}

export default AnotherComponent