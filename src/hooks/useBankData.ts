
import { useEffect } from 'react'
import { create } from 'zustand'
import axios from 'axios'

interface IBankingList {
    banks: IBank[],
    setBanks: (banks: IBank[]) => void
}

interface IBank {
    bankName: string,
    description: string,
    age: number,
    url: string
}

const useStore = create<IBankingList>((set) => ({
    banks: [],
    setBanks: (banks) => set({ banks }),
}));

const useBankData = () => {
    const { banks, setBanks } = useStore();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://dev.obtenmas.com/catom/api/challenge/banks", {
                    headers: {
                        'Content-Type': 'application/json',
                       
                    },
                    withCredentials: true,
                });
                if (response.status === 200) { setBanks(response.data); } 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [setBanks]);

    return banks;
}

export default useBankData;