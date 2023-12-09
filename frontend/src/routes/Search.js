import Navbar from "../components/Navbar";
import Form from "../components/form";


export default function Search() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Search </h1>
      <br></br>
      <h2>Enter your criteria to search for a college:</h2>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <Form />
          </div>
        </div>
        </div>
    </div>
  );
}
