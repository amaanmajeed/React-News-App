import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useParams, useNavigate } from 'react-router-dom';

export default function News() {
    const { country, page } = useParams();
    const navigate = useNavigate();
    const [newsData, setNewsData] = useState([]);
    const [currentPage, setcurrentPage] = useState(page);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=8&page=${currentPage}&apiKey=457f5d5eaf834dd59398541d517dc2ac`;
                const response = await fetch(url);
                const data = await response.json();
                setNewsData(data.articles);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
        console.log(newsData);
    }, [currentPage, country]);

    return (
        <>
            
            <div className='container my-5'>
                <div className="my_btns d-flex justify-content-between">
                    <button disabled={parseInt(currentPage) <= 1} type="button" class="btn btn-primary mx-3" onClick={() => {setcurrentPage(parseInt(currentPage) - 1); navigate(`/${country}/${parseInt(currentPage) - 1}`)}}>Prev</button>
                    <button type="button" class="btn btn-primary mx-3" onClick={() => { setcurrentPage(parseInt(currentPage) + 1); navigate(`/${country}/${parseInt(currentPage) + 1}`) }}>Next</button>
                </div>
                <div className="row">
                    {newsData.map((data, index) => (
                        <Card key={index} description={data.description ? data.description.substring(0, 100) : ""} title={data.title ? data.title.substring(0, 40) : ""} url={data.url} image={data.urlToImage} publishedAt={data.publishedAt} />
                    ))}
                </div>
            </div>
        </>
  );
}
