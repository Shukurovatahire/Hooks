import "./style.scss";
interface IFilmDetalis {
  name: string;
  director: string;
  year: number;
  studio: string;
  url: string;
}

const Film: React.FC<IFilmDetalis> = (props) => {
  const { name, director, year, studio, url } = props;

  return (
    <div className="filmBox">
      <div className="imgContainer">
        <img src={url} />
      </div>
      <div className="filmDetalis">
        <p>Name:{name} </p>
        <p>Director: {director} </p>
        <p>Studio:{studio} </p>
        <p>Year: {year}</p>
      </div>
    </div>
  );
};

export default Film;
