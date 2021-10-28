import React from 'react';

import FormBar from 'components/FormBar';
import InfoCard from 'components/InfoCard';
import DataTable from 'components/DataTable';
import Pagination from 'components/Pagination';
import { columnArray, dataArray } from 'constants/types';
import 'styles/App.css';

function App() {

  const data: dataArray = [{
    "name": "Customer Assurance Liaison",
    "image": "http://lorempixel.com/640/480",
    "description": "Vel voluptatem id repudiandae aut omnis. Deleniti tempore aliquam quia magnam eos. Sunt saepe nisi delectus.",
    "dateLastEdited": "2018-05-19T12:33:25.545Z"
  },
  {
    "name": "Dynamic Infrastructure Designer",
    "image": "http://lorempixel.com/640/480",
    "description": "Quaerat in rerum. Possimus reprehenderit provident ea voluptatem qui et enim. Ducimus ea soluta esse modi quia.",
    "dateLastEdited": "2017-11-28T04:59:13.759Z"
  },
  {
    "name": "Regional Configuration Designer",
    "image": "http://lorempixel.com/640/480",
    "description": "Rerum voluptatibus deleniti. Et quo ea magnam quisquam aliquam sequi sed praesentium. Similique est maiores. Tempora sed ad dolores error deserunt possimus sed perferendis molestiae. Doloribus fuga velit ipsum voluptatem ut ducimus.",
    "dateLastEdited": "2018-07-27T21:33:53.485Z"
  },
  {
    "name": "District Metrics Executive",
    "image": "http://lorempixel.com/640/480",
    "description": "Odit repudiandae et nemo voluptas quae. Voluptatibus inventore iure deserunt aliquid qui esse. Impedit molestias ea sed. Neque perspiciatis excepturi odit. Quibusdam facere dolor. Adipisci recusandae recusandae.",
    "dateLastEdited": "2018-07-14T21:01:42.717Z"
  },
  {
    "name": "International Brand Analyst",
    "image": "http://lorempixel.com/640/480",
    "description": "Fuga cupiditate dolorum eos. Quia vel et eos qui tempora. Et et et et alias at suscipit. Corporis eum nostrum recusandae similique rerum sit perferendis ut. Qui excepturi laborum est et fugit laborum.",
    "dateLastEdited": "2018-04-18T08:53:42.053Z"
  },
  {
    "name": "Human Factors Analyst",
    "image": "http://lorempixel.com/640/480",
    "description": "Quis eos in repudiandae. Dicta dolore rerum unde sapiente. Consequatur ea rerum non alias et sapiente dolore aliquid. Eius quia delectus porro id non voluptas.",
    "dateLastEdited": "2018-07-27T05:58:52.006Z"
  },
  {
    "name": "Human Data Designer",
    "image": "http://lorempixel.com/640/480",
    "description": "Vero enim dignissimos. Numquam harum facilis delectus itaque dolore libero omnis asperiores aut. Deserunt quas dolore omnis quibusdam aut. A nihil expedita repellat eaque unde eveniet voluptatum harum.",
    "dateLastEdited": "2018-06-05T03:48:43.495Z"
  },
  {
    "name": "Dynamic Identity Specialist",
    "image": "http://lorempixel.com/640/480",
    "description": "Quasi temporibus hic et accusantium. Ea et ullam illum esse quae ea adipisci. Rerum nihil quod ex error voluptatem voluptatem et culpa. Nemo voluptatem veritatis fugiat molestiae officiis adipisci. Perferendis et sed illum.",
    "dateLastEdited": "2018-01-02T05:52:11.738Z"
  }
];

  const headers: columnArray = [
    {header: 'Name', name: 'name'},
    {header: 'Image', name: 'image'},
    {header: 'Description', name: 'description'},
    {header: 'Date Last Edited', name: 'dateLastEdited'},
  ]

  return (
    <div className="App" data-testid="App">
      <h3 className="page-title" data-testid="page-title">Feed</h3>
      <FormBar />
      <Pagination page={1} pageSize={1} handlePagination={(val)=>console.log(val)} />
      <div className="card-container" data-testid="card-container">
        {data.map(d => <InfoCard key={d.dateLastEdited} data={d} />)}
      </div>
      <DataTable columns={headers} data={data} />
    </div>
  );
}

export default App;
