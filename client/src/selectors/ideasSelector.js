import moment from 'moment';

export default (ideas, { text, sortBy, order }) => {
    return ideas.filter((idea) => {
        const createdAtMoment = moment(idea.createdAt)
        const titleMatch = idea.title.toLowerCase().includes(text.toLowerCase())
        const contentMatch = idea.content.toLowerCase().includes(text.toLowerCase())

        return titleMatch || contentMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            if (order === 'descending') {
                return a.createdAt < b.createdAt ? 1 : -1
            } else if (order === 'ascending') {
                return a.createdAt > b.createdAt ? 1 : -1
            }
        } else if (sortBy === 'name') {
            if (order === 'ascending') {
                return a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
            } else if (order === 'descending') {
                return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
            }
        }
    })
}