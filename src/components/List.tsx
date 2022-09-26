import React from "react";

const List= ({ data, error }:any)  => {
  console.log(data);
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
                { data?.map((item: { teamX: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => {
                  return item.teamX ? <p key={index}>{item.teamX}</p> : "";
                })}
              </td>
              <td>
                {data?.map((item: { teamY: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; }, index: React.Key | null | undefined) => {
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
