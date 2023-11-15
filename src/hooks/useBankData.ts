
import { useEffect } from 'react'
import { create } from 'zustand'
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

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
                const response = await fetch(process.env.NEXT_PUBLIC_URL_BANKS, {
                    method: 'GET', 
                });
                if (response.ok) {
                    const data = await response.json();
                    setBanks(data);
                } else {
                    console.error('Error fetching data:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [setBanks]);

    return banks;
}

export default useBankData;