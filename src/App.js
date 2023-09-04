import proj4 from 'proj4';
import { useState } from 'react';
import './App.css';
import { DetailCard, LogoutButton, MapComponent, NavBar, Sidebar, Suggessions } from './components';
import { data } from "./Data/index";

/**
 * App component is displaying a grid and all the components in it
 * @returns jsx
 */
function App() {
  const utm32Parameters = '+proj=utm +zone=32 +ellps=WGS84 +datum=WGS84 +units=m +no_defs';
  /**
   * Perform UTM to Latitude-Longitude conversion 
   */
  const utmProjection = data.map((dataPoint) => {
    let point = null;
    try {
      point = proj4(utm32Parameters, 'WGS84', [dataPoint.easting, dataPoint.northing]);
    }
    catch (error) {
      console.log("There is a problem in project4 conversion")
      return {
        position: { lng: 0.35406121544418945, lat: 6.650938396438645 }
      }
    }
    return { position: { lng: point[0], lat: point[1] }, points: dataPoint.points, layers: dataPoint.layerAmount, depth: dataPoint.depth }
  })

  /**
   * mapCenter is the state responsible for changing the map's center and markers
   */
  const [mapCenter, setMapCenter] = useState({
    lng:
      5.98458091645728, lat: 1.786278228453091,
    points: '1A',
    depth: 5,
    layers: 3,
  });

  /**
   * mapZoom is responsible for the zoom changes in the maps 
   */
  const [mapZoom, setMapZoom] = useState(7);

  return (
    <div className="bg-gray-900 h-screen">
      <NavBar ></NavBar >
      <div className="grid grid-rows-4 grid-cols-9 gap-2 p-5">
        <div className="col-start-0 col-span-1">
          <div className='row-start-0 row-span-4'>
            <div>
              <ul className="menu bg-gray-800 w-40 rounded-box">
                <Sidebar data={data} mapCenter={mapCenter} utmProjection={utmProjection} setMapCenter={setMapCenter} setMapZoom={setMapZoom} />
              </ul>
            </div>
          </div>
        </div>
        <div className="grid row-start-4 row-span-1 text-white hover:text-blue-500 content-end">
          <LogoutButton />
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
