import { Ul, Li, H1, BankListContent, TitleContent } from '../styles/Styles'
import useBankData from '../hooks/useBankData'
function BankList() {
    const banks = useBankData();
    return (
        <BankListContent>
            <TitleContent>
                <H1>Lista de bancos</H1>
            </TitleContent>
            <Ul>
                {banks.length ? banks.map((bank) => (
                    <Li key={bank.bankName}>
                        <p><b>Banco: </b>{bank.bankName}</p>
                        <p><b>Descripción: </b>{bank.description}</p>
                        <p><b>Edad: </b>{bank.age}</p>
                        <p><b>URL: </b><a href={bank.url}> {bank.url}</a></p>
                    </Li>

                )) : <Li> <p><b> Sin Datos </b> </p></Li>}
            </Ul>
        </BankListContent>
    );
};

export default BankList;