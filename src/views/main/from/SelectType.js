import React from "react";

export default function SelectType({ getType }) {

  const [type, setType] = React.useState();


  const handleType = (e) => {
    setType(e)
  }

  React.useEffect(() => {
    getType(type)
  }, [type])


  return (
    <select className="option" onChange={(e) => handleType(e.target.value)}>
      <option value='task-type'>Task type</option>
      <option value='work'>work</option>
      <option value='school'>school</option>
      <option value='home'>home</option>
      <option value='personal'>personal</option>
    </select>
  );
}
