import React from "react";
import Film from "./Film";
import Users from "./Users";
import Time from "./Time";
import Pet from "./Pet";

const MainPage: React.FC = () => {
  const filmDetails = {
    name: "Split",
    director: "M. Night Shyamalan",
    year: 2016,
    studio: " Sun Center Studios",
    url: "https://m.media-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_.jpg",
  };

  const userInfo = {
    name: "Joe",
    email: "joedoe@mail.ru",
    experience: "4 year",
    skills: "Leadership,teamwork,analytics",
    mobile: +2063428631,
    url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Tom_Ellis_%282016%29.jpg",
  };

  const myPet={
    name: "Charlie",
    type: "Golden Retriver",
    age: 2,
    gender:"Male",
    url:"https://image.petmd.com/files/inline-images/golden-retriever-2.jpg?VersionId=9HAclc1bWh8XvyNoGi2.UxpdEp1gygb_"
  
  }

  return (
    <section>
      <div>
        <h1>Favorite Movie:</h1>
        <Film {...filmDetails} />
      </div>

      <div>
        <h1>User info:</h1>
        <Users {...userInfo} />
      </div>

      <div className="timeBox">
      <h1>Current time:</h1>
      <Time/>
      </div>

      <div>
        <h1>My pet:</h1>
        <Pet {...myPet}/>
      </div>
    </section>
  );
};

export default MainPage;
