import React from "react";
import "./Tree.css";
import { DataNode } from "./typing";
import { dataNodesToEntities } from "./utils/conduct";

export interface ITreeProps {
  treeData: DataNode[];
}

function Tree(props: ITreeProps) {
  const { treeData } = props;
  // format tree data
  const treeEntities = dataNodesToEntities(treeData);
  return <div className="Tree"></div>;
}

export default Tree;
