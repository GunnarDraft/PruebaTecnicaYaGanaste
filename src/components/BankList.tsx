
import { useEffect } from 'react'
import { create } from 'zustand'
import axios from 'axios'

interface IBankingList{
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

export default function BankList() {
    const { banks, setBanks } = useStore();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://dev.obtenmas.com/catom/api/challenge/banks", {
                    headers: { 
                        'Content-Type': 'application/json', 
                        'Referrer-Policy': 'no-referrer',  
                        'X-Content-Type-Options': 'nosniff', 
                        'X-Frame-Options': 'deny',  
                        'X-XSS-Protection': '1; mode=block', 
                        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains', 
                        'Content-Security-Policy': 'default-src \'self\'', 
                        'Feature-Policy': 'geolocation \'self\'; microphone \'none\'',  
                        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate', 
                    },
                    withCredentials: true,  
                }); 
                if(response.status === 200)
                setBanks(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [setBanks]);

    return (
        <div>
            <h1>Lista de bancos</h1>
            
            <ul>
                {banks.map((bank) => (
                    <li key={bank.bankName}>
                        <p>{bank.bankName}</p>
                        <p>{bank.description}</p>
                        <p>{bank.url}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
 
