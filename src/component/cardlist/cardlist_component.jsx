import Card from "../cardcomponent/card";
import "../cardlist/cardlist.css";

function Cardlist(props) {
  const { filMonster } = props;
  return (
    <div className="card-list">
      {filMonster.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
}

export default Cardlist;
