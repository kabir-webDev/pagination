import React, { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import "./App.css";

function App() {
  const [pokam, setPokam] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setPokam(data));
  }, []);

  // const [pokam, setPokam] = useState([
  //   {
  //     userId: 1,
  //     id: 1,
  //     title:
  //       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //     body:
  //       "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  //   },
  //   {
  //     userId: 3,
  //     id: 27,
  //     title: "quasi id et eos tenetur aut quo autem",
  //     body:
  //       "eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur",
  //   },
  //   {
  //     userId: 3,
  //     id: 28,
  //     title: "delectus ullam et corporis nulla voluptas sequi",
  //     body:
  //       "non et quaerat ex quae ad maiores\nmaiores recusandae totam aut blanditiis mollitia quas illo\nut voluptatibus voluptatem\nsimilique nostrum eum",
  //   },
  //   {
  //     userId: 3,
  //     id: 29,
  //     title: "iusto eius quod necessitatibus culpa ea",
  //     body:
  //       "odit magnam ut saepe sed non qui\ntempora atque nihil\naccusamus illum doloribus illo dolor\neligendi repudiandae odit magni similique sed cum maiores",
  //   },
  //   {
  //     userId: 3,
  //     id: 30,
  //     title: "a quo magni similique perferendis",
  //     body:
  //       "alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia",
  //   },
  // ]);
  const [showPerPage, setShowPerPage] = useState(4);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  return (
    <div className="App">
      <div className="container py-4">
        <div className="row">
          {pokam.slice(pagination.start, pagination.end).map((post) => (
            <div className="col-md-3 mb-3" key={post.id}>
              <div className="card">
                <div className="card-body">
                  <h5>
                    #{post.name} {post.title}
                  </h5>
                  <p>{post.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={pokam.length}
        />
      </div>
    </div>
  );
}

export default App;
