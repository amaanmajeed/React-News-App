import React from 'react';

export default function card(props) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
    <a href={props.url} className="card px-0 m-2">
      <img src={props.image?props.image:"https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg"} className="card-img-top" alt="..." style={{ width: "100%", height: "150px"}} />
      <div className="card-body">
        <h5 className='card-title'>{props.title? props.title+ "...": ''}</h5>
        <p className="card-text">{props.description ? props.description + '...' : ""}</p>
        <p className='text-muted'>{props.publishedAt?props.publishedAt.substring(0, 10):""}</p>
      </div>
      </a>
    </div>
  );
}
