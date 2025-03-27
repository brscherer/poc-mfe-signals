
    export type RemoteKeys = 'Counter/Counter' | 'Counter/Store';
    type PackageType<T> = T extends 'Counter/Store' ? typeof import('Counter/Store') :T extends 'Counter/Counter' ? typeof import('Counter/Counter') :any;