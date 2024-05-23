import React, { useCallback, ComponentType } from 'react';

type WithOnChangeProps<T> = {
  onChange?: (event: React.ChangeEvent<T>) => void;
};

const withReactionEvent = <
  P extends object,
  T extends HTMLElement = HTMLElement
>(
  WrappedComponent: ComponentType<P & WithOnChangeProps<T>>
) => {
  const ComponentWithOnChange = (props: P) => {
    const handleClick = useCallback((event: React.ChangeEvent<T>) => {
      console.log(event.currentTarget);
    }, []);

    return <WrappedComponent {...props} onClick={handleClick} />;
  };

  return ComponentWithOnChange;
};

export default withReactionEvent;
