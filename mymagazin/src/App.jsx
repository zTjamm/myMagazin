import './App.css'
import {useState, useEffect } from 'react'
import React from "react";

function App() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState("");
    const [number, setNumber] = useState("");
    const [menu, setMenu] = useState([]);
  const [sum, setSum] = useState([]);

  useEffect(() => {
    setSum([...sum, sumItem])
    setName('')
    setPrice("")
    setNumber("")
  }, [ menu ])

 
    const sumItem = number * price;
    const item = {id: menu.length + 1, name: name, price: price, number: number};
    const priceSum =sum.reduce(function(s, e){ return s + e},0) ;

    const result = menu.map((m, i) => {
        const sumI = m.number * m.price;
        return <div className='menu_item' key={i}>
            <span>{m.name}</span><span>Цена {m.price}</span><span>Кол-во {m.number}</span><span>Сумма {sumI}</span>
        </div>
    })


    return (
        <div className='container'>
            <h3>Покупки в магазине</h3>
            <button
                onClick={() => setMenu([...menu, item])}
                >Добавить</button> <span className="total">Всего: {priceSum}</span>
            <div className="todo">
                <div className="todo_item"><p>Имя</p><input type="text" value={name} onChange={(e) => setName(e.target.value)}/></div>
                <div className="todo_item"><p>Цена</p><input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))}/></div>
                <div className="todo_item"><p>Кол-во</p><input type="text" value={number} onChange={(e) => setNumber(Number(e.target.value))}/></div>
                <div className="todo_item"><p>Сумма: </p><span>{sumItem}</span></div>
            </div>
            <div className='menu'>{result}</div>
        </div>
    )
}

export default App
