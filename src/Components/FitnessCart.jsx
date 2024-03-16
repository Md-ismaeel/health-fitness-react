import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Components/Fitness.css';
import Health from './Health';

const FitnessCart = () => {

  const [apiData, setApiData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [count, setCount] = useState(29);


  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
        params: { limit: count },
        headers: {
          'X-RapidAPI-Key': '0edd3c5f5amsh76ef575b7cc6257p11e06bjsnff4359940055',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);

        // console.log(response.data);
        setApiData(response.data);
        setNewData(response.data)

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [count]);


  const onClickHandler = () => {
    setCount(count + 29)
  }


  const onChangeHandler = (e) => {
    console.log(e.target.value);
    let textVal = e.target.value;
    // setSearchData(textVal)


    const temp = [...apiData];
    let filteredData = temp.filter((items) => {

      return (
        items.name.toLowerCase().includes(textVal.toLowerCase()) ||
        items.bodyPart.toLowerCase().includes(textVal.toLowerCase()) ||
        items.target.toLowerCase().includes(textVal.toLowerCase())
      )
    })
    setNewData(filteredData)
    // console.log(filteredData);
  }

  return (
    <div className="container">
      <div>
        <p className="para-list">Exercise List</p>
        <input className="input-box" onChange={onChangeHandler} placeholder="Search by target, body part or exercise" />
      </div>

      <div className='box-container'>
        {newData.map((items, index) => {
          return (
            <Health gifUrl={items.gifUrl} name={items.name} bodyPart={items.bodyPart} target={items.target} key={index} />
          )
        })}
      </div>
      <div className='btn-box'>
        <button onClick={onClickHandler} className='count-btn'>load More</button>
      </div>

    </div>
  );
};

export default FitnessCart;
