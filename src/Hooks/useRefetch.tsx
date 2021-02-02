import React from 'react';

function refetch(): void {}

interface IProps {
    refetch: boolean;
    handleRefetch: typeof refetch;
}

export default function useRefch(): IProps {
    const [refetch, setRefetch] = React.useState(false);
    const handleRefetch = () => {
        setRefetch(prev => !prev);
    }
  return {
      refetch,
      handleRefetch,
  }
}
