import React from "react";
import type {
  LeaderboardEntry,
  LeaderboardHead,
} from "../../types/Leaderboard";

const head: LeaderboardHead[] = ["Klaskname", "Tier", "Rating"];

interface TableProps {
  rows: LeaderboardEntry[];
}

export const LeaderboardTable: React.FC<TableProps> = ({
  rows,
}: TableProps) => (
  <table className="table w-full">
    <thead>
      <tr>
        <th>#</th>
        {head.map(key =>
          key === "Klaskname" ? (
            <th className="w-3/4" key={`th-${key}`}>
              {key}
            </th>
          ) : (
            <th key={`th-${key}`}>{key}</th>
          ),
        )}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, index) => (
        <tr key={`tr-${row.id}`}>
          <td>{index}</td>
          {head.map(key =>
            key === "Klaskname" ? <th>{row[key]}</th> : <td>{row[key]}</td>,
          )}
        </tr>
      ))}
    </tbody>
  </table>
);
