import proj4 from 'proj4';
import { useState } from 'react';
import './App.css';
import { DetailCard, MapComponent, NavBar, Suggessions } from './components';
import { data } from "./Data/index";

function App() {

  const utm32Parameters = '+proj=utm +zone=32 +ellps=WGS84 +datum=WGS84 +units=m +no_defs';

  // Perform UTM to Latitude-Longitude conversion
  const utmProjection = data.map((dataPoint) => {
    const point = proj4(utm32Parameters, 'WGS84', [dataPoint.easting, dataPoint.northing]);
    return { position: { lng: point[0], lat: point[1] }, points: dataPoint.points, layers: dataPoint.layerAmount, depth: dataPoint.depth }
  })

  const [mapCenter, setMapCenter] = useState({
    lng:
      5.98458091645728, lat: 1.786278228453091,
    points: '1A',
    depth: 5,
    layers: 3,
  });
  const [mapZoom, setMapZoom] = useState(7);

  return (
    <div className="bg-gray-900 h-screen">
      <NavBar ></NavBar >
      <div className="grid grid-rows-4 grid-cols-9 gap-2 p-5">
        <div className="col-start-0 col-span-1">
          <div className='row-start-0 row-span-4'>
            <div>
              <ul className="menu bg-gray-800 w-40 rounded-box">
                {
                  data.map((point, index) => {
                    return <li className='hover:bg-gray-700' onClick={(event) => {
                      setMapZoom(6)
                      setTimeout(() => {
                        setMapCenter({ ...utmProjection[index]?.position, points: utmProjection[index]?.points, depth: utmProjection[index]?.depth, layers: utmProjection[index]?.layers })
                        setMapZoom(10)
                      }, 500);

                    }}>
                      <strong><p className='text-white hover:text-blue-500'>{point.points}</p></strong></li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="grid row-start-4 row-span-1 text-white hover:text-blue-500 content-end">
          <button className="btn btn-outline">
            Logout
            <svg class="h-8 w-8 text-grey" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>
          </button>
        </div>
        <div className="row-start-0 row-span-3 col-start-2 col-span-6 ml-3 mr-3">
          <div className="rounded-lg">
            <MapComponent center={mapCenter} setCenter={setMapCenter} markers={utmProjection} zoom={mapZoom}></MapComponent>
          </div>
        </div>
        <div className="row-start-4 row-span-1 col-start-2 col-span-6">
          <Suggessions setMapCenter={setMapCenter} setMapZoom={setMapZoom}></Suggessions>
        </div>
        <div className="row-start-0 row-span-4 col-start-8 col-end-10 mr-2">
          <DetailCard data={mapCenter}></DetailCard>
        </div>
      </div>
    </div >
  );
}

export default App;
