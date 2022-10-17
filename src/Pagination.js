import React from 'react'

const Pagination = ({ setCurrentPage, totalPosts, postPerPage }) => {

    let pages = [];
    for (let i = 0; i <= Math.ceil(totalPosts / postPerPage) - 1; i++) {
        pages.push(i)
    }

    return (
        <div>{pages.map((page, index) => {
            return <button style={{ margin: '5px' }} key={index} onClick={() => setCurrentPage(page + 1)}>{page + 1}</button>
        })}</div>
    )
}

export default Pagination