import React from 'react'
import styles from '../../styles.module.css'

export const Table = (props) => {

  return <div className={styles.tableContainer}>
  <table className={styles.table}>
      <thead className={styles.thead}>
      <tr className={styles.tr}>
        {props.column.map(item => (
          <th className={styles.th} key={item.value}>
            {item.name}
          </th>
          ))}
      </tr>
      </thead>
      <tbody className={styles.tbody}>
      {props.data.map((item, index) =>
        <tr className={styles.tr} key={index}>
          {props.column.map(col =>
            <td className={styles.td} key={col.value}>{item[col.value]}</td>
          )}
        </tr>
      )}
      </tbody>
    </table>
  </div>
}
