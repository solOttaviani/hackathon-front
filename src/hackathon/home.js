import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";

function Home() {
  const [hackathon, setHackahon] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:4000/api/v1.0/hackhaton")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setHackahon(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  var hacks = [
    {
      id: 1,
      name: "Science Tech and STEM",
      date: "20-01-2022",
      place: "New York",
      developments: [
        {
          id: "1",
          name: "Medical app",
          developer: "August",
          winning_place: 1,
        },
        {
          id: "2",
          name: "Slicer app",
          developer: "August",
          winning_place: 2,
        },
        {
          id: "3",
          name: "Science development",
          developer: "August",
          winning_place: 3,
        },
      ],
    },
  ];

  const columns = [
    {
      name: "id",
      label: "ID",
      options: {
        customBodyRender: (value, _tableMeta, _updateValue) => {
          return (
            <Link
              to={{
                pathname: "/hackathon/" + value,
              }}
            >
              {value}
            </Link>
          );
        },
      },
    },
    {
      name: "name",
      label: "Name",
    },
    {
      name: "date",
      label: "Date",
    },
    {
      name: "place",
      label: "Place",
    },
    {
      name: "developments",
      label: "Developments",
      options: {
        customBodyRender: (value, _tableMeta, _updateValue) => {
          return value.map((val, index) => <li key={index}>{val.name}</li>);
        },
      },
    },
  ];

  const defaultOptions = {
    selectableRows: undefined,
    elevation: 0,
  };

  return (
    <div>
      <MUIDataTable
        title="Hackathon"
        data={hacks}
        columns={columns}
        options={defaultOptions}
      />
    </div>
  );
}

export default Home;
