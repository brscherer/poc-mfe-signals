
    export type RemoteKeys = 'Counter/Counter';
    type PackageType<T> = T extends 'Counter/Counter' ? typeof import('Counter/Counter') :any;