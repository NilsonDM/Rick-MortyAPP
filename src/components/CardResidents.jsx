import useFetch from '../hooks/useFetch';

const CardResidents = ({url}) => {
  const resident = useFetch(url)  

  return (
   

      <div className='card-resident'> 
        <header>
          <img src={resident?.image} alt={`image of ${resident?.name}`} />
          <div className='circle-status'>
            <div className={`circle ${resident?.status}`} ></div>
            <span className='status'>{resident?.status}</span>
          </div>
        </header>

        <div className='info-resident'>
          <h3>{resident?.name}</h3>
          <ul>
            <li><span>Specie:</span> <br />{resident?.species}</li>
            <li><span>Origin:</span> <br />  {resident?.origin.name}</li>
            <li><span>Episodes:</span><br />{resident?.episode.length}</li>
          </ul>
        </div>
      </div>
   
  )
}

export default CardResidents