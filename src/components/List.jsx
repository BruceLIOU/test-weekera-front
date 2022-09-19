const List = ({ data, error }) => {
  return (
    <div className="cardContainer">
      <table>
        <thead>
          <tr>
            <td>team X</td>
            <td>team Y</td>
          </tr>
        </thead>
        <tbody>
          {error ? (
            <tr>
              <td>Une erreur s'est produite...</td>
            </tr>
          ) : (
            <tr>
              <td width={"50%"}>
                {data.map((item, index) => {
                  return item.teamX ? <p key={index}>{item.teamX}</p> : "";
                })}
              </td>
              <td>
                {data.map((item, index) => {
                  return item.teamY ? <p key={index}>{item.teamY}</p> : "";
                })}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
