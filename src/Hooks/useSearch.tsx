import useAdminDetails from './useAdminDetails';

function change(item: string): void {}

interface IReturn {
    value: string;

    onChange: typeof change;
}


export default function useSearch(): IReturn {
    const {search, setSearch} = useAdminDetails();

    const onChange = (value: string) => {
        setSearch(value);
        console.log(value);
    }
  return {
      value: search, 
      onChange,
  }
}
