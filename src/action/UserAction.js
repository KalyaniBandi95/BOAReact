


export function selectBook(book){
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}

export function selectAuthor(author){
    return {
        type: 'AUTHOR_SELECTED',
        payload: author
    }
}