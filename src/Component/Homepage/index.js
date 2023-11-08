import "./index.css";

const Home = (props) => {
  const { provider, profile } = props;
  console.log(provider, profile);
  return (
    <div>
      <nav>
        <img alt="mailpicture" src={profile.picture} />
      </nav>
    </div>
  );
};

export default Home;
