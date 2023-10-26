import { useState, useEffect, useCallback } from "react"
import LinearProgress from '@mui/material/LinearProgress';
import NewsCard from "./NewsCard";
import { Box } from "@mui/material";

export default function News() {
    let [data, setData] = useState([])
    async function apiCaller() {
        let data = await fetch('http://localhost:3001/news')
        let response = await data.json()
        setData(response.result.results)
    }

    useEffect(() => {
        apiCaller()
    }, [])

    return (
        <>
            {(!data || data?.length < 1) && (<LinearProgress />)}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                {data && data.map((news) => {
                    if (news.abstract !== '') return (<Box key={news.title} sx={{ width: '30%', margin: '10px' }}>
                        <NewsCard
                            title={news.title}
                            publishedDate={news.published_date}
                            image={news.multimedia[1]}
                            url={news.url}
                        />
                    </Box>
                    );
                })}
            </Box>
        </>
    )
}