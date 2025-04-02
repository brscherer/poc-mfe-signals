import { useState, useRef, useCallback } from "react";

type Resolver<T> = () => Promise<T>;
type UseLazyLoadReturn<T> = [boolean, () => Promise<void>, (T | undefined)[]];

export default function useLazyLoad<T extends object>(resolvers: Resolver<T>[]): UseLazyLoadReturn<T> {
  const [isLoading, setIsLoading] = useState(false);
  const result = useRef<T[] | null>(null);

  // Always return array with same length as the number of components so the
  // hook's consumer can immediately destructure, for example:
  // const [loading, load, [Comp1, Comp2]] = useLazyLoad([lazyComp1, lazyComp2]);
  const placeholderResult = useRef<(T | undefined)[]>(Array(resolvers.length).fill(undefined));

  // This is the function we return for the consumer to
  // call and initiate loading of the component.
  // It's wrapped in a `useCallback` in case they also
  // want to pass it to a memoized component or otherwise
  // include it as a dependency.
  const load = useCallback(async () => {
    // Do nothing if the modules have already been loaded.
    if (result.current) return;

    try {
      setIsLoading(true);

      // Resolve each module.
      const modulePromises = resolvers.map((resolver) => resolver());
      const modules = await Promise.all(modulePromises);

      // If the module has a default export, return it directly,
      // Otherwise, return the entire object and let consumer handle it.
      result.current = modules.map((module) =>
        (module as { default?: T }).default ?? module
      );
    } catch (error) {
      // Do something with the error...
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [resolvers]);

  return [isLoading, load, result.current || placeholderResult.current];
}