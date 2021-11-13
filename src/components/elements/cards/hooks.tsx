import { RefObject, useRef, useEffect, useState } from "react";

export function useEventListener<T extends HTMLElement = HTMLDivElement>(
  eventName: keyof WindowEventMap | string, // string to allow custom event
  handler: (event: Event) => boolean,
  element?: RefObject<T>
) {
  // Create a ref that stores handler
  const savedHandler = useRef<(event: Event) => boolean>();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // Define the listening target
    const targetElement: T | Window = element?.current || window;
    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }

    // Update saved handler if necessary
    if (savedHandler.current !== handler) {
      savedHandler.current = handler;
    }

    // Create event listener that calls handler function stored in ref
    const eventListener = (event: Event) => {
      // eslint-disable-next-line no-extra-boolean-cast
      if (!!savedHandler?.current) {
        let fin = savedHandler.current(event);
        setClicked(fin);
      }
    };

    targetElement.addEventListener(eventName, eventListener);

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element, handler]);
  return { clicked };
}

export const clickSaveUpdate = (e: Event): boolean => {
  const activeTargets = [
    "link2",
    "input__text_tiny",
    "input__text_tiny_wider",
    "card__delete",
    "card__delete_text",
  ];
  const target = e.target as HTMLElement;
  let found = activeTargets.find((item: string) =>
    target.classList.contains(item)
  );
  if (found) {
    return true;
  }
  return false;
};
