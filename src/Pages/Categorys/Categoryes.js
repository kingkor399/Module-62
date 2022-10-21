import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewSummaryCard from '../Shared/NewSummaryCard/NewSummaryCard';

const Categoryes = () => {
    const Categoryesnews = useLoaderData();
    return (
        <div>
            <h4>This Categoryes News {Categoryesnews.length}</h4>
            {
                Categoryesnews.map(news => <NewSummaryCard
                key = {news.id}
                news = {news}
                ></NewSummaryCard>)
            }
        </div>
    );
};

export default Categoryes;