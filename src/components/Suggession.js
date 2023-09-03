import amsmap from "./../images/ams.jpg";
import dubaimap from "./../images/dubai.jpg";
import nycmap from "./../images/nyc.jpg";
import tokyomap from "./../images/tokyo.jpg";

/**
 * Suggessions is used when we click on navigate button. It changes the map's center and zoom
 * @param {*} param0 - map zoom and center
 * @returns 
 */
export const Suggessions = ({ setMapZoom, setMapCenter }) => {
  const setCityAsCenter = (lat, lng) => {
    setMapZoom(6)
    setTimeout(() => {
      setMapCenter({ lng: lng, lat: lat, points: "City", layers: 1, depth: 1 })
      setMapZoom(7)
    }, 500);
  }

  /**
   * showSuggession is used to display the suggested cities in cards below the map.
   * @param {*} lng - longitude is the number type param
   * @param {*} lat - latitude is a number type param
   * @param {*} number - number is the suggested number
   * @param {*} name - name is the name of the city
   * @param {*} map - map is the url of city map image
   * @returns jsx
   */
  const showSuggession = (lng, lat, number, name, map) => {
    return (<div className="card w-50 bg-black hover:brightness-150 image-full">
      <figure><img style={{ width: 300, height: 180 }} src={map} alt={name} /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>suggested as no.{number}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={(event) => {
            setCityAsCenter(lng, lat)
          }}>Navigate</button>
        </div>
      </div>
    </div>)
  }

  return (
    <div className="grid grid-cols-8 gap-5 mt-5 ml-3 mr-5">
      <div className="rounded-3xl col-start-0 col-span-2">
        {
          showSuggession(35.69503634431551, 139.77237777567598, 1, "Tokyo", tokyomap)
        }
      </div>
      <div className="rounded-3xl col-start-3 col-span-2">
        {
          showSuggession(25.17962349458337, 55.25063487993814, 2, "Dubai", dubaimap)
        }
      </div>
      <div className="rounded-3xl col-start-5 col-span-2">
        {
          showSuggession(40.676544065245075, -74.00715730656778, 3, "Newyork", nycmap)
        }
      </div>
      <div className="rounded-3xl col-start-7 col-span-2">
        {
          showSuggession(52.37899231338006, 4.897037802590123, 4, "Amsterdam", amsmap)
        }
      </div>
    </div>)
}