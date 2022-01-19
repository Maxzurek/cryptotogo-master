import { Grid } from "semantic-ui-react"
import { CoinDTO } from "../models/coin.models"
import CoinDetail from "./CoinDetail"



export default function CoinCards(props: coinCardsProps) {

    const renderGridColumn = () => {

        return (
            // props.theCoingeckoDTO.map((theCoinData, index) =>
            //     <Grid.Column key={index}>
            //         <CoinDetail
            //             key={index}
            //             theCoinDetailDTO={theCoinData}
            //         />
            //     </Grid.Column>
        // )
            <Grid.Column >
                <CoinDetail
                
                  //  theCoinDetailDTO = {undefined}
                />
            </Grid.Column>
            
        )
    }

    return (
        <>
            <Grid columns={3} container doubling stackable>
                {renderGridColumn()}
            </Grid>
        </>
    )
}

interface coinCardsProps {
    theCoingeckoDTO: CoinDTO[];

}