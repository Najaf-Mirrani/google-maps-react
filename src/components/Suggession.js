import amsmap from "./../images/ams.jpg";
import dubaimap from "./../images/dubai.jpg";
import nycmap from "./../images/nyc.jpg";
import tokyomap from "./../images/tokyo.jpg";



export const Suggessions = ({ setMapZoom, setMapCenter }) => {
  const setCityAsCenter = (lat, lng) => {
    setMapZoom(6)
    setTimeout(() => {
      setMapCenter({ lng: lng, lat: lat, points: "City", layers: 1, depth: 1 })
      setMapZoom(7)
    }, 500);
  }

  return (
    <div className="grid grid-cols-8 gap-5 mt-5 ml-3 mr-5">
      <div className="rounded-3xl col-start-0 col-span-2">
        <div className="card bg-black hover:brightness-150 image-full">
          <figure><img style={{ width: 300, height: 180 }} src={tokyomap} alt="Tokyo" /></figure>
          <div className="card-body">
            <h2 className="card-title">Tokyo</h2>
            <p>suggested as no.1</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={(event) => {
                setCityAsCenter(35.69503634431551, 139.77237777567598)
              }} >Navigate</button>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-3xl col-start-3 col-span-2">
        <div className="card w-50 bg-black hover:brightness-150 image-full">
          <figure><img style={{ width: 300, height: 180 }} src={dubaimap} alt="Dubai" /></figure>
          <div className="card-body">
            <h2 className="card-title">Dubai</h2>
            <p>suggested as no.2</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={(event) => {
                setCityAsCenter(25.17962349458337, 55.25063487993814)
              }}>Navigate</button>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-3xl col-start-5 col-span-2">
        <div className="card w-50 bg-black hover:brightness-150 image-full">
          <figure><img style={{ width: 300, height: 180 }} src={nycmap} alt="Newyork" /></figure>
          <div className="card-body">
            <h2 className="card-title">Newyork</h2>
            <p>suggested as no.3</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={(event) => {
                setCityAsCenter(40.676544065245075, -74.00715730656778)
              }}>Navigate</button>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-3xl col-start-7 col-span-2">
        <div className="card w-50 bg-black hover:brightness-150 image-full">
          <figure><img style={{ width: 300, height: 180 }} src={amsmap} alt="Amsterdam" /></figure>
          <div className="card-body">
            <h2 className="card-title">Amsterdam</h2>
            <p>suggested as no.4</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={(event) => {
                setCityAsCenter(52.37899231338006, 4.897037802590123)
              }}>Navigate</button>
            </div>
          </div>
        </div>
      </div>
    </div>)
}