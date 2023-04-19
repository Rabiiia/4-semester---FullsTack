import React from 'react'

export default function Table({header, rows}:{header:JSX.Element, rows: JSX.Element[]}) {
  return (
    <div className="table">
        <div className="SplitPane-left"> {header}</div>
        <div className="SplitPane-right"> {rows}</div>
    </div>
  )
}

const Header = ({columns}: {columns:String[]}) => {
    return(
        <thead>
            <tr>
               {columns.map((column:String) => (
                <th>{column}</th>
               ))}
            </tr>
        </thead>
    )
}

const Row = ({row}: {row:String[]}): JSX.Element => {
    return (
        <tr>
            {row.map((cell:String) => (
                <td>{cell}</td>
            ))}
        </tr>
    );

}
 export {Header, Row};