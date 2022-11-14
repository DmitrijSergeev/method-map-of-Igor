import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Navbar} from "./site/Navbar";
import {Footer} from "./site/Footer";
import {Button} from "./site/Button";

function App() {
    const task = [
        {id: 1, name: 'John :', age: 19},
        {id: 2, name: 'Paul :', age: 18},
        {id: 3, name: 'George :', age: 17},
        {id: 4, name: 'Ringo :', age: 20}
    ]
    const topCars = [
        {id:1, manufacturer:'BMW', model:'m5cs'},
        {id:2, manufacturer:'Mercedes', model:'e63s'},
        {id:3, manufacturer:'Audi', model:'rs6'}
    ]
    const Button1Foo = (num:string, age:number) => {
        console.log(num, age);
    }
    const Button2Foo = () => {
        console.log('Hello friends')
    }
    return (
    <div className="App" >
        <Header title = {'Make love not war'}/>
        <Body students = {task} />
        <Navbar cars = {topCars}/>
        <Footer />
        {/*<button>MyYouTubeChannel_1</button>
        <button>MyYouTubeChannel_2</button>*/}
        <Button name={'MyYouTubeChannel_1'}
                callback={()=>Button1Foo('Hello World', 21)}/>
        <Button name={'MyYouTubeChannel_2'}
                callback={Button2Foo}/>
    </div>
  );
}

export default App;
