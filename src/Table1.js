import React, {Component} from 'react'


const TableHeader = () => {
  return (
    <thead>
          <tr>
            <th>Category</th>
          </tr>
        </thead>
  )
}

const TableBody = () => {
    return (
      <tbody>
        <tr>
          <td><a href="url">Activitati sportive</a></td>
        </tr>
        <tr>
          <td><a href="url">Activitati sportive de recreere</a></td>
        </tr>
        <tr>
          <td><a href="url">Educatie</a></td>
        </tr>
        <tr>
          <td><a href="url">Social</a></td>
        </tr>
      </tbody>
    )
  }

  class Table1 extends Component {
    render() {
      return (
        <table>
          <TableHeader />
          <TableBody />
        </table>
      )
    }
  }

export default Table1