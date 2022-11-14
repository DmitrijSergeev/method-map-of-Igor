import React from "react";
type StudentsType = {
    students: Array<TaskType>
}
type TaskType = {
    id: number
    name: string
    age: number
}
export const Body = (props: StudentsType) => {
    return (
        <main>
            {props.students[0].name} {props.students[0].age}<br/>
            {props.students[1].name} {props.students[1].age}<br/>
            {props.students[2].name} {props.students[2].age}<br/>
            {props.students[3].name} {props.students[3].age}<br/>
        </main>
    )
}