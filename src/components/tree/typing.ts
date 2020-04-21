export interface AnyObject {
    [key: string]: any;

}

export interface DataNode extends AnyObject {
    key: string;
    children?: DataNode[];
    title?: string | React.ReactNode;
}

export interface FlattenNode extends AnyObject {
    key: string;
    title?: string | React.ReactNode;
    children: FlattenNode[];
    parent?: FlattenNode;
    position: string;
    node: DataNode;
}