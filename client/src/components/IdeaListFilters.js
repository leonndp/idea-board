import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByName, orderAscending, orderDescending } from './../actions/filterActions'

export class IdeaListFilters extends React.Component {
    constructor(props) {
        super(props)
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    onSortChange = (e) => {
        if (e.target.value === "date") {
            this.props.sortByDate();
        } else if (e.target.value === "name") {
            this.props.sortByName();
        }
    }

    onOrderChange = (e) => {
        if (e.target.value === 'ascending') {
            this.props.orderAscending()
        } else if (e.target.value === 'descending') {
            this.props.orderDescending();
        }
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Search for an idea"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />
                <p>Sort by: </p>
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}
                >
                    <option value="date">Date</option>
                    <option value="name">Name</option>
                </select>

                <select
                    value={this.props.filters.order}
                    onChange={this.onOrderChange}
                >
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps, { setTextFilter, sortByDate, sortByName, orderAscending, orderDescending })(IdeaListFilters)