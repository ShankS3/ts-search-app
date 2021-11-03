import React, { useEffect } from 'react';
import { useLocation  } from 'react-router-dom';

import FormBar from 'components/FormBar';
import InfoCard from 'components/InfoCard';
import DataTable from 'components/DataTable';
import Pagination from 'components/Pagination';
import { columnArray, FeedState, data, FeedFormData } from 'constants/types';
import { History } from 'history';

interface FeedProps {
    history: History
    actions: any,
    feeds: FeedState
}

const Feeds: React.FC<FeedProps> = ({actions, feeds, history}) => {
  let params =  new URLSearchParams(useLocation().search);

  let page: number = parseInt(params.get('page') as string, 10) || 1;
  let searchText: string = params.get('searchText') as string || "";
  let sortBy: string = params.get('sortBy') as string || "";

  const paginate = (page: number) => history.push(`/feeds?page=${page}&searchText=${feeds.searchText}&sortBy=${feeds.sortBy}`);
  const query = (searchText: string, sortBy: string) => history.push(`/feeds?page=1&searchText=${searchText}&sortBy=${sortBy}`);

    useEffect(() => {
      const formData: FeedFormData = {page, searchText, sortBy};
      actions.onFetchFeeds(formData);
    }, [page, searchText, sortBy, actions]);

  const headers: columnArray = [
    {header: 'Name', name: 'name'},
    {header: 'Image', name: 'image'},
    {header: 'Description', name: 'description'},
    {header: 'Date Last Edited', name: 'dateLastEdited'},
  ]

  return (
    <div className="App" data-testid="App">
      <h3 className="page-title" data-testid="page-title">Feed</h3>
      <FormBar
        sortBy={feeds.sortBy}
        searchText={feeds.searchText}
        submitAction={query}
      />
      {feeds.data.length !== 0 
        ? (
          <>
            <Pagination 
              page={feeds.page} 
              pageSize={feeds.pageSize} 
              handlePagination={paginate} 
            />
            <div className="card-container" data-testid="card-container">
              {feeds.data.map((d: data) => <InfoCard key={d.dateLastEdited} data={d} />)}
            </div>
            <DataTable columns={headers} data={feeds.data} />
          </>
        ) 
        : (<div className="no-data-div">  No feeds found </div>)
      }
    </div>
  );
}

export default Feeds;
