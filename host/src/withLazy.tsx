import { useEffect, useRef, useState } from "react";

const withLazy = <P extends object>(Component: React.ComponentType<P>, moduleImport: () => Promise<unknown>, extractor: (arg0: unknown) => object) => {
  return function LazyComponent(props: P) {
    const lazyModuleRef = useRef({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      moduleImport().then((module: unknown) => {
        lazyModuleRef.current = extractor(module);
        setIsLoaded(true);
        return module;
      });
    }, []);
    
    return isLoaded ? <Component {...lazyModuleRef.current} {...props} /> : null;
  };
};

export default withLazy
