import Pagination from 'react-bootstrap/Pagination';

interface Props {
    handlePageChange: (params:number) => void
    size: number;
    currentPage: number;
        
    
}


const Paginated: React.FC<Props> = ({handlePageChange, size, currentPage}) =>{
    let pageNumers= [];
    // console.log(currentPage)

    for(let i=1; i<= Math.ceil(size); i++){
        pageNumers.push(
                <Pagination.Item key={i} active={i=== currentPage} onClick={()=> handlePageChange(i)}>
      {i}
    </Pagination.Item>,
        )
    }
    // let pages = []

 
    return (
        <div>
            <Pagination>
                <Pagination.First  onClick={()=> handlePageChange(1)} disabled={currentPage===1}/>
                <Pagination.Prev onClick={()=> handlePageChange(currentPage-1)} disabled={currentPage===1} />
                {pageNumers}
                <Pagination.Next onClick={()=> handlePageChange(currentPage+1)} disabled={currentPage===Math.ceil(size)}  />
                <Pagination.Last onClick={()=> handlePageChange(Math.ceil(size))}  disabled={currentPage===Math.ceil(size)} />
            </Pagination>

        </div>

    )

}

export default Paginated;