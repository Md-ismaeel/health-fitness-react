import React from 'react'

const Health = ({ gifUrl, name, bodyPart, target }) => {
    // console.log(gifUrl);

    return (
        <div className="data-box">
            <img src={gifUrl} alt="img-loading" />
            <h3>{name}</h3>
            <p className='paraTag'>{bodyPart}</p>
            <p className='paraTag'>{target}</p>
        </div>
    )
}

export default Health;
