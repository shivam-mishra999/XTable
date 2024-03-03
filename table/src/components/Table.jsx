import React,{useState} from 'react';

const initialTableData = 
[

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

];

export default function Table() {
    const [tableData, setTableData] = useState(initialTableData);

    const handleSortDate = () => {
        const sortedDateData = [...tableData].sort((a,b)=>{
            let dateComparison = new Date(b.date) - new Date(a.date);
            if(dateComparison !== 0){
                return dateComparison;
            }else{
                return b.views - a.views;
            }
        })
        setTableData(sortedDateData);
    }

    const handleSortView = () => {
        setTableData([...tableData].sort((a, b)=>b.views-a.views))
    }

  return (
    <div className='container'>
        <div>
            <h1>Date and Views Table</h1>
        </div>
        <div>
            <button onClick={handleSortDate}>Sort by Date</button>
            <button onClick={handleSortView}>Sort by Views</button>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Views</th>
                        <th>Article</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {tableData.map((data) =>(
                        <tr key= "data.article">
                            <td>{data.date}</td>
                            <td>{data.views}</td>
                            <td>{data.article}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    
  )
}
