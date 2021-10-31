import React, { useEffect } from 'react';

import FormBar from 'components/FormBar';
import InfoCard from 'components/InfoCard';
import DataTable from 'components/DataTable';
import Pagination from 'components/Pagination';
import { columnArray, FeedState, data, FeedFormData } from 'constants/types';

interface FeedProps {
    actions: any,
    feeds: FeedState
}

const Feeds: React.FC<FeedProps> = ({actions, feeds}) => {
    useEffect(() => {
        let formData: FeedFormData = {
          page: 1,
          searchText: '',
          sortBy: ''
        }

        feeds.data.length === 0 && !feeds.error && actions.onFetchFeeds(formData);
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
      <FormBar />
      <Pagination page={feeds.page} pageSize={feeds.pageSize} handlePagination={actions.onFetchFeeds} />
      <div className="card-container" data-testid="card-container">
        {feeds.data.map((d: data) => <InfoCard key={d.dateLastEdited} data={d} />)}
      </div>
      <DataTable columns={headers} data={feeds.data} />
    </div>
  );
}

export default Feeds;
