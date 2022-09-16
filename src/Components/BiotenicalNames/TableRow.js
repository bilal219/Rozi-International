import React from 'react'
import { Link } from 'react-router-dom'

function TableRow(props) {
  return (
    <tr>
    <td className="hoverclass">
      <Link
        to={`/singleproduct/${props.code}`}
        style={{
          fontSize: 16,
          textDecoration: "none",
          color: "black",
          fontWeight: "bold"
        }}
      >
       {props.code}
      </Link>
    </td>
    <td className="hoverclass">
      <Link
        to={`/singleproduct/${props.code}`}
        style={{ fontSize: 16, textDecoration: "none", color: "black" }}
      >
        {props.english_name}
      </Link>
    </td>
    <td className="hoverclass">
      <Link
       to={`/singleproduct/${props.code}`}
        style={{ fontSize: 16, textDecoration: "none", color: "black" }}
      >
        {props.bot_name}
      </Link>
    </td>
    <td className="hoverclass">
      <Link
       to={`/singleproduct/${props.code}`}
        style={{ fontSize: 16, textDecoration: "none", color: "black" }}
      >
        {props.local_name}
      </Link>
    </td>
    <td className="hoverclass">
      <Link
       to={`/singleproduct/${props.code}`}
        style={{ fontSize: 16, textDecoration: "none", color: "black" }}
      >
        {props.chns_name}
      </Link>
    </td>
  </tr>
  )
}

export default TableRow