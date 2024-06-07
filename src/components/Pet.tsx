interface IPet {
  name: string;
  type: string;
  age: number;
  gender: string;
  url:string
}

const Pet: React.FC<IPet>= (props) => {
const {name,age,url,gender,type}=props

  return (
    <div className="petBox">
      <div className="imgContainer">
        <img src={url} />
      </div>
      <div className="petInfo">
        <p>Name: {name}</p>
        <p>Type:{type}</p>
        <p>Gender:{gender}</p>
        <p>Age:{age}</p>
      </div>
    </div>
  );
};

export default Pet;
