import React from "react";
import { Location } from "./Location";

const city = {
  newyork:
    "https://www.refugerestrooms.org/api/v1/restrooms/by_location?lat=40.7127753&lng=-74.0059728",
  boston:
    "https://www.refugerestrooms.org/api/v1/restrooms/by_location?lat=42.3600825&lng=-71.0588801",
  hartford:
    "https://www.refugerestrooms.org/api/v1/restrooms/by_location?lat=41.7658043&lng=-72.6733723",
  providence:
    "https://www.refugerestrooms.org/api/v1/restrooms/by_location?lat=41.8239891&lng=-71.4128343",
};

export const List = (props) => {
  const selected = props.match.params.city;

  const [list, setList] = React.useState(null);

  React.useEffect(() => {
    fetch(city[selected])
      .then((response) => response.json())
      .then((data) => {
        setList(data);
      });
  }, [selected]);
  return list ? (
    <main>
      <div>
        {list.map((loc) => (
          <Location location={loc} key={loc.id} />
        ))}
      </div>
    </main>
  ) : (
    <h1>Loading...</h1>
  );
};
