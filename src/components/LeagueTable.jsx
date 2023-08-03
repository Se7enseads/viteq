const styles = {
  L: { color: 'red', marginRight: '15px' },
  D: { color: 'grey', marginRight: '15px' },
  W: { color: 'green', marginRight: '15px' }
}

function getStyle(result) {
  return styles[result] || {}
}

const LeagueTable = ({ standings }) => {
  // conditional check for standings and standings.table
  //if standings or standings.table is undefined
  if (!standings || !standings.table) {
    return <p>Loading...</p>;
  }
  
  //else
  console.log(standings.table);

  return (
    <div className='table-responsive mb-3'>
      <div className='d-flex align-items-center justify-content-center'>
        <img src={standings.emblem} alt='League Logo' height={'100px'} />
        <h1 className='text-center mx-auto'>{standings.name} Table</h1>
      </div>
      <table className='table table-hover mx-auto w-auto align-middle'>
        <thead className='table-dark '>
          <tr>
            <th scope='col'>Pos</th>
            <th className='col-4' scope='col'>
              Team
            </th>
            <th scope='col'>Played</th>
            <th scope='col'>Won</th>
            <th scope='col'>Draw</th>
            <th scope='col'>Lost</th>
            <th scope='col'>Points</th>
            <th className='text-center' scope='col'>
              Form
            </th>
          </tr>
        </thead>
        <tbody>
          {standings.table.map(standing => (
            <tr
              key={standing.position}
              className={
                standing.position <= 3
                  ? 'table-success'
                  : standing.position >= standings.table.length - 2
                    ? 'table-danger'
                    : null
              }
            >
              <th scope='row' className='px-2'>
                {standing.position}
              </th>
              <td className='p-2 align-middle'>
                <img
                  src={standing.team.crest}
                  alt='Team Crest'
                  height={'30px'}
                  width={'30px'}
                  style={{ marginRight: '10px' }}
                />
                {standing.team.shortName}{' '}
                {standing.position === 1 ? '🏆' : null}
              </td>
              <td className='px-2'>{standing.playedGames}</td>
              <td className='px-2'>{standing.won}</td>
              <td className='px-2'>{standing.draw}</td>
              <td className='px-2'>{standing.lost}</td>
              <td className='px-2'>
                <strong>{standing.points}</strong>
              </td>
              <td className='px-2 text-center'>
                {standing.form.split(',').map((result, index) => (
                  <span key={index} style={getStyle(result)}>
                    {result}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default LeagueTable
