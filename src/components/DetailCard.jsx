import A1 from "./../images/1A.jpg";
import B2 from "./../images/2B.jpg";
import C3 from "./../images/3C.jpg";
import D4 from "./../images/4D.jpg";
import E5 from "./../images/5E.jpg";
import City from "./../images/city.jpg";


export const DetailCard = ({ data }) => {
  const getImage = () => {
    if (data?.points === "1A") {
      return  A1;
    }
    if (data?.points === "2B") {
      return  B2;
    }
    if (data?.points === "3C") {
      return  C3;
    }
    if (data?.points === "4D") {
      return  D4;
    }
    if (data?.points === "5E") {
      return  E5;
    }
    return City;
  }
  return (
    <div className="card bg-gray-800 shadow-xl">
      <figure><img style={{ width: 410, height: 480 }} src={getImage()} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title font-sans text-slate-100">
          { data?.points}
          </h2>
        <p className="text-slate-100">This label for this point is 1A and this is located in map with longitute: { data?.lng} and latitude: { data?.lat}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
        </div>
          <h2 className="card-title font-sans text-slate-100">
            MetaData
        </h2>
        <h3 className="card-title font-sans text-slate-100">
            Layers
        </h3>
        <p className="text-slate-100">{ data?.layers }</p>
        <h3 className="card-title font-sans text-slate-100">
            Depth
        </h3>
        <p className="text-slate-100">{ data?.depth }</p>
        </div>
    </div>
  )
}