/* eslint-disable react/prop-types */
function Pagination(props) {
    const {page, totalPages, onLeftClick, onRightClick} = props
    return(
        <div className="pagination-container">
            <button onClick={onLeftClick}>⬅️</button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}>➡️</button>
        </div>
    )
}

export default Pagination