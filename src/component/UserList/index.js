import { useEffect, useState } from "react";

function UserList() {
  const [dataList, setDataList] = useState([]);
  const [changeData, setChangeData] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((resp) => {
        setDataList(
          resp.map((data) => {
            return {
              id: data.id,
              username: data.username,
              name: data.name,
              email: data.email,
              isEdit: false,
            };
          })
        );
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("are you sure to delete?")) {
      const idx = dataList.findIndex((x) => x.id === id);
      const cpyDataList = [...dataList];
      cpyDataList.splice(idx, 1);
      setDataList(cpyDataList);
    }
  };

  const handleClickEdit = (id) => {
    const idx = dataList.findIndex((x) => x.id === id);
    const cpyDataList = [...dataList];
    setDataList(
      cpyDataList.map((data) => {
        if (data.id === id) {
          data.isEdit = true;
        } else {
          data.isEdit = false;
        }
        return data;
      })
    );

    setChangeData({
      name: cpyDataList[idx].name,
      username: cpyDataList[idx].username,
      email: cpyDataList[idx].email,
    });
  };

  const handleClickCancel = (id) => {
    const idx = dataList.findIndex((x) => x.id === id);
    const cpyDataList = [...dataList];
    cpyDataList[idx].isEdit = false;
    setDataList(cpyDataList);
  };

  const handleClickSave = (id) => {
    const idx = dataList.findIndex((x) => x.id === id);
    const cpyDataList = [...dataList];
    cpyDataList[idx].name = changeData.name;
    cpyDataList[idx].username = changeData.username;
    cpyDataList[idx].email = changeData.email;
    cpyDataList[idx].isEdit = false;

    setDataList(cpyDataList);
  };

  const handleChange = (e, key) => {
    const newChangeData = { ...changeData };
    newChangeData[key] = e.target.value;
    setChangeData(newChangeData);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>
                {d.isEdit ? (
                  <input
                    value={changeData.name}
                    onChange={(e) => handleChange(e, "name")}
                  />
                ) : (
                  d.name
                )}
              </td>
              <td>
                {d.isEdit ? (
                  <input
                    value={changeData.username}
                    onChange={(e) => handleChange(e, "username")}
                  />
                ) : (
                  d.username
                )}
              </td>
              <td>
                {d.isEdit ? (
                  <input
                    value={changeData.email}
                    onChange={(e) => handleChange(e, "email")}
                  />
                ) : (
                  d.email
                )}
              </td>
              <td>
                {d.isEdit ? (
                  <>
                    <button onClick={() => handleClickSave(d.id)}>Save</button>
                    <button onClick={() => handleClickCancel(d.id)}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleClickEdit(d.id)}>Edit</button>
                    <button onClick={() => handleDelete(d.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
