import React, { useEffect } from 'react';

import FormBar from 'components/FormBar';
import InfoCard from 'components/InfoCard';
import DataTable from 'components/DataTable';
import Pagination from 'components/Pagination';
import { columnArray, FeedState, data, FeedFormData } from 'constants/types';

interface FeedProps {
    match: any,
    actions: any,
    feeds: FeedState
}

const Feeds: React.FC<FeedProps> = ({actions, feeds, match}) => {

  console.log("match", match);

  const fetchFeeds = (page: number = feeds.page) => 
  (searchText: string = feeds.searchText) => 
  (sortBy: string = feeds.sortBy): void => {
    const formData: FeedFormData = {page, searchText, sortBy};
    actions.onFetchFeeds(formData);
  }

  const paginate = (page: number) => fetchFeeds(page)(feeds.searchText)(feeds.sortBy);
  const query = (searchText: string, sortBy: string) => fetchFeeds(feeds.page)(searchText)(sortBy);

    useEffect(() => {
        feeds.data.length === 0 && !feeds.error && fetchFeeds(1)('')('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
      
      <Pagination 
        page={feeds.page} 
        pageSize={feeds.pageSize} 
        handlePagination={paginate} 
      />
      <div className="card-container" data-testid="card-container">
        {feeds.data.map((d: data) => <InfoCard key={d.dateLastEdited} data={d} />)}
      </div>
      <DataTable columns={headers} data={feeds.data} />
    </div>
  );
}

export default Feeds;
