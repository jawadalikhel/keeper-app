import React, {useState, useEffect} from "react";
import HighlightIcon from '@mui/icons-material/Highlight';

function Header() {
  const [data, setData] = useState();

  React.useEffect(() =>{
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message))

  })
  return (
    <header>
      <h1><HighlightIcon/>Keeper {data}</h1>
    </header>
  );
}

export default Header;
