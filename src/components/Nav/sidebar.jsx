/**
 * Sidebar component is responsible for displaying all the points in sidebar
 * @param {data, utmProjection, mapCenter, setMapZoom, setMapCenter} params are names as the usage of these params
 * @returns 
 */
export const Sidebar = ({ data, utmProjection, mapCenter, setMapZoom, setMapCenter }) => {
  return (
  <>
    {
      data?.map((point, index) => {
        return <li style={point.points === mapCenter.points ? { background: 'royalblue' } : null} className='hover:bg-gray-700' onClick={(event) => {
          setMapZoom(6)
          setTimeout(() => {
            setMapCenter({ ...utmProjection[index]?.position, points: utmProjection[index]?.points, depth: utmProjection[index]?.depth, layers: utmProjection[index]?.layers })
            setMapZoom(10)
          }, 500);
        }}>
          <strong><p className='text-white hover:text-blue-500'>{point.points}</p></strong></li>
      })
    }
    </>
  )
}