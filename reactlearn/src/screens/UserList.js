const UserList = () => {
  let data = [
    { name: "sham", collegeName: "pce", rollNo: 45 },
    { name: "ragav", collegeName: "pillai", rollNo: 50 },
    { name: "sameer", collegeName: "ztm", rollNo: 60 },
  ];
  return (
    <div>
      {data.map(({ name, collegeName, rollNo }) => {
        return (
          <div>
            <h1>{name}</h1>
            <p>{collegeName}</p>
            <p>{rollNo}</p>
          </div>
        );
      })}
    </div>
  );
};
export default UserList;
