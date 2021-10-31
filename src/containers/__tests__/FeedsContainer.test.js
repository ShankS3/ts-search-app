import { mockStore } from 'store/mockStore';
import { render } from '@testing-library/react';
import FeedsContainer from "containers/FeedsContainer";

describe("Feeds Container", () => {

    const initialState = {
        feed: {
            page: 1,
            pageSize: 1,
            data: [],
            totalCount: 0,
            searchText: '',
            sortBy: '',
            loader: false,
            error: false,
            errorMessage: ''
        }
    };

    const feedState = mockStore(initialState);

    it("should match Snapshot", () => {
        const { baseElement } = render(<FeedsContainer store={feedState} />);
        expect(baseElement).toMatchSnapshot();
    })
});
