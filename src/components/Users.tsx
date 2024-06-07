interface IUserInfo {
  name: string;
  email: string;
  mobile: number;
  experience: string;
  skills: string;
  url: string;
}

const Users: React.FC<IUserInfo> = (props) => {
  const { name, email, mobile, experience, skills, url } = props;
  return (
    <div className="userBox">
      <div className="imageBox">
        <img src={url} />
      </div>
      <div className="userInfo">
        <p>Name : {name}</p>
        <p>Experience : {experience}</p>
        <p>Mobile : {mobile}</p>
        <p>Email : {email}</p>
        <p>Skills : {skills}</p>
      </div>
    </div>
  );
};

export default Users;
