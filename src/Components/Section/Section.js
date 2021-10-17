//import { Form, FormControl, Button, Image, Navbar, Nav, Container } from 'react-bootstrap';
import cards from "../../cardinfo.json";
//import "./Section.css";

export default function Section() {

    //Funcion para obtener una lista random de 20 cards
    const getListCards = () => {
        let i = 0;
        let cardList = [];
        while (i < 20) {
            cardList.push(cards.data[Math.floor(Math.random() * cards.data.length)])
            i++;
        }
        return cardList;
    }

    const limitedListCards = getListCards();

    console.log(limitedListCards);


    return (
        <section className="mt-5 pt-5">
            <p>THIS IS SECTION DE CARDSaaaaaaaaaaaaaaa</p>
            <p>THIS IS SECTION DE CARDS</p>
            <p>THIS IS SECTION DE CARDS</p>
            <p>THIS IS SECTION DE CARDS</p>
            <p>THIS IS SECTION DE CARDS</p>
        </section>
    );
}

/* {
    "data": [
        {
            "id": 6983839,
            "name": "Tornado Dragon",
            "type": "XYZ Monster",
            "desc": "2 Level 4 monsters\nOnce per turn (Quick Effect): You can detach 1 material from this card, then target 1 Spell/Trap on the field; destroy it.",
            "atk": 2100,
            "def": 2000,
            "level": 4,
            "race": "Wyrm",
            "attribute": "WIND",
            "card_sets": [
                {
                    "set_name": "Battles of Legend: Relentless Revenge",
                    "set_code": "BLRR-EN084",
                    "set_rarity": "Secret Rare",
                    "set_rarity_code": "(ScR)",
                    "set_price": "4.08"
                },
                {
                    "set_name": "Duel Devastator",
                    "set_code": "DUDE-EN019",
                    "set_rarity": "Ultra Rare",
                    "set_rarity_code": "(UR)",
                    "set_price": "1.4"
                },
                {
                    "set_name": "Maximum Crisis",
                    "set_code": "MACR-EN081",
                    "set_rarity": "Secret Rare",
                    "set_rarity_code": "(ScR)",
                    "set_price": "4.32"
                }
            ],
            "card_images": [
                {
                    "id": 6983839,
                    "image_url": "https://storage.googleapis.com/ygoprodeck.com/pics/6983839.jpg",
                    "image_url_small": "https://storage.googleapis.com/ygoprodeck.com/pics_small/6983839.jpg"
                }
            ],
            "card_prices": [
                {
                    "cardmarket_price": "0.42",
                    "tcgplayer_price": "0.48",
                    "ebay_price": "2.99",
                    "amazon_price": "0.77",
                    "coolstuffinc_price": "0.99"
                }
            ]
        }
    ]
} */